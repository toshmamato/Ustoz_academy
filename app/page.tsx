"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Command,
  FileText,
  GraduationCap,
  Layers3,
  Menu,
  Play,
  Search,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const technologies = [
  { name: "HTML & CSS", category: "Frontend", lessons: 24, icon: "🌐", color: "from-orange-500/20 to-rose-500/10", level: "Boshlang‘ich" },
  { name: "JavaScript", category: "Frontend", lessons: 36, icon: "⚡", color: "from-yellow-500/20 to-orange-500/10", level: "Boshlang‘ich" },
  { name: "React.js", category: "Frontend", lessons: 28, icon: "⚛️", color: "from-cyan-500/20 to-blue-500/10", level: "O‘rta" },
  { name: "Next.js", category: "Frontend", lessons: 22, icon: "▲", color: "from-white/10 to-slate-500/10", level: "Yuqori" },
  { name: "Node.js", category: "Backend", lessons: 31, icon: "🟢", color: "from-green-500/20 to-emerald-500/10", level: "O‘rta" },
  { name: "Python", category: "Backend", lessons: 40, icon: "🐍", color: "from-blue-500/20 to-yellow-500/10", level: "Boshlang‘ich" },
];

const features = [
  { icon: BookOpen, title: "Tizimli darsliklar", description: "Mavzularni bosqichma-bosqich o‘rganing va bilimlaringizni mustahkamlang." },
  { icon: Zap, title: "Tezkor o‘rganish", description: "Kerakli materiallarni ortiqcha vaqt yo‘qotmasdan toping." },
  { icon: GraduationCap, title: "IT bilimlar", description: "Zamonaviy dasturlash texnologiyalari bilan tanishing." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTechnologies = useMemo(
    () =>
      technologies.filter((technology) =>
        `${technology.name} ${technology.category}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [search]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-60 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />
        <div className="absolute top-[900px] -left-40 h-[450px] w-[450px] rounded-full bg-indigo-600/[0.08] blur-[130px]" />
        <div className="absolute top-[1700px] -right-40 h-[450px] w-[450px] rounded-full bg-purple-600/[0.07] blur-[130px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#08080d]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20">
              <GraduationCap size={23} className="text-white" />
            </div>
            <div>
              <div className="text-[17px] font-black tracking-[0.13em] text-white">USTOZ</div>
              <div className="-mt-1 text-[9px] font-semibold tracking-[0.34em] text-violet-300">ACADEMY</div>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            <a href="/" className="text-sm text-zinc-300 transition hover:text-white">Bosh sahifa</a>
            <a href="/biz-haqimizda" className="text-sm text-zinc-300 transition hover:text-white">Biz haqimizda</a>
            <a href="/texnologiyalar" className="text-sm text-zinc-300 transition hover:text-white">Texnologiyalar</a>
            <a href="/darsliklar" className="text-sm text-zinc-300 transition hover:text-white">Darsliklar</a>
            <a href="/kurslar" className="text-sm text-zinc-300 transition hover:text-white">Kurslar</a>
            <a href="/ai-mentor" className="text-sm text-zinc-300 transition hover:text-white">AI Mentor</a>
            <a href="/testlar" className="text-sm text-zinc-300 transition hover:text-white">Testlar</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="/darsliklar" className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:border-violet-400/50 hover:bg-white/5">
              Darsliklarni ko‘rish
            </a>
            <a href="/kurslar" className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-black transition hover:bg-violet-100">
              Boshlash <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
            aria-label="Menyuni ochish"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0c0c14] px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-1">
              {[
                ["Bosh sahifa", "/"],
                ["Biz haqimizda", "/biz-haqimizda"],
                ["Texnologiyalar", "/texnologiyalar"],
                ["Darsliklar", "/darsliklar"],
                ["Kurslar", "/kurslar"],
                ["AI Mentor", "/ai-mentor"],
                ["Testlar", "/testlar"],
                ["Reyting", "/reyting"],
                ["Premium", "/premium"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
                  {label}
                </a>
              ))}
              <a href="/kurslar" onClick={closeMenu} className="mt-2 rounded-xl bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white">
                O‘rganishni boshlash
              </a>
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-32 lg:pt-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-medium text-violet-200">
            <Sparkles size={14} />
            Kelajagingiz uchun zamonaviy bilimlar
            <ArrowUpRight size={13} />
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.1] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
            Bilim oling.
            <br />
            <span className="gradient-text">Imkoniyat</span> yarating.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            Dasturlash olamiga ishonch bilan qadam qo‘ying. Zamonaviy
            texnologiyalar, tartibli darsliklar va foydali materiallar
            — barchasi bitta platformada.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#technologies" className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-1 hover:shadow-violet-600/30">
              O‘rganishni boshlash
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#features" className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.07]">
              <Play size={16} className="fill-current" />
              Platforma haqida
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7">
            {["Tartibli materiallar", "Qulay o‘rganish", "Zamonaviy bilimlar"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 size={15} className="text-violet-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[530px]"
        >
          <div className="absolute -inset-10 rounded-full bg-violet-600/10 blur-[90px]" />
          <div className="glass glow relative overflow-hidden rounded-[28px] p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Command size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Learning space</div>
                  <div className="mt-1 text-xs text-zinc-500">Sizning bilim markazingiz</div>
                </div>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                ONLINE
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 via-indigo-500/[0.07] to-transparent p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400">O‘rganish yo‘nalishi</span>
                <Layers3 size={18} className="text-violet-300" />
              </div>
              <div className="mt-4 text-2xl font-bold text-white">Frontend Development</div>
              <div className="mt-2 text-sm text-zinc-400">Zamonaviy web dasturlash olami</div>
              <div className="mt-6 flex gap-2">
                {["HTML", "CSS", "JS", "React"].map((item, index) => (
                  <div key={item} className={`flex h-11 flex-1 items-center justify-center rounded-xl border text-xs font-bold ${index === 3 ? "border-violet-400/30 bg-violet-500/20 text-violet-200" : "border-white/[0.07] bg-white/[0.04] text-zinc-300"}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                <BookOpen size={20} className="text-violet-300" />
                <div className="mt-4 text-2xl font-black text-white">PDF</div>
                <div className="mt-1 text-xs text-zinc-500">O‘quv materiallari</div>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                <Code2 size={20} className="text-indigo-300" />
                <div className="mt-4 text-2xl font-black text-white">IT</div>
                <div className="mt-1 text-xs text-zinc-500">Dasturlash bilimlari</div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Zap size={19} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">Bilim sari harakat</div>
                <div className="mt-1 text-xs text-zinc-500">Har bir yangi mavzu — yangi imkoniyat</div>
              </div>
              <ArrowUpRight size={18} className="text-zinc-500" />
            </div>
          </div>

          <div className="absolute -right-3 -top-5 hidden animate-float rounded-2xl border border-white/10 bg-[#171522] p-4 shadow-2xl sm:block">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-300">✦</div>
              <div>
                <div className="text-xs font-bold text-white">Yangi bilimlar</div>
                <div className="text-[10px] text-zinc-500">Yangi imkoniyatlar</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-9 sm:px-8 md:grid-cols-4">
          {[
            ["01", "Yagona platforma"],
            ["IT", "Zamonaviy yo‘nalishlar"],
            ["PDF", "O‘quv materiallari"],
            ["24/7", "Bilim olish imkoniyati"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">{value}</div>
              <div className="mt-2 text-xs text-zinc-500 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="technologies" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
              <span className="h-px w-7 bg-violet-400" />
              O‘rganish markazi
            </div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Texnologiyalar <span className="gradient-text">olami.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              O‘zingizga kerakli yo‘nalishni tanlang va bilim olishni boshlang.
            </p>
          </div>

          <div className="relative w-full md:max-w-xs">
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Texnologiyani qidirish..."
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400/50 focus:bg-white/[0.06]"
            />
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTechnologies.map((technology, index) => (
            <motion.a
              href="#features"
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#11111a] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-[#151522]"
            >
              <div className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${technology.color} blur-3xl transition group-hover:scale-150`} />
              <div className="relative flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.04] text-2xl">
                  {technology.icon}
                </div>
                <ArrowUpRight size={19} className="text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" />
              </div>
              <div className="relative mt-7">
                <div className="text-xs font-medium text-violet-300">{technology.category}</div>
                <h3 className="mt-2 text-xl font-bold text-white">{technology.name}</h3>
                <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                  <span className="flex items-center gap-2 text-xs text-zinc-500">
                    <FileText size={14} /> {technology.lessons} ta dars
                  </span>
                  <span className="rounded-lg bg-white/[0.05] px-2.5 py-1.5 text-[10px] text-zinc-400">{technology.level}</span>
                </div>
              </div>
            </motion.a>
          ))}
          {filteredTechnologies.length === 0 && (
            <div className="col-span-full rounded-2xl border border-white/10 p-10 text-center text-sm text-zinc-400">
              Bu nomdagi texnologiya topilmadi.
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-zinc-500">Hozircha namunaviy texnologiyalar ko‘rsatilmoqda. Katalog bot bazasi bilan bog‘lanadi.</p>
        </div>
      </section>

      <section id="features" className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Nima uchun USTOZ?</div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              O‘rganish uchun <span className="gradient-text">hamma narsa.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
              Bilim olish jarayonini sodda, tartibli va qulay qilish uchun yaratilgan platforma.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/[0.08] bg-[#11111a] p-7 transition hover:border-violet-400/25"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-[#151321] to-indigo-600/10 px-7 py-14 text-center sm:px-14 sm:py-20">
          <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-violet-200">
              <Sparkles size={26} />
            </div>
            <h2 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Kelajagingizni bugun boshlang.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-300">
              Yangi texnologiyalarni o‘rganing, imkoniyatlaringizni kengaytiring va IT olamida o‘z yo‘lingizni yarating.
            </p>
            <a href="#technologies" className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-black transition hover:-translate-y-1 hover:bg-violet-100">
              Darsliklarni ko‘rish <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.08] bg-[#07070b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
              <GraduationCap size={20} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.12em] text-white">USTOZ ACADEMY</div>
              <div className="mt-0.5 text-[10px] text-zinc-500">Bilim sari yangi bosqich</div>
            </div>
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-500">
            <a href="#home" className="transition hover:text-white">Bosh sahifa</a>
            <a href="#technologies" className="transition hover:text-white">Texnologiyalar</a>
            <a href="#features" className="transition hover:text-white">Imkoniyatlar</a>
          </div>
          <div className="text-xs text-zinc-600">© 2026 USTOZ ACADEMY. Barcha huquqlar himoyalangan.</div>
        </div>
      </footer>
    </main>
  );
}



