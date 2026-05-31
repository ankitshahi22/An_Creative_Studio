"use client";

import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    heading: "Graphic Design",
    subheading: "Brand identity, logos, print & digital",
    imgSrc: "/img1.png",
    href: "/services",
  },
  {
    heading: "Video Editing",
    subheading: "Long-form, shorts, promos, cinematic",
    imgSrc: "/img2.png",
    href: "/services",
  },
  {
    heading: "Motion Graphics",
    subheading: "Animated logos, intros, explainers",
    imgSrc: "/img3.png",
    href: "/services",
  },
  {
    heading: "Social Content",
    subheading: "Reels, thumbnails, carousels",
    imgSrc: "/img4.png",
    href: "/services",
  },
];

export default function WorkSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-4">
      {projects.map((p) => (
        <ProjectLink key={p.heading} {...p} />
      ))}
    </section>
  );
}

const ProjectLink = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-[#e8e8e8] py-6 md:py-8 transition-colors duration-300"
    >
      <div>
        <motion.span
          variants={{ initial: { x: 0 }, whileHover: { x: -12 } }}
          transition={{
            type: "spring",
            staggerChildren: 0.06,
            delayChildren: 0.2,
          }}
          className="relative z-10 block text-xl md:text-3xl font-bold text-[#555] group-hover:text-[#bbb] transition-colors duration-300 font-[family-name:var(--font-sora)]"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{ initial: { x: 0 }, whileHover: { x: 12 } }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-1.5 block text-sm text-[#555] group-hover:text-[#bbb] transition-colors duration-300">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{ top, left, translateX: "-50%", translateY: "-50%" }}
        variants={{
          initial: { scale: 0, opacity: 0 },
          whileHover: { scale: 1, opacity: 1 },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-36 md:h-44 md:w-64 object-cover"
        alt={heading}
      />

      <motion.span
        variants={{
          initial: { opacity: 0, x: 8 },
          whileHover: { opacity: 1, x: 0 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 text-[#0EA5E9] text-sm"
      >
        →
      </motion.span>
    </motion.a>
  );
};
