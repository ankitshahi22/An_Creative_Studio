"use client";

import Link from "next/link";
import { motion } from "motion/react";
import WorkSection from "./WorkSection";
import { scrollFadeUp } from "@/utils/animations";

export default function Work() {
  return (
    <section className="border-b border-[#e8e8e8] overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-4">
        <motion.p
          {...scrollFadeUp(0)}
          className="text-[#888] text-xs tracking-widest uppercase mb-3"
        >
          What we do
        </motion.p>
        <motion.h2
          {...scrollFadeUp(0.1)}
          className="font-(family-name:--font-sora) text-4xl font-bold text-(--fg)"
        >
          Services
        </motion.h2>
      </div>

      <WorkSection />

      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 pb-16 pt-8">
        <motion.div {...scrollFadeUp(0)}>
          <Link
            href="/work"
            className="text-sm text-[#555] hover:text-[#0EA5E9] transition-colors"
          >
            View past work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
