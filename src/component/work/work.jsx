"use client";

import WorkSection from "./WorkSection";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center mt-10 text-[#007bff]">
        PROJECTS
      </h2>
      <WorkSection />
    </motion.div>
  );
}
