"use client";

import Image from "next/image";
import { borderClr } from "../../store/data";
import { motion } from "framer-motion";
import Button from "../../utils/CustomButtom";
import TypeWriter from "./TypeWriter";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={`${borderClr}`}>
      <motion.div
        className={`flex flex-col justify-center w-[80%] p-6 mx-auto items-center gap-4 min-h-screen text-[#374151] -mt-16`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-7xl font-bold bg-linear-to-r from-[#eeaeca] to-[#94bbe9] bg-clip-text text-transparent">
          FOUNDATIONS
        </h1>
        <div className="flex items-center gap-2 text-2xl">
          <p className="font-semibold">Creating</p>

          <TypeWriter />
        </div>
        <p className="flex font-semibold uppercase">
          Graphic Design • Video Editing • Motion Graphics
        </p>
        <p className="text-center text-sm">
          With 8+ Years of Experience & 100+ creators worldwide trusting us, we
          bring you the best work you won’t find anywhere else in Nepal.
        </p>
        <div className="mt-4 flex items-center gap-5 text-sm">
          <Link href="/contact">
            <Button label="LET'S TALK" />
          </Link>
          <Link href="/work">
            <Button
              label="EXPLORE WORK"
              className="bg-linear-to-r from-[#F72585] to-[#4361EE]"
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
