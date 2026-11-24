"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  Flame,
  GraduationCap,
  Play,
  Sparkles,
  Target,
  Trophy,
  Clock3,
  ChevronRight,
  Crown,
  CheckCircle2,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const stats = [
  {
    title: "O'rganilgan darslar",
    value: "24",
    note: "Jami darslar",
    icon: BookOpen,
    color: "text-violet-300",
    bg: "bg-violet-500/10",
  },
  {
    title: "O'rganish vaqti",
    value: "18 soat",
    note: "Bu oy davomida",
    icon: Clock3,
    color: "text-blue-300",
    bg: "bg-blue-500/10",
  },
  {
    title: "Yig'ilgan ball",
    value: "1 250",
    note: "Faollik ballari",
    icon: Trophy,
    color: "text-amber-300",
    bg: "bg-amber-500/10",
  },
  {
    title: "Kunlik seriya",
    value: "7 kun",
    note: "Davom eting!",
    icon: Flame,
    color: "text-orange-300",
    bg: "bg-orange-500/10",
  },
];

const courses = [
  {
    title: "JavaScript asoslari",
    category: "Frontend dasturlash",
    progress: 75,
    lessons: "15 / 20 dars",
    color: "from-yellow-400 to-orange-500",
    icon: Code2,
    href: "/kurslar",
  },
  {
    title: "React.js",
    category: "Frontend dasturlash",
    progress: 42,
    lessons: "8 / 19 dars",
    color: "from-cyan-400 to-blue-500",
    icon: BrainCircuit,
    href: "/kurslar",
  },
  {
    title: "HTML va CSS",
    category: "Web dasturlash",
    progress: 100,
    lessons: "12 / 12 dars",
    color: "from-violet-400 to-fuchsia-500",
    icon: GraduationCap,
    href: "/kurslar",
  },
];

const quickActions = [
  {
    title: "AI Mentor",
    description: "Savollaringizga javob oling",
    icon: BrainCircuit,
    href: "/ai-mentor",
    color: "from-violet-500/20 to-indigo-500/10",
  },
  {
    title: "Darsliklar",
    description: "PDF va amaliy qo'llanmalar",
    icon: BookOpen,
    href: "/darsliklar",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Test ishlash",
    description: "Bilimingizni sinab ko'ring",
    icon: Target,
    href: "/testlar",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Coding Challenge",
    description: "Kod yozish orqali rivojlaning",
    icon: Code2,
    href: "/coding-challenge",
    color: "from-orange-500/20 to-rose-500/10",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-[#21163b] via-[#151326] to-[#10101a] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-[90px]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-200">
                <Sparkles size={14} />
                USTOZ ACADEMY PLATFORMASI
              </div>

              <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Xush kelibsiz,{" "}
                <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
                  dasturchi!
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                Bugun ham yangi bilimlar oling, amaliyot qiling va
                maqsadlaringiz sari yana bir qadam tashlang.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/kurslar"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#171323] transition hover:bg-violet-100"
                >
                  O'qishni davom ettirish
                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  href="/texnologiyalar"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Texnologiyalar
                </Link>
              </div>
            </div>

            <div className="hidden shrink-0 items-center justify-center md:flex">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-violet-300/20 bg-violet-400/[0.06]">
                <div className="absolute inset-3 rounded-full border border-dashed border-violet-300/30" />
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-2xl shadow-violet-500/30">
                  <GraduationCap size={48} className="text-white" />
                </div>
                <Sparkles className="absolute right-2 top-5 text-violet-200" size={22} />
                <Crown className="absolute bottom-5 left-2 text-amber-300" size={20} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Sizning natijalaringiz</h2>
              <p className="mt-1 text-xs text-zinc-500">O'quv faoliyatingiz statistikasi</p>
            </div>
            <span className="rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-400">
              Demo ma'lumotlar
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-white/[0.07] bg-[#11111a] p-5 transition hover:border-violet-400/20"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg}`}>
                      <Icon size={21} className={stat.color} />
                    </div>
                    <ArrowUpRight size={17} className="text-zinc-600" />
                  </div>
                  <p className="mt-5 text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-300">{stat.title}</p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.note}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white">Davom ettirilayotgan kurslar</h2>
              <p className="mt-1 text-xs text-zinc-500">O'qishni to'xtatmang!</p>
            </div>
            <Link href="/kurslar" className="flex items-center gap-1 text-xs font-semibold text-violet-300 hover:text-violet-200">
              Barcha kurslar <ChevronRight size={15} />
            </Link>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.title}
                  className="rounded-2xl border border-white/[0.07] bg-[#11111a] p-5 transition hover:-translate-y-1 hover:border-violet-400/20"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.color}`}>
                      <Icon size={23} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-white">{course.title}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{course.category}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-xs">
                    <span className="text-zinc-400">{course.lessons}</span>
                    <span className="font-bold text-violet-300">{course.progress}%</span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <Link
                    href={course.href}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                  >
                    {course.progress === 100 ? (
                      <>
                        <CheckCircle2 size={15} />
                        Tugallangan
                      </>
                    ) : (
                      <>
                        <Play size={14} />
                        Davom ettirish
                      </>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-lg font-bold text-white">Tezkor xizmatlar</h2>
            <p className="mt-1 text-xs text-zinc-500">Kerakli vositani tanlang va foydalanishni boshlang</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className={`group rounded-2xl border border-white/[0.07] bg-gradient-to-br ${action.color} p-5 transition hover:-translate-y-1 hover:border-violet-400/25`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                      <Icon size={21} className="text-white" />
                    </div>
                    <ArrowUpRight size={18} className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <h3 className="mt-5 font-bold text-white">{action.title}</h3>
                  <p className="mt-1 text-xs text-zinc-400">{action.description}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-400/15 bg-gradient-to-r from-amber-500/[0.08] to-orange-500/[0.03] p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/10">
                <Crown size={25} className="text-amber-300" />
              </div>
              <div>
                <h3 className="font-bold text-white">USTOZ Premium</h3>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  Qo'shimcha imkoniyatlar va premium ta'lim xizmatlari.
                </p>
              </div>
            </div>
            <Link
              href="/premium"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-amber-300/20 bg-amber-400/10 px-5 py-3 text-xs font-bold text-amber-200 transition hover:bg-amber-400/20"
            >
              Batafsil ma'lumot
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
