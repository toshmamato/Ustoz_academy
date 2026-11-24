"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2550);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#08080d]"
        >
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]"
          />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 shadow-[0_0_60px_rgba(139,92,246,0.25)]"
            >
              <span className="text-4xl font-black text-white">U</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, letterSpacing: "0.12em" }}
              transition={{ duration: 1 }}
              className="text-center text-2xl font-black text-white sm:text-4xl"
            >
              USTOZ <span className="text-violet-400">ACADEMY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-3 text-xs tracking-[0.3em] text-zinc-500 sm:text-sm"
            >
              BILIM SARI YANGI BOSQICH
            </motion.p>

            <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
