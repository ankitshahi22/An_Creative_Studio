"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past ~100vh (first section)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
      className="fixed bottom-7 right-7 z-[9990] flex items-center gap-2 px-4 py-2.5 bg-[#f5f4f2] border border-[#e8e8e8] text-[#555] text-xs font-[family-name:var(--font-inter)] tracking-wide hover:border-[#bbb] hover:text-[#111] transition-colors"
    >
      <span>↑</span>
      <span className="hidden sm:inline">Scroll to top</span>
    </button>
  );
}
