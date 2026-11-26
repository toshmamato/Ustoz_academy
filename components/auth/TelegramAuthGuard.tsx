"use client";

import { useTelegramAuth } from "./TelegramAuthProvider";

export default function TelegramAuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status, error } = useTelegramAuth();

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#08080d] text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-violet-400/20 border-t-violet-400" />
          <p className="text-sm text-zinc-400">
            Telegram profilingiz tekshirilmoqda...
          </p>
        </div>
      </div>
    );
  }

  if (status !== "authenticated") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#08080d] px-5 text-white">
        <div className="w-full max-w-md rounded-3xl border border-violet-400/20 bg-[#11111a] p-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 text-3xl">
            🎓
          </div>

          <h1 className="text-2xl font-bold">
            USTOZ ACADEMY
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Shaxsiy kabinetingizga kirish uchun saytni
            @DevSchoolUzBot Telegram boti orqali oching.
          </p>

          {status === "error" && (
            <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-300">
              {error}
            </p>
          )}

          <a
            href="https://t.me/DevSchoolUzBot"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-500"
          >
            Telegram botni ochish
          </a>

          <p className="mt-4 text-xs text-zinc-500">
            Botda Start tugmasini bosing, so'ng Mini App menyusidan saytga kiring.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
