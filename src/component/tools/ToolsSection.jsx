"use client";
import Image from "next/image";
import { motion } from "motion/react";

const tools = [
  { name: "Premiere Pro", src: "/premiere-pro.svg" },
  { name: "Adobe Photoshop", src: "/photoshop.svg" },
  { name: "Adobe Illustrator", src: "/illustrator.svg" },
  { name: "DaVinci Resolve", src: "/davinciResolve.png" },
  { name: "After Effects", src: "/after-effects.svg" },
];

const ToolsSection = () => {
  return (
    <section className="border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-widest text-[#888] mb-10"
        >
          Software Tools
        </motion.p>

        <div className="flex flex-wrap gap-8 sm:gap-12 items-center">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src={tool.src} alt={tool.name} width={48} height={48} />
              </div>
              <span className="text-[11px] text-[#888] tracking-wide text-center leading-tight">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
