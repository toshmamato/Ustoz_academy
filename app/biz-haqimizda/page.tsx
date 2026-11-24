"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Code2,
  GraduationCap,
  Heart,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Trophy,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Aniq maqsad",
    description: "Har bir o‘quvchiga o‘z oldiga maqsad qo‘yish va unga bosqichma-bosqich erishishda yordam berish.",
  },
  {
    icon: Lightbulb,
    title: "Amaliy bilim",
    description: "Nazariy bilimlarni amaliy mashqlar, loyihalar va zamonaviy texnologiyalar bilan mustahkamlash.",
  },
  {
    icon: Heart,
    title: "Doimiy rivojlanish",
    description: "O‘rganish, tajriba almashish va yangi imkoniyatlarni kashf etish uchun muhit yaratish.",
  },
];

const directions = [
  { icon: Code2, title: "Dasturlash", description: "HTML, CSS, JavaScript, React, Next.js va boshqa texnologiyalar." },
  { icon: BrainCircuit, title: "Sun’iy intellekt", description: "AI vositalari, AI Mentor va zamonaviy avtomatlashtirish." },
  { icon: BookOpen, title: "Darsliklar", description: "Mavzular bo‘yicha tartiblangan elektron darsliklar va materiallar." },
  { icon: GraduationCap, title: "Kurslar", description: "Bosqichma-bosqich o‘rganish va bilimlarni mustahkamlash." },
];

const team = [
  {
    icon: Users,
    title: "Akademiya asoschilari",
    description: "USTOZ ACADEMY g‘oyasi, rivojlanish strategiyasi va ta’lim yo‘nalishlarini shakllantirish.",
  },
  {
    icon: GraduationCap,
    title: "Ta’lim jamoasi",
    description: "O‘quv materiallari, darslar va bilimlarni o‘zlashtirish jarayonini rivojlantirish.",
  },
  {
    icon: Code2,
    title: "Texnologiya jamoasi",
    description: "Platforma, raqamli vositalar va foydalanuvchilar uchun qulay imkoniyatlar yaratish.",
  },
];

const stats = [
  { value: "24/7", label: "Bilim olish imkoniyati" },
  { value: "AI", label: "Sun’iy intellekt vositalari" },
  { value: "IT", label: "Zamonaviy texnologiyalar" },
  { value: "∞", label: "Rivojlanish imkoniyatlari" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080d] text-white">
      <header className="border-b border-white/[0.07] bg-[#08080d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 font-black">
              U
            </div>
            <div>
              <p className="font-bold tracking-wide">USTOZ ACADEMY</p>
              <p className="text-[10px] tracking-[0.25em] text-violet-300">BILIM SARI</p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/" className="hidden items-center gap-2 rounded-xl px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white sm:flex">
              <ArrowLeft size={16} />
              Bosh sahifa
            </Link>
            <Link href="/dashboard" className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-violet-500">
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      <section className="relative px-5 pb-24 pt-24 lg:px-8 lg:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200"
          >
            <GraduationCap size={17} />
            Biz haqimizda
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Bilim oling.
            <span className="block bg-gradient-to-r from-violet-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
              Imkoniyat yarating.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
          >
            USTOZ ACADEMY — zamonaviy texnologiyalar, dasturlash va sun’iy
            intellekt yo‘nalishlarida bilim olish hamda o‘z ustida ishlash
            uchun yaratilayotgan ta’lim platformasi.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/kurslar" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold transition hover:bg-violet-500">
              Kurslarni ko‘rish <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold transition hover:bg-white/[0.08]">
              Platformaga o‘tish
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.02] px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-black text-violet-300 sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Bizning hikoyamiz</p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">
              Ta’limni zamonaviy texnologiyalar bilan birlashtiramiz.
            </h2>
            <p className="mt-6 leading-8 text-gray-400">
              USTOZ ACADEMY o‘quvchilarga IT sohasini o‘rganish uchun qulay
              raqamli muhit yaratishni maqsad qiladi. Platformada darsliklar,
              kurslar, testlar, AI vositalari va shaxsiy natijalarni kuzatish
              imkoniyatlari bir joyga jamlanadi.
            </p>
            <p className="mt-4 leading-8 text-gray-400">
              Bizning yondashuvimiz — faqat ma’lumot berish emas, balki
              o‘rgangan bilimlarni amaliyotda qo‘llash, loyihalar yaratish
              va doimiy rivojlanishga rag‘batlantirish.
            </p>
          </div>

          <div className="relative rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-500/10 to-indigo-500/[0.03] p-8 sm:p-10">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
              <Rocket size={28} />
            </div>
            <h3 className="text-2xl font-bold">Bizning maqsadimiz</h3>
            <p className="mt-4 leading-8 text-gray-400">
              Har bir foydalanuvchi uchun bilim olish, o‘z mahoratini
              rivojlantirish va IT sohasidagi imkoniyatlarga tayyorlanish
              jarayonini yanada qulay qilish.
            </p>
            <div className="mt-8 h-px bg-white/10" />
            <div className="mt-6 flex items-center gap-3 text-sm text-violet-200">
              <ShieldCheck size={18} />
              Bilim, amaliyot va rivojlanish
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Yo‘nalishlarimiz</p>
            <h2 className="text-3xl font-black sm:text-4xl">Nimalarni o‘rganishingiz mumkin?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Turli yo‘nalishlar orqali bilim va ko‘nikmalaringizni rivojlantiring.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {directions.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.05]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.02] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Qadriyatlarimiz</p>
            <h2 className="text-3xl font-black sm:text-4xl">Biz ishonadigan tamoyillar</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/[0.07] bg-[#11111a] p-7">
                  <Icon className="mb-5 text-violet-300" size={28} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">Jamoamiz</p>
            <h2 className="text-3xl font-black sm:text-4xl">Birgalikda rivojlanamiz</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Akademiya rivojida turli yo‘nalishlar bo‘yicha jamoaviy ish muhim o‘rin tutadi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-xs text-gray-600">
            Jamoa a’zolarining ismlari va lavozimlari rasmiy ma’lumotlar tasdiqlangach kiritiladi.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/15 via-indigo-600/10 to-transparent p-8 text-center sm:p-14">
          <Trophy className="mx-auto mb-6 text-violet-300" size={34} />
          <h2 className="text-3xl font-black sm:text-4xl">O‘z rivojlanishingizni bugun boshlang</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            USTOZ ACADEMY platformasiga o‘ting va bilim olish uchun mavjud imkoniyatlar bilan tanishing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold transition hover:bg-violet-500">
              Dashboardga o‘tish <ArrowRight size={18} />
            </Link>
            <Link href="/" className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold transition hover:bg-white/5">
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 USTOZ ACADEMY. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-5">
            <Link href="/" className="transition hover:text-white">Bosh sahifa</Link>
            <Link href="/dashboard" className="transition hover:text-white">Dashboard</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
