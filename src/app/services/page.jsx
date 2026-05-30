"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { borderClr, SERVICES } from "../../store/data";

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
    setTilt({ x: (cy - 0.5) * -18, y: (cx - 0.5) * 18 });
    setShine({ x: cx * 100, y: cy * 100, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setShine((s) => ({ ...s, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition:
            tilt.x === 0 && tilt.y === 0
              ? "transform 0.5s ease"
              : "transform 0.08s linear",
          willChange: "transform",
        }}
        className="relative h-full rounded-3xl overflow-hidden"
      >
        {/* Shine overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.opacity}) 0%, transparent 65%)`,
            pointerEvents: "none",
            transition: shine.opacity === 0 ? "opacity 0.5s ease" : "none",
            zIndex: 1,
            borderRadius: "inherit",
          }}
        />

        <div className="flex flex-col gap-5 bg-neutral-800 p-6 h-full rounded-3xl border border-neutral-700">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{service.emoji}</span>
            <h3 className="text-lg font-bold text-neutral-50">{service.name}</h3>
          </div>

          <p className="text-sm text-neutral-400">{service.description}</p>

          <div className="border-t border-neutral-700" />

          <ul className="flex flex-col gap-3 flex-1">
            {service.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${service.dotColor}`}
                />
                <span className="text-sm font-semibold text-neutral-200">
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
    <div className={`${borderClr}`}>
      <div className="flex flex-col items-center justify-center gap-12 py-16 px-4 min-h-svh">
        <div className="flex flex-col items-center gap-2 uppercase text-center">
          <p className="text-[#0ea5e9]">Our Expertise</p>
          <h2 className="text-4xl font-bold">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[80%] mx-auto items-stretch">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
