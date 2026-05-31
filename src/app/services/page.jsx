"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { SERVICES } from "../../store/data";

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width;
    const cy = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (cy - 0.5) * -14, y: (cx - 0.5) * 14 });
    setShine({ x: cx * 100, y: cy * 100, opacity: 0.05 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setShine((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition:
            tilt.x === 0 && tilt.y === 0
              ? "transform 0.5s ease"
              : "transform 0.08s linear",
          willChange: "transform",
        }}
        className="relative h-full overflow-hidden border border-[#e8e8e8] bg-white"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(14,165,233,${shine.opacity}) 0%, transparent 60%)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <div className="relative z-10 flex flex-col gap-6 p-8 h-full">
          <div>
            <p className="text-[#0EA5E9] text-xs tracking-widest uppercase mb-3">
              0{index + 1}
            </p>
            <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#111]">
              {service.name}
            </h3>
          </div>

          <p className="text-sm text-[#888] leading-relaxed">
            {service.description}
          </p>

          <div className="border-t border-[#f0f0f0]" />

          <ul className="flex flex-col gap-3.5 flex-1">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-[#0EA5E9] shrink-0 mt-2" />
                <span className="text-sm text-[#888] hover:text-[#444] transition-colors duration-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-svh border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <p className="text-[#888] text-xs tracking-widest uppercase mb-4">
          What we offer
        </p>
        <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-(--fg) mb-16">
          Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-red-500">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
