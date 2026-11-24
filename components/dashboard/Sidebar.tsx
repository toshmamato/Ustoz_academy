"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, X, Sparkles, ChevronRight } from "lucide-react";
import { navigationGroups } from "@/lib/navigation";

type SidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Menyuni yopish"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[270px] flex-col border-r border-white/[0.07] bg-[#0b0b12] transition-transform duration-300 lg:sticky lg:top-0 lg:z-30 lg:h-screen lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/[0.07] px-6">
          <Link href="/dashboard" onClick={onClose} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
              <GraduationCap size={23} className="text-white" />
            </div>
            <div>
              <div className="text-[16px] font-black tracking-[0.13em] text-white">USTOZ</div>
              <div className="-mt-1 text-[9px] font-semibold tracking-[0.34em] text-violet-300">ACADEMY</div>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Yopish"
          >
            <X size={19} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="mb-5 rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/10 to-indigo-500/[0.04] p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-violet-200">
              <Sparkles size={14} />
              BILIM SARI
            </div>
            <p className="text-sm font-semibold text-white">Yangi bosqichni boshlang</p>
            <p className="mt-1 text-xs leading-5 text-zinc-400">
              O‘rganing, amalda sinang va rivojlaning.
            </p>
          </div>

          <nav className="space-y-6">
            {navigationGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-2 px-3 text-[10px] font-bold tracking-[0.18em] text-zinc-500">
                  {group.title}
                </p>

                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const active =
                      pathname === item.href ||
                      (item.href !== "/dashboard" && pathname.startsWith(`${item.href}/`));

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] transition ${
                          active
                            ? "border border-violet-400/15 bg-violet-500/15 font-semibold text-white"
                            : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <Icon
                            size={17}
                            className={active ? "text-violet-300" : "text-zinc-500 group-hover:text-violet-300"}
                          />
                          {item.title}
                        </span>
                        {active && <ChevronRight size={14} className="text-violet-300" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="shrink-0 border-t border-white/[0.07] p-4">
          <div className="rounded-xl bg-white/[0.035] px-3 py-3">
            <p className="text-xs font-semibold text-zinc-300">USTOZ ACADEMY</p>
            <p className="mt-1 text-[10px] text-zinc-500">© 2026 Barcha huquqlar himoyalangan</p>
          </div>
        </div>
      </aside>
    </>
  );
}
