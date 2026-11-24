"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  ShieldCheck,
  Palette,
  Server,
  Globe,
  Smartphone,
  GitBranch,
  Database,
  Cpu,
  Layers,
  Terminal,
  Cloud,
  Lock,
  Sparkles,
  BookOpen,
} from "lucide-react";

const categories = [
  "Barchasi",
  "Dasturlash",
  "Sun’iy intellekt",
  "Dizayn",
  "Kiberxavfsizlik",
  "DevOps",
];

const technologies = [
  {
    name: "HTML",
    slug: "html",
    category: "Dasturlash",
    level: "Boshlang‘ich",
    description: "Veb-sahifalarning tuzilishini yaratish uchun asosiy belgilash tili.",
    details: "HTML yordamida veb-sahifaning sarlavhalari, matnlari, rasmlari, havolalari va boshqa elementlari yaratiladi. Bu veb-dasturlashni o‘rganishdagi birinchi qadamlardan biridir.",
    icon: Globe,
    color: "from-orange-500/20 to-red-500/5",
    accent: "text-orange-400",
    lessons: 12,
  },
  {
    name: "CSS",
    slug: "css",
    category: "Dasturlash",
    level: "Boshlang‘ich",
    description: "Veb-sahifalarga chiroyli dizayn va animatsiyalar berish.",
    details: "CSS orqali ranglar, shriftlar, joylashuv, responsive dizayn va animatsiyalar boshqariladi. HTML bilan birgalikda zamonaviy saytlar yaratish uchun ishlatiladi.",
    icon: Palette,
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-400",
    lessons: 15,
  },
  {
    name: "JavaScript",
    slug: "javascript",
    category: "Dasturlash",
    level: "Boshlang‘ich",
    description: "Veb-saytlarga interaktivlik va dinamik imkoniyatlar qo‘shish.",
    details: "JavaScript brauzerda ishlaydigan dasturlash tili. U orqali interaktiv interfeyslar, dinamik ilovalar va server dasturlarini yaratish mumkin.",
    icon: Code2,
    color: "from-yellow-500/20 to-amber-500/5",
    accent: "text-yellow-400",
    lessons: 24,
  },
  {
    name: "TypeScript",
    slug: "typescript",
    category: "Dasturlash",
    level: "O‘rta",
    description: "JavaScript uchun statik tiplash imkoniyatlarini taqdim etadi.",
    details: "TypeScript katta loyihalarda kodni tushunarli va ishonchli yozishga yordam beradi. U JavaScript imkoniyatlarini kengaytiradi.",
    icon: Terminal,
    color: "from-blue-600/20 to-indigo-500/5",
    accent: "text-blue-300",
    lessons: 18,
  },
  {
    name: "React.js",
    slug: "react",
    category: "Dasturlash",
    level: "O‘rta",
    description: "Zamonaviy va interaktiv foydalanuvchi interfeyslarini yaratish.",
    details: "React komponentlar asosida ishlaydi. U orqali qayta foydalaniladigan UI qismlari, dinamik sahifalar va murakkab frontend ilovalar yaratiladi.",
    icon: Layers,
    color: "from-cyan-500/20 to-blue-500/5",
    accent: "text-cyan-300",
    lessons: 20,
  },
  {
    name: "Next.js",
    slug: "nextjs",
    category: "Dasturlash",
    level: "O‘rta",
    description: "React asosida to‘liq imkoniyatli web-ilovalar yaratish.",
    details: "Next.js server va client komponentlari, routing, API, optimallashtirish va boshqa imkoniyatlar bilan professional web-ilovalar yaratishga yordam beradi.",
    icon: Globe,
    color: "from-zinc-500/20 to-zinc-400/5",
    accent: "text-zinc-200",
    lessons: 22,
  },
  {
    name: "Node.js",
    slug: "nodejs",
    category: "Dasturlash",
    level: "O‘rta",
    description: "JavaScript yordamida server va backend dasturlar yaratish.",
    details: "Node.js JavaScript kodini server muhitida ishlatish imkonini beradi. API, real-time ilovalar va backend xizmatlarini yaratishda keng qo‘llanadi.",
    icon: Server,
    color: "from-green-500/20 to-emerald-500/5",
    accent: "text-green-400",
    lessons: 19,
  },
  {
    name: "Python",
    slug: "python",
    category: "Dasturlash",
    level: "Boshlang‘ich",
    description: "Sodda sintaksisga ega universal dasturlash tili.",
    details: "Python web dasturlash, avtomatlashtirish, ma’lumotlar tahlili va sun’iy intellekt loyihalarida ishlatiladi.",
    icon: Code2,
    color: "from-yellow-500/20 to-blue-500/5",
    accent: "text-yellow-300",
    lessons: 21,
  },
  {
    name: "Artificial Intelligence",
    slug: "artificial-intelligence",
    category: "Sun’iy intellekt",
    level: "O‘rta",
    description: "Aqlli tizimlar va AI yechimlarini o‘rganish.",
    details: "Sun’iy intellekt kompyuterlarga ma’lumotlarni tahlil qilish, o‘rganish va murakkab vazifalarni bajarish imkonini beradigan texnologiyalar yo‘nalishidir.",
    icon: BrainCircuit,
    color: "from-purple-500/20 to-fuchsia-500/5",
    accent: "text-purple-300",
    lessons: 16,
  },
  {
    name: "Machine Learning",
    slug: "machine-learning",
    category: "Sun’iy intellekt",
    level: "Yuqori",
    description: "Ma’lumotlardan o‘rganadigan algoritmlarni yaratish.",
    details: "Machine Learning orqali tizimlar ma’lumotlar asosida qonuniyatlarni aniqlaydi va yangi natijalarni bashorat qilishni o‘rganadi.",
    icon: Cpu,
    color: "from-fuchsia-500/20 to-purple-500/5",
    accent: "text-fuchsia-300",
    lessons: 14,
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    category: "Dizayn",
    level: "Boshlang‘ich",
    description: "Foydalanuvchi uchun qulay va chiroyli interfeyslar yaratish.",
    details: "UI dizayn interfeysning tashqi ko‘rinishiga, UX esa foydalanuvchi tajribasi va qulayligiga e’tibor qaratadi.",
    icon: Palette,
    color: "from-pink-500/20 to-rose-500/5",
    accent: "text-pink-300",
    lessons: 13,
  },
  {
    name: "Figma",
    slug: "figma",
    category: "Dizayn",
    level: "Boshlang‘ich",
    description: "Interfeys va prototiplarni loyihalash vositasi.",
    details: "Figma yordamida sayt va mobil ilovalar dizaynini yaratish, prototiplash hamda jamoa bilan hamkorlikda ishlash mumkin.",
    icon: Layers,
    color: "from-purple-500/20 to-orange-500/5",
    accent: "text-purple-300",
    lessons: 11,
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    category: "Kiberxavfsizlik",
    level: "O‘rta",
    description: "Tizimlar va ma’lumotlarni raqamli tahdidlardan himoya qilish.",
    details: "Kiberxavfsizlik tarmoqlar, serverlar, dasturlar va ma’lumotlarni ruxsatsiz kirish hamda zararli hujumlardan himoyalashni o‘rgatadi.",
    icon: ShieldCheck,
    color: "from-red-500/20 to-orange-500/5",
    accent: "text-red-300",
    lessons: 17,
  },
  {
    name: "Git & GitHub",
    slug: "git-github",
    category: "DevOps",
    level: "Boshlang‘ich",
    description: "Kod versiyalarini boshqarish va loyihalarni saqlash.",
    details: "Git koddagi o‘zgarishlarni boshqaradi. GitHub esa loyihalarni onlayn saqlash, ulashish va jamoa bilan ishlashga yordam beradi.",
    icon: GitBranch,
    color: "from-orange-500/20 to-zinc-500/5",
    accent: "text-orange-300",
    lessons: 10,
  },
  {
    name: "Database",
    slug: "database",
    category: "Dasturlash",
    level: "O‘rta",
    description: "Ma’lumotlarni saqlash, boshqarish va ulardan foydalanish.",
    details: "Ma’lumotlar bazalari ilovalardagi foydalanuvchilar, mahsulotlar va boshqa ma’lumotlarni tartibli saqlash uchun ishlatiladi.",
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "text-emerald-300",
    lessons: 15,
  },
  {
    name: "DevOps",
    slug: "devops",
    category: "DevOps",
    level: "Yuqori",
    description: "Dasturlarni yetkazib berish va infratuzilmani boshqarish.",
    details: "DevOps dasturlash va tizim boshqaruvi jarayonlarini birlashtiradi. CI/CD, avtomatlashtirish, monitoring va deployment asoslarini qamrab oladi.",
    icon: Cloud,
    color: "from-sky-500/20 to-indigo-500/5",
    accent: "text-sky-300",
    lessons: 12,
  },
];

