"use client";

import Link from "next/link";
import { Bell, Home, Menu, Search, Sparkles } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-white/[0.07] bg-[#08080d]/85 px-4 backdrop-blur-2xl sm:px-7">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Menyuni ochish"
        >
          <Menu size={20} />
        </button>

        <div className="hidden items-center gap-2 text-sm text-zinc-500 sm:flex">
          <Sparkles size={15} className="text-violet-400" />
          <span>Bilim sari yangi bosqich</span>
        </div>

        <div className="relative w-full sm:hidden">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            placeholder="Qidirish..."
            className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-9 pr-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-400/40"
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <div className="relative hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            placeholder="Darslik yoki xizmat qidirish..."
            className="h-10 w-[260px] rounded-xl border border-white/10 bg-white/[0.04] pl-9 pr-3 text-xs text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/40"
          />
        </div>

        <Link
          href="/"
          title="Bosh sahifaga qaytish"
          aria-label="Bosh sahifaga qaytish"
          className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-3 text-sm font-medium text-violet-200 transition hover:border-violet-400/40 hover:bg-violet-500/20"
        >
          <Home size={17} />
          <span className="hidden sm:inline">Bosh sahifa</span>
        </Link>

        <button
          type="button"
          aria-label="Bildirishnomalar"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
        </button>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 text-sm font-bold text-violet-200">
          U
        </div>
      </div>
    </header>
  );
}
