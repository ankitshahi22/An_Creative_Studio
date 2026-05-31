"use client";

import Link from "next/link";
import { motion } from "motion/react";

const scrollFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const GetInTouchSection = () => {
  return (
    <section className="border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <motion.p
          {...scrollFadeUp(0)}
          className="text-[#bbb] text-xs tracking-widest uppercase mb-6"
        >
          Ready to work together?
        </motion.p>
        <motion.h2
          {...scrollFadeUp(0.1)}
          className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl md:text-6xl font-bold text-(--fg) leading-[1.05] mb-8 sm:mb-10 max-w-xl"
        >
          Let&apos;s build something worth showing.
        </motion.h2>

        <motion.div
          {...scrollFadeUp(0.22)}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <Link
            href="/contact"
            className="px-4 py-2.5 bg-[#111] text-white font-semibold text-sm hover:bg-[#333] transition-colors dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8] rounded-lg"
          >
            Send a message →
          </Link>
          <a
            href="mailto:ancreativestudio@gmail.com"
            className="text-[#888] text-sm hover:text-[#111] transition-colors"
          >
            ancreativestudio@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
