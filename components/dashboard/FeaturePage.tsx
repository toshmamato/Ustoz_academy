"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Play,
  Sparkles,
  Target,
  LockKeyhole,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

type PageInfo = {
  title: string;
  eyebrow: string;
  description: string;
  action: string;
  items: string[];
};

const pages: Record<string, PageInfo> = {
  "darsliklar": {
    title: "Darsliklar",
    eyebrow: "BILIMLAR KUTUBXONASI",
    description: "Dasturlash bo‘yicha elektron darsliklar, qo‘llanmalar va amaliy materiallarni o‘rganing.",
    action: "Darsliklarni ko‘rish",
    items: ["HTML va CSS qo‘llanmasi", "JavaScript darsliklari", "React va Next.js materiallari"],
  },
  "kurslar": {
    title: "O‘quv kurslari",
    eyebrow: "TA'LIM MARKAZI",
    description: "Bosqichma-bosqich tuzilgan kurslar orqali dasturlash ko‘nikmalaringizni rivojlantiring.",
    action: "Kursni boshlash",
    items: ["Frontend dasturlash", "Backend dasturlash", "Full Stack Development"],
  },
  "ai-mentor": {
    title: "AI Mentor",
    eyebrow: "SUN'IY INTELLEKT",
    description: "Dasturlash savollaringizni bering, kodlaringizni tushuntiring va AI yordamida o‘rganing.",
    action: "AI Mentor bilan boshlash",
    items: ["Dasturlash savol-javoblari", "Kodlarni tushuntirish", "O‘quv reja tuzish"],
  },
  "ai-interview": {
    title: "AI Interview",
    eyebrow: "INTERVYUGA TAYYORLANISH",
    description: "AI yordamida texnik suhbatlarga tayyorlaning va bilimlaringizni sinab ko‘ring.",
    action: "Intervyuni boshlash",
    items: ["Frontend intervyu", "Backend intervyu", "Texnik savollar"],
  },
  "ai-quiz": {
    title: "AI Quiz",
    eyebrow: "INTELLEKTUAL TESTLAR",
    description: "Turli texnologiyalar bo‘yicha bilim darajangizga mos testlar bilan shug‘ullaning.",
    action: "Test yaratish",
    items: ["JavaScript quiz", "React quiz", "Umumiy IT bilimlari"],
  },
  "ai-tools": {
    title: "AI Tools",
    eyebrow: "AI VOSITALAR MARKAZI",
    description: "Sun'iy intellekt yordamida hujjatlar, jadvallar, taqdimotlar va boshqa materiallar tayyorlang.",
    action: "Vositalarni ko‘rish",
    items: ["Word Maker va Excel Maker", "PDF Maker va Slide Maker", "AI Video va Voice"],
  },
  "analytics": {
    title: "Smart Analytics",
    eyebrow: "O‘QUV TAHLILI",
    description: "O‘quv jarayoningiz, faolligingiz va natijalaringizni tahlil qiling.",
    action: "Tahlilni ko‘rish",
    items: ["O‘rganish statistikasi", "Haftalik faollik", "Bilim rivojlanishi"],
  },
  "code-reviewer": {
    title: "Code Reviewer",
    eyebrow: "KOD TAHLILI",
    description: "Kodingizni tahlil qiling, xatolarni aniqlang va kod sifatini yaxshilang.",
    action: "Kodni tekshirish",
    items: ["Kod xatolarini aniqlash", "Kod sifatini baholash", "Yaxshilash tavsiyalari"],
  },
  "coding-challenge": {
    title: "Coding Challenge",
    eyebrow: "AMALIY DASTURLASH",
    description: "Turli murakkablikdagi dasturlash masalalarini yechib, tajribangizni oshiring.",
    action: "Masalani boshlash",
    items: ["Boshlang‘ich masalalar", "O‘rta darajadagi topshiriqlar", "Murakkab algoritmlar"],
  },
  "community": {
    title: "Community",
    eyebrow: "DASTURCHILAR HAMJAMIYATI",
    description: "Boshqa dasturchilar bilan fikr almashing, tajriba ulashing va yangi loyihalarni kashf eting.",
    action: "Hamjamiyatga kirish",
    items: ["Muhokamalar", "Savol-javoblar", "Loyihalar almashinuvi"],
  },
  "developer-hub": {
    title: "Developer Hub",
    eyebrow: "DEVELOPER EKOTIZIMI",
    description: "Dasturchilar uchun loyihalar, mentorlik, yangiliklar va hamkorlik imkoniyatlari.",
    action: "Developer Hub'ni ochish",
    items: ["Loyihalar ko‘rgazmasi", "Mentorlik va akademiya", "Freelance imkoniyatlari"],
  },
  "missiyalar": {
    title: "Kunlik missiyalar",
    eyebrow: "HAR KUN RIVOJLANING",
    description: "Har kuni yangi topshiriqlarni bajaring va o‘quv faolligingizni oshiring.",
    action: "Missiyani boshlash",
    items: ["Kunlik kod yozish", "Yangi mavzu o‘rganish", "Amaliy topshiriq bajarish"],
  },
  "premium": {
    title: "USTOZ Premium",
    eyebrow: "MAXSUS IMKONIYATLAR",
    description: "Premium obuna orqali platformaning qo‘shimcha ta'lim imkoniyatlaridan foydalaning.",
    action: "Premium haqida",
    items: ["Premium kurslar", "Maxsus AI imkoniyatlari", "Qo‘shimcha o‘quv materiallari"],
  },
  "profil": {
    title: "Mening profilim",
    eyebrow: "SHAXSIY KABINET",
    description: "Shaxsiy ma'lumotlaringiz, o‘quv natijalaringiz va platformadagi faolligingiz.",
    action: "Profilni tahrirlash",
    items: ["Shaxsiy ma'lumotlar", "O‘quv faoliyati", "Obuna va yutuqlar"],
  },
  "reyting": {
    title: "Reyting",
    eyebrow: "ENG FAOL O‘QUVCHILAR",
    description: "Platformadagi natijalaringizni kuzating va boshqa o‘quvchilar bilan bellashing.",
    action: "Reytingni ko‘rish",
    items: ["Haftalik reyting", "Oylik reyting", "Umumiy reyting"],
  },
  "roadmap": {
    title: "Learning Roadmap",
    eyebrow: "O‘RGANISH YO‘L XARITASI",
    description: "Maqsadingizga mos texnologiyalar va o‘rganish bosqichlarini rejalashtiring.",
    action: "Yo‘l xaritasini ko‘rish",
    items: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
  },
  "sertifikatlar": {
    title: "Sertifikatlar",
    eyebrow: "SIZNING YUTUQLARINGIZ",
    description: "O‘quv jarayonida qo‘lga kiritgan sertifikatlaringiz va natijalaringiz.",
    action: "Sertifikatlarni ko‘rish",
    items: ["Kurs sertifikatlari", "Test natijalari", "Yutuqlar tarixi"],
  },
  "testlar": {
    title: "Bilim testlari",
    eyebrow: "BILIMINGIZNI SINANG",
    description: "Dasturlash va IT yo‘nalishlari bo‘yicha bilimlaringizni tekshiring.",
    action: "Testni boshlash",
    items: ["HTML va CSS testlari", "JavaScript testlari", "React testlari"],
  },
  "turnirlar": {
    title: "Haftalik turnirlar",
    eyebrow: "BELLASHUV VA MUSOBAQA",
    description: "Boshqa dasturchilar bilan bilim va tezlik bo‘yicha bellashing.",
    action: "Turnirlarni ko‘rish",
    items: ["Haftalik coding turniri", "Algoritmik musobaqa", "Top ishtirokchilar"],
  },
  "yutuqlar": {
    title: "Yutuqlar",
    eyebrow: "RIVOJLANISH TARIXI",
    description: "Bajargan vazifalaringiz, erishgan natijalaringiz va ochilgan mukofotlaringiz.",
    action: "Yutuqlarni ko‘rish",
    items: ["Birinchi qadam", "Faol o‘quvchi", "Top dasturchi"],
  },
};

