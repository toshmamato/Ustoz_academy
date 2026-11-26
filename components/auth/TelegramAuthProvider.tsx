"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type TelegramUser = {
  telegramId: string;
  firstName: string;
  username: string;
  role: string;
  premiumUntil: string | null;
  xp: number;
  level: number;
  streak: number;
  longestStreak: number;
  earnedBadges: string[];
  referralCount: number;
};

type AuthStatus = "loading" | "authenticated" | "telegram_required" | "error";

type AuthContextType = {
  user: TelegramUser | null;
  status: AuthStatus;
  error: string;
};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData: string;
        ready: () => void;
        expand: () => void;
      };
    };
  }
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  status: "loading",
  error: "",
});

export function useTelegramAuth() {
  return useContext(AuthContext);
}

export default function TelegramAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");
  const [error, setError] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let active = true;

    const authenticate = async () => {
      const webApp = window.Telegram?.WebApp;

      if (!webApp?.initData) {
        if (active) setStatus("telegram_required");
        return;
      }

      try {
        webApp.ready();
        webApp.expand();

        const response = await fetch("/api/auth/telegram", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          cache: "no-store",
          body: JSON.stringify({
            initData: webApp.initData,
          }),
        });

        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Telegram orqali kirishda xatolik");
        }

        if (!active) return;

        setUser(data.user);
        setStatus("authenticated");

        if (pathname === "/") {
          router.replace("/dashboard");
        }
      } catch (err) {
        if (!active) return;

        setUser(null);
        setError(
          err instanceof Error
            ? err.message
            : "Autentifikatsiyada xatolik yuz berdi"
        );
        setStatus("error");
      }
    };

    if (window.Telegram?.WebApp) {
      void authenticate();
    } else {
      const script = document.createElement("script");
      script.id = "telegram-web-app-sdk";
      script.src = "https://telegram.org/js/telegram-web-app.js";
      script.async = true;

      script.onload = () => {
        void authenticate();
      };

      script.onerror = () => {
        if (active) {
          setStatus("telegram_required");
        }
      };

      document.head.appendChild(script);
    }

    return () => {
      active = false;
    };
  }, [pathname, router]);

  return (
    <AuthContext.Provider value={{ user, status, error }}>
      {children}
    </AuthContext.Provider>
  );
}
