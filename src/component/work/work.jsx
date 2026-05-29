"use client";

import Link from "next/link";
import { borderClr } from "../../store/data";
import WorkSection from "./WorkSection";
import { motion } from "framer-motion";
import { ArchiveIcon, ArrowBendDownRightIcon } from "@phosphor-icons/react";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={`${borderClr}`}
    >
      <h2 className="text-4xl font-bold text-center mt-10 text-[#007bff]">
        PROJECTS
      </h2>
      <WorkSection />
      <Link href="/" className="text-center">
        <motion.p
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          className="flex items-center gap-1 w-fit mx-auto border border-gray-500 px-2 py-1 rounded-md mb-10 text-sm hover:bg-black/30 hover:text-white font-semibold"
        >
          Archive
          {/* <ArrowBendDownRightIcon size={16} /> */}
          <ArchiveIcon size={18} />
        </motion.p>
      </Link>
    </motion.div>
  );
}
