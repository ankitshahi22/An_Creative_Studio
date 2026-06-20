"use client";

import { useState, useRef, useEffect } from "react";

const words = ["Graphics.", "Logos.", "Videos.", "Brands."];

const TypeWriter = () => {
  const [{ text, i, del, paused }, set] = useState({
    text: words[0],
    i: 0,
    del: false,
    paused: true,
  });

  const t = useRef(null);

  useEffect(() => {
    t.current = setTimeout(
      () => {
        set((s) => {
          const word = words[s.i % words.length];
          if (s.paused) return { ...s, paused: false, del: true };
          if (!s.del) {
            const next = word.slice(0, s.text.length + 1);
            return { ...s, text: next, paused: next.length === word.length };
          }
          const next = word.slice(0, s.text.length - 1);
          return {
            ...s,
            text: next,
            del: next.length > 0,
            i: next.length === 0 ? s.i + 1 : s.i,
          };
        });
      },
      paused ? 1400 : del ? 45 : 75,
    );
    return () => clearTimeout(t.current);
  }, [text, del, paused, i]);

  return (
    <span className="text-[#0EA5E9]">
      {text}
      <span className="animate-pulse opacity-60">|</span>
    </span>
  );
};

export default TypeWriter;
