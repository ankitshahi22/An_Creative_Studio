"use client";

import Link from "next/link";
import { borderClr, workClasses } from "../../store/data";
import WorkSection from "./WorkSection";
import { motion } from "framer-motion";
import { ArchiveIcon } from "@phosphor-icons/react";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={`${borderClr} text-center`}
    >
      <h2 className="text-4xl font-bold mt-10 text-[#007bff]">PROJECTS</h2>
      <WorkSection />
      <Link href="/">
        <motion.p
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          className={workClasses}
        >
          Archive
          <ArchiveIcon size={18} />
        </motion.p>
      </Link>
    </motion.div>
  );
}
