"use client";

import { borderClr } from "../../store/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className={`${borderClr} py-12`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col justify-center gap-10"
      >
        <h2 className="text-4xl font-semibold w-fit text-[#007bff] mx-auto">
          About
        </h2>
        <p className="mx-auto w-[80%] text-center">
          create professional video edits that combine storytelling, cinematic
          visuals, and smooth motion design to deliver engaging content that
          stands out. From color grading and transitions to pacing and sound
          synchronization, I focus on creating polished videos that capture
          attention and leave a lasting impression while bringing each client’s
          vision to life with creativity and precision.
        </p>
      </motion.div>
    </div>
  );
}