export default function TechnologiesPage() {
  const [activeCategory, setActiveCategory] = useState("Barchasi");
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<
    (typeof technologies)[number] | null
  >(null);

  const filteredTechnologies = useMemo(() => {
    const query = search.trim().toLowerCase();

    return technologies.filter((tech) => {
      const matchesCategory =
        activeCategory === "Barchasi" || tech.category === activeCategory;

      const matchesSearch =
        !query ||
        tech.name.toLowerCase().includes(query) ||
        tech.description.toLowerCase().includes(query) ||
        tech.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#08080d] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute top-[650px] -left-48 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#08080d]/80 backdrop-blur-2xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10">
              <BookOpen className="h-5 w-5 text-purple-300" />
            </div>
            <div>
              <div className="text-sm font-black tracking-[0.16em]">
                USTOZ <span className="text-purple-300">ACADEMY</span>
              </div>
              <div className="mt-0.5 text-[9px] tracking-[0.25em] text-zinc-500">
                BILIM SARI YANGI BOSQICH
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="/" className="transition hover:text-white">Bosh sahifa</a>
            <a href="/texnologiyalar" className="text-purple-300">Texnologiyalar</a>
            <a href="/#features" className="transition hover:text-white">Imkoniyatlar</a>
          </nav>

          <a
            href="/"
            className="rounded-xl border border-white/10 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-purple-400/40 hover:text-white"
          >
            Bosh sahifa
          </a>
        </div>
      </header>

      <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-medium text-purple-200">
            <Sparkles className="h-3.5 w-3.5" />
            Bilim va texnologiyalar olamiga xush kelibsiz
          </div>

          <h1 className="text-4xl font-black leading-[1.13] tracking-tight sm:text-6xl">
            O‘zingizga mos
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              texnologiyani tanlang
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Dasturlash, sun’iy intellekt, dizayn va zamonaviy IT yo‘nalishlarini
            bir joyda o‘rganing. Bilimingizni yangi bosqichga olib chiqing.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
              {technologies.length} ta texnologiya
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
              6 ta yo‘nalish
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2">
              Barcha darajalar uchun
            </span>
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Texnologiyalar katalogi</h2>
            <p className="mt-2 text-sm text-zinc-500">
              O‘zingizga kerakli yo‘nalishni toping va o‘rganishni boshlang.
            </p>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Texnologiyani qidirish..."
              className="h-12 w-full rounded-xl border border-white/10 bg-[#11111a] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/10"
            />
          </div>
        </div>

        <div className="mb-9 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${
                activeCategory === category
                  ? "border-purple-400/40 bg-purple-500/15 text-purple-200"
                  : "border-white/[0.07] bg-white/[0.025] text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs text-zinc-500">
            Natijalar: <span className="font-semibold text-zinc-300">{filteredTechnologies.length}</span>
          </p>
          <p className="hidden text-xs text-zinc-600 sm:block">
            Batafsil ma’lumot uchun kartani bosing
          </p>
        </div>

        {filteredTechnologies.length > 0 ? (
          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredTechnologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.button
                  layout
                  key={tech.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.035, 0.25) }}
                  onClick={() => setSelectedTech(tech)}
                  className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#11111a]/90 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-[#151522]"
                >
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${tech.color} blur-2xl transition duration-500 group-hover:scale-150`} />

                  <div className="relative flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.07] bg-gradient-to-br ${tech.color}`}>
                      <Icon className={`h-6 w-6 ${tech.accent}`} />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300" />
                  </div>

                  <div className="relative mt-6">
                    <div className="text-lg font-bold tracking-tight text-white">
                      {tech.name}
                    </div>
                    <p className="mt-2 min-h-[44px] text-xs leading-5 text-zinc-500">
                      {tech.description}
                    </p>
                  </div>

                  <div className="relative mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
                    <span className="rounded-lg bg-white/[0.04] px-2.5 py-1.5 text-[10px] text-zinc-400">
                      {tech.category}
                    </span>
                    <span className="text-[10px] font-medium text-zinc-500">
                      {tech.level}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <div className="rounded-2xl border border-white/[0.07] bg-[#11111a] px-5 py-16 text-center">
            <Search className="mx-auto h-8 w-8 text-zinc-600" />
            <h3 className="mt-4 text-lg font-bold">Hech narsa topilmadi</h3>
            <p className="mt-2 text-sm text-zinc-500">
              Qidiruv so‘zini yoki tanlangan yo‘nalishni o‘zgartirib ko‘ring.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("Barchasi");
              }}
              className="mt-5 rounded-xl border border-purple-400/30 bg-purple-500/10 px-4 py-2.5 text-xs font-semibold text-purple-200 transition hover:bg-purple-500/20"
            >
              Filtrlarni tozalash
            </button>
          </div>
        )}
      </section>

      <footer className="relative border-t border-white/[0.07] bg-[#0b0b12]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
          <div className="text-xs text-zinc-600">
            © 2026 USTOZ ACADEMY. Barcha huquqlar himoyalangan.
          </div>
          <div className="text-xs text-zinc-600">
            Bilim oling. Imkoniyat yarating.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedTech && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedTech.name} haqida`}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#11111a] p-6 shadow-2xl sm:p-8"
            >
              <div className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${selectedTech.color} blur-3xl`} />

              <button
                onClick={() => setSelectedTech(null)}
                aria-label="Yopish"
                className="absolute right-5 top-5 z-10 rounded-xl border border-white/10 bg-white/[0.04] p-2 text-zinc-400 transition hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative">
                {(() => {
                  const Icon = selectedTech.icon;
                  return (
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${selectedTech.color}`}>
                      <Icon className={`h-7 w-7 ${selectedTech.accent}`} />
                    </div>
                  );
                })()}

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-[10px] text-purple-200">
                    {selectedTech.category}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-zinc-400">
                    {selectedTech.level}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-black tracking-tight">
                  {selectedTech.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {selectedTech.details}
                </p>

                <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <BookOpen className="h-5 w-5 text-purple-300" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {selectedTech.lessons} ta dars rejalashtirilgan
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">
                      Darsliklar katalogi keyingi bosqichda ulanadi.
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedTech(null)}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                >
                  Tushunarli
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
