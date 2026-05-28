"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { borderClr } from "../../store/data";
import { testimonials } from "../../store/data";

export default function StaggerTestimonials() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={`${borderClr} p-8`}>
      <h2 className="text-4xl font-bold text-center text-[#007bff]">
        TESTIMONIALS
      </h2>
      <div className="relative flex min-h-fit items-center justify-center overflow-hidden p-4">
        <div className="relative h-[350px]">
          <AnimatePresence>
            {testimonials.map((item, index) => {
              const position =
                (index - active + testimonials.length) % testimonials.length;

              let x = 0;
              let rotate = 0;
              let scale = 1;
              let zIndex = 0;
              let opacity = 1;

              if (position === 0) {
                x = 0;
                rotate = 0;
                scale = 1;
                zIndex = 10;
              } else if (position === 1) {
                x = 260;
                rotate = 3;
                scale = 0.92;
                zIndex = 1;
              } else if (position === testimonials.length - 1) {
                x = -260;
                rotate = -3;
                scale = 0.92;
                zIndex = 1;
              } else {
                x = 520;
                rotate = 6;
                scale = 0.85;
                opacity = 0;
                zIndex = 0;
              }

              const isActive = position === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ x: 0, rotate: 0, scale: 1, opacity: 1 }}
                  animate={{
                    x,
                    rotate,
                    scale,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    mass: 0.8,
                  }}
                  style={{ zIndex }}
                  className="absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 transform-gpu will-change-transform md:w-[500px]"
                >
                  <div
                    className={`min-h-[240px] w-[280px] lg:w-fit mx-auto border-2 border-black p-4 shadow-xl transition-colors duration-500 ${
                      isActive
                        ? "bg-linear-to-br from-blue-600 to-violet-600 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <p className="max-w-[360px] text-xl font-medium leading-tight">
                      {item.text}
                    </p>
                    <p
                      className={`absolute bottom-8 italic ${
                        isActive ? "text-white/80" : "text-black/70"
                      }`}
                    >
                      – {item.name} <br />{" "}
                      <span className="text-xs">{item.role}</span>
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-8">
            <button onClick={prevSlide} className="transition hover:scale-110">
              <ArrowLeft className="h-8 w-8 text-black" strokeWidth={1.5} />
            </button>

            <button onClick={nextSlide} className="transition hover:scale-110">
              <ArrowRight className="h-8 w-8 text-black" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
