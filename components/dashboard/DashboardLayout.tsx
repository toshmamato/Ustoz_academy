"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TelegramAuthGuard from "@/components/auth/TelegramAuthGuard";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <TelegramAuthGuard>
      <div className="min-h-screen bg-[#08080d] text-white lg:flex">
        <Sidebar
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />

        <div className="min-w-0 flex-1">
          <Header onMenuClick={() => setMobileOpen(true)} />

          <main className="mx-auto w-full max-w-[1600px] p-4 sm:p-7 lg:p-9">
            {children}
          </main>
        </div>
      </div>
    </TelegramAuthGuard>
  );
}
