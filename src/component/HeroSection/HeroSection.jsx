"use client";

import Link from "next/link";
import { motion } from "motion/react";
import TypeWriter from "./TypeWriter";
import HeroShader from "./HeroShader";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#e8e8e8] flex flex-col justify-between min-h-[calc(100vh-57px)]">
      <HeroShader />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <motion.p
          {...fadeUp(0)}
          className="text-[#888] text-xs font-[family-name:var(--font-inter)] tracking-widest uppercase mb-8"
        >
          Hetauda, Nepal &nbsp;·&nbsp; Est. 2016
        </motion.p>

        <motion.h1
          {...fadeUp(0.12)}
          className="font-[family-name:var(--font-sora)] text-5xl md:text-7xl font-bold text-[#111] leading-[1.05] mb-8"
        >
          We create
          <br />
          <TypeWriter />
        </motion.h1>

        <motion.p
          {...fadeUp(0.24)}
          className="text-[#888] text-base md:text-lg max-w-lg leading-relaxed mb-10 font-[family-name:var(--font-inter)]"
        >
          Video editing, graphic design, and motion graphics for YouTube
          creators, brands, and businesses across Nepal.
        </motion.p>

        <motion.div
          {...fadeUp(0.36)}
          className="flex items-center gap-4 flex-wrap"
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#111] text-white font-semibold text-sm hover:bg-[#333] transition-colors"
          >
            Let&apos;s talk →
          </Link>
          <Link
            href="/work"
            className="px-6 py-3 border border-[#e8e8e8] text-[#888] text-sm hover:text-[#111] hover:border-[#bbb] transition-colors"
          >
            View work
          </Link>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.5)}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-10"
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#888] text-xs font-[family-name:var(--font-inter)] tracking-widest uppercase">
          <span>Graphic Design</span>
          <span>·</span>
          <span>Video Editing</span>
          <span>·</span>
          <span>Motion Graphics</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
