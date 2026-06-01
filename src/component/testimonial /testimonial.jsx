"use client";

import { testimonials } from "../../store/data";
import Image from "next/image";
import { motion } from "motion/react";

export default function StaggerTestimonials() {
  return (
    <section className="border-b border-[#e8e8e8] overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#888] text-xs tracking-widest uppercase mb-3">
              Client words
            </p>
            <h2 className="font-(family-name:--font-sora) text-4xl font-bold text-(--fg)">
              Testimonials
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-[#e8e8e8] bg-white flex flex-col gap-4"
            >
              <span className="text-5xl text-[#ddd] font-serif leading-none select-none -mb-6">
                &ldquo;
              </span>
              <p className="text-sm text-[#333] leading-relaxed font-(family-name:--font-sora) flex-1">
                {item.text}
              </p>
              <div className="border-t border-[#e8e8e8] pt-4 flex items-center gap-1">
                <Image
                  src="/userIcon.png"
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-[#111]">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#999] mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
