import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "USTOZ ACADEMY — Bilim sari yangi bosqich",
    template: "%s | USTOZ ACADEMY",
  },
  description:
    "Dasturlash texnologiyalari, amaliy darsliklar va zamonaviy bilimlar platformasi.",
  applicationName: "USTOZ ACADEMY",
  keywords: [
    "Ustoz Academy",
    "Dasturlash",
    "IT ta'lim",
    "React",
    "Next.js",
    "JavaScript",
    "Darsliklar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
