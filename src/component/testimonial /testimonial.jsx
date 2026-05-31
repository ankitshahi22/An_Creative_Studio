"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "../../store/data";

export default function StaggerTestimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () =>
    setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section className="border-b border-[#e8e8e8] overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#bbb] text-xs tracking-widest uppercase mb-3">
              Client words
            </p>
            <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#111]">
              Testimonials
            </h2>
          </div>
        </div>

        <div className="relative h-[280px]">
          <AnimatePresence>
            {testimonials.map((item, index) => {
              const position =
                (index - active + testimonials.length) % testimonials.length;

              let x = 0,
                rotate = 0,
                scale = 1,
                zIndex = 0,
                opacity = 1;

              if (position === 0) {
                x = 0;
                rotate = 0;
                scale = 1;
                zIndex = 10;
              } else if (position === 1) {
                x = 240;
                rotate = 2;
                scale = 0.93;
                zIndex = 5;
                opacity = 0.4;
              } else if (position === testimonials.length - 1) {
                x = -240;
                rotate = -2;
                scale = 0.93;
                zIndex = 5;
                opacity = 0.4;
              } else {
                x = 480;
                rotate = 4;
                scale = 0.87;
                opacity = 0;
                zIndex = 0;
              }

              const isActive = position === 0;

              return (
                <motion.div
                  key={index}
                  animate={{ x, rotate, scale, opacity }}
                  transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 20,
                    mass: 0.8,
                  }}
                  style={{ zIndex }}
                  className="absolute left-1/2 top-0 w-[300px] md:w-[350px] -translate-x-1/2"
                >
                  <div
                    className={`p-8 border transition-colors duration-300 ${
                      isActive
                        ? "bg-white border-[#e8e8e8] border-l-[#0EA5E9] border-l-2"
                        : "bg-[#f5f5f5] border-[#f0f0f0]"
                    }`}
                  >
                    <p
                      className={`text-lg leading-snug mb-6 font-[family-name:var(--font-sora)] ${
                        isActive ? "text-[#111]" : "text-[#ccc]"
                      }`}
                    >
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <p
                      className={`text-sm font-semibold ${isActive ? "text-[#111]" : "text-[#ccc]"}`}
                    >
                      {item.name}
                    </p>
                    <p
                      className={`text-xs mt-0.5 ${isActive ? "text-[#999]" : "text-[#ccc]"}`}
                    >
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-3 mt-2 sm:mt-0">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#e8e8e8] flex items-center justify-center text-[#bbb] hover:text-[#111] hover:border-[#bbb] transition-colors"
            aria-label="Previous"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-[#e8e8e8] flex items-center justify-center text-[#bbb] hover:text-[#111] hover:border-[#bbb] transition-colors"
            aria-label="Next"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