export default function FeaturePage({ pageKey }: { pageKey: string }) {
  const page = pages[pageKey];
  const [activeAction, setActiveAction] = useState("");

  if (!page) {
    return (
      <DashboardLayout>
        <div className="rounded-2xl border border-white/10 bg-[#11111a] p-8">
          Sahifa topilmadi.
          <Link href="/dashboard" className="ml-2 text-violet-300">Dashboard</Link>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-[#21163b] via-[#151326] to-[#10101a] p-6 sm:p-9">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-[11px] font-semibold tracking-wider text-violet-200">
              <Sparkles size={14} />
              {page.eyebrow}
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {page.title}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              {page.description}
            </p>

            <button
              type="button"
              onClick={() => setActiveAction(page.action)}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#171323] transition hover:bg-violet-100"
            >
              {page.action}
              <ArrowUpRight size={17} />
            </button>
          </div>
        </section>

        {activeAction && (
          <div className="flex flex-col gap-3 rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="shrink-0 text-violet-300" />
              <div>
                <p className="text-sm font-semibold text-white">{activeAction}</p>
                <p className="mt-1 text-xs text-zinc-400">
                  Bu funksiya hozir demo rejimida. Keyinchalik Telegram bot va umumiy baza bilan ulanadi.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveAction("")}
              className="self-start rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 sm:self-auto"
            >
              Yopish
            </button>
          </div>
        )}

        <section>
          <div className="mb-5">
            <h2 className="text-lg font-bold text-white">Bo‘lim imkoniyatlari</h2>
            <p className="mt-1 text-xs text-zinc-500">Ushbu bo‘limda foydalanishingiz mumkin bo‘lgan xizmatlar</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.items.map((item, index) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveAction(item)}
                className="group rounded-2xl border border-white/[0.07] bg-[#11111a] p-5 text-left transition hover:-translate-y-1 hover:border-violet-400/25 hover:bg-[#151522]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    {index === 0 ? <BookOpen size={21} /> : index === 1 ? <Target size={21} /> : <Sparkles size={21} />}
                  </div>
                  <ArrowUpRight size={18} className="text-zinc-600 transition group-hover:text-violet-300" />
                </div>
                <h3 className="mt-5 font-bold text-white">{item}</h3>
                <p className="mt-2 text-xs leading-6 text-zinc-500">
                  Ushbu yo‘nalish bo‘yicha materiallar va amaliy imkoniyatlar.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-violet-300">
                  <Play size={13} />
                  Ochish
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.07] bg-[#11111a] p-5">
            <BookOpen className="text-violet-300" size={21} />
            <p className="mt-4 text-xl font-bold text-white">Demo</p>
            <p className="mt-1 text-xs text-zinc-500">Namuna materiallar</p>
          </div>
          <div className="rounded-2xl border border-white/[0.07] bg-[#11111a] p-5">
            <Clock3 className="text-blue-300" size={21} />
            <p className="mt-4 text-xl font-bold text-white">24/7</p>
            <p className="mt-1 text-xs text-zinc-500">Platformadan foydalanish</p>
          </div>
          <div className="rounded-2xl border border-white/[0.07] bg-[#11111a] p-5">
            <LockKeyhole className="text-emerald-300" size={21} />
            <p className="mt-4 text-xl font-bold text-white">Keyingi bosqich</p>
            <p className="mt-1 text-xs text-zinc-500">Bot va baza integratsiyasi</p>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-[#11111a] p-5">
          <div>
            <p className="font-semibold text-white">Yana nimalarni o‘rganmoqchisiz?</p>
            <p className="mt-1 text-xs text-zinc-500">Boshqa bo‘limlarni ham ko‘rib chiqing.</p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            Dashboard
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
