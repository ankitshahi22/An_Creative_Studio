"use client";

import Link from "next/link";
import { motion } from "motion/react";
import TypeWriter from "./TypeWriter";
import HeroShader from "./HeroShader";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
});

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-(--border-color) flex flex-col justify-between min-h-[calc(100vh-57px)]">
      <HeroShader />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <motion.p
          {...fadeUp(0)}
          className="text-(--muted) text-xs font-[family-name:var(--font-inter)] tracking-widest uppercase mb-8"
        >
          Hetauda, Nepal &nbsp;·&nbsp; Est. 2016
        </motion.p>

        <h1 className="font-[family-name:var(--font-sora)] text-5xl md:text-7xl font-bold text-(--fg) leading-[1.05] mb-8">
          We create
          <br />
          <TypeWriter />
        </h1>

        <motion.p
          {...fadeUp(0.1)}
          className="text-(--muted) text-base md:text-lg max-w-lg leading-relaxed mb-10 font-[family-name:var(--font-inter)]"
        >
          Video editing, graphic design, and motion graphics for YouTube
          creators, brands, and businesses across Nepal.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="flex items-center gap-4 flex-wrap"
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-(--fg) text-(--bg) font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            Let&apos;s talk →
          </Link>
          <Link
            href="/work"
            className="px-6 py-3 border border-(--border-color) text-(--muted) text-sm hover:text-(--fg) hover:border-(--muted) transition-colors"
          >
            View work
          </Link>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.3)}
        className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pb-10"
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-(--muted) text-xs font-[family-name:var(--font-inter)] tracking-widest uppercase">
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
