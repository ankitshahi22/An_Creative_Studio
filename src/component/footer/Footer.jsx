"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import GetCurrentTime from "../../utils/CurrentTime";
import { borderClr, footerData, linksData } from "../../store/data";

const colFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

const Footer = () => {
  return (
    <footer>
      <div className={`${borderClr} border-[#e8e8e8]`}>
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-12 sm:py-16 grid md:grid-cols-3 gap-10 md:gap-12">
          <motion.div {...colFadeUp(0)} className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/Logo.png"
                alt="AN Creative Studios"
                loading="eager"
                width={28}
                height={28}
              />
              <span className="text-sm font-semibold text-[#111] font-[family-name:var(--font-sora)]">
                AN Creative Studios™
              </span>
            </div>
            <p className="text-[lab(48.496_0_0)] text-sm leading-relaxed max-w-xs">
              AN Creative Studios™ is a creative production studio dedicated to
              delivering impactful design and video solutions. We combine
              strategy, creativity, and precision to elevate brands across Nepal
              and beyond.
            </p>
          </motion.div>

          <motion.div {...colFadeUp(0.1)}>
            <p className="text-[#888] font-semibold text-xs tracking-widest uppercase mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {linksData.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-sm text-[lab(48.496_0_0)] hover:text-[#111] transition-colors w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div {...colFadeUp(0.2)}>
            <p className="text-[#888] font-semibold text-xs tracking-widest uppercase mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              {footerData.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-[lab(48.496_0_0)]"
                >
                  <span className="text-[#ccc]">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
              <a
                href="mailto:ancreativestudio@gmail.com"
                className="text-sm text-[lab(48.496_0_0)] hover:text-[#0EA5E9] transition-colors mt-1"
              >
                ancreativestudio@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-[#f0f0f0]">
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between text-sm text-[#888]">
          <p>2026 © AN Creative Studios™</p>
          <p>
            <GetCurrentTime /> <span>NPT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
