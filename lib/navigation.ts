import {
  House,
  Info,
  LayoutDashboard,
  Code2,
  BookOpen,
  GraduationCap,
  BrainCircuit,
  ClipboardCheck,
  Trophy,
  Crown,
  UserRound,
  Award,
  Target,
  Swords,
  Medal,
  Users,
  BriefcaseBusiness,
  Video,
  FileText,
  FileSpreadsheet,
  Presentation,
  Mic,
  MessageSquareCode,
  Route,
  ChartNoAxesCombined,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    title: "ASOSIY",
    items: [
      { title: "Bosh sahifa", href: "/", icon: House },
      { title: "Biz haqimizda", href: "/biz-haqimizda", icon: Info },
      { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { title: "Texnologiyalar", href: "/texnologiyalar", icon: Code2 },
      { title: "Darsliklar", href: "/darsliklar", icon: BookOpen },
      { title: "Kurslar", href: "/kurslar", icon: GraduationCap },
    ],
  },
  {
    title: "AI MARKAZ",
    items: [
      { title: "AI Mentor", href: "/ai-mentor", icon: BrainCircuit },
      { title: "AI Interview", href: "/ai-interview", icon: MessageSquareCode },
      { title: "AI Quiz", href: "/ai-quiz", icon: ClipboardCheck },
      { title: "AI Tools", href: "/ai-tools", icon: Presentation },
      { title: "AI Analytics", href: "/analytics", icon: ChartNoAxesCombined },
    ],
  },
  {
    title: "DASTURCHILAR",
    items: [
      { title: "Coding Challenge", href: "/coding-challenge", icon: Code2 },
      { title: "Code Reviewer", href: "/code-reviewer", icon: MessageSquareCode },
      { title: "Learning Roadmap", href: "/roadmap", icon: Route },
      { title: "Developer Hub", href: "/developer-hub", icon: Users },
      { title: "Community", href: "/community", icon: BriefcaseBusiness },
    ],
  },
  {
    title: "NATIJALAR",
    items: [
      { title: "Testlar", href: "/testlar", icon: ClipboardCheck },
      { title: "Reyting", href: "/reyting", icon: Trophy },
      { title: "Missiyalar", href: "/missiyalar", icon: Target },
      { title: "Turnirlar", href: "/turnirlar", icon: Swords },
      { title: "Yutuqlar", href: "/yutuqlar", icon: Medal },
      { title: "Sertifikatlar", href: "/sertifikatlar", icon: Award },
    ],
  },
  {
    title: "SHAXSIY KABINET",
    items: [
      { title: "Mening profilim", href: "/profil", icon: UserRound },
      { title: "Premium", href: "/premium", icon: Crown },
    ],
  },
];

export const aiTools = [
  { title: "Word Maker", icon: FileText },
  { title: "Excel Maker", icon: FileSpreadsheet },
  { title: "PDF Maker", icon: FileText },
  { title: "Slide Maker", icon: Presentation },
  { title: "Video Generator", icon: Video },
  { title: "Voice AI", icon: Mic },
];

