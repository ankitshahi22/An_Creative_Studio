"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const scrollFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const stats = [
  { end: 8, suffix: "+", label: "Years of work" },
  { end: 100, suffix: "+", label: "Creators served" },
  { end: 2, suffix: "M+", label: "Views generated" },
  { end: 98, suffix: "%", label: "Client satisfaction" },
];

function useCountUp(end, duration = 1800, triggered) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, end, duration]);

  return count;
}

function StatItem({ stat }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(stat.end, 1800, triggered);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <p className="font-[family-name:var(--font-sora)] text-5xl font-bold text-[#0EA5E9] mb-1 leading-none">
        {count}
        {stat.suffix}
      </p>
      <p className="text-[#bbb] text-xs uppercase tracking-widest mt-2">
        {stat.label}
      </p>
    </div>
  );
}

const WhyUsSection = () => {
  return (
    <section className="border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <motion.h2
            {...scrollFadeUp(0)}
            className="font-[family-name:var(--font-sora)] text-4xl font-bold text-(--fg) leading-tight mb-6"
          >
            A small team.
            <br />
            Serious craft.
          </motion.h2>
          <motion.p
            {...scrollFadeUp(0.12)}
            className="text-[#666] text-base leading-relaxed mb-4"
          >
            We&apos;re AN Creative Studios — a production team based in
            Hetauda, Nepal. Since 2016, we&apos;ve been making videos,
            designing brands, and building visual identities for creators and
            companies across the region.
          </motion.p>
          <motion.p
            {...scrollFadeUp(0.22)}
            className="text-[#666] text-base leading-relaxed"
          >
            No bloat. No middlemen. You work directly with the people doing
            the work.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-2">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
