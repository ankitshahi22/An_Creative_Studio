"use client";

import { useState, useRef, useEffect } from "react";

const interests = ["Graphics.", "Logos.", "Videos.", "Brands."];

const TypeWriter = () => {
  const [{ text, i, del, paused }, set] = useState({
    text: "",
    i: 0,
    del: false,
    paused: false,
  });

  const t = useRef(null);
  const word = interests[i % interests.length];

  useEffect(() => {
    t.current = setTimeout(
      () => {
        set((s) => {
          const currentWord = interests[s.i % interests.length];

          if (s.paused) {
            return { ...s, paused: false, del: true };
          }

          if (!s.del) {
            const newText = currentWord.slice(0, s.text.length + 1);
            return {
              ...s,
              text: newText,
              paused: newText.length === currentWord.length,
            };
          }

          const newText = currentWord.slice(0, s.text.length - 1);
          return {
            ...s,
            text: newText,
            del: newText.length > 0,
            i: newText.length === 0 ? s.i + 1 : s.i,
          };
        });
      },
      paused ? 1500 : del ? 50 : 80,
    );

    return () => clearTimeout(t.current);
  }, [text, del, paused, i]);

  return <div className="text-[#6366F1] font-semibold">{text}</div>;
};

export default TypeWriter;
