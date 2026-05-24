"use client";

import Image from "next/image";
import { borderClr } from "../../store/data";
import { motion } from "framer-motion";
import Button from "../../utils/CustomButtom";

const HeroSection = () => {
  return (
    <motion.div
      className={`flex justify-center items-center h-svh ${borderClr}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-30 -mt-20">
        <div className="flex flex-col gap-1 w-fit">
          <h2 className="text-3xl font-extralight tracking-tight">
            Nirjal Timalsina <span className="text-xs">📍 Nepal</span>
          </h2>
          <div className="text-7xl font-semibold tracking-tight">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              PROFESSIONAL
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="-mt-3"
            >
              VIDEO EDITOR
            </motion.p>
          </div>
          <p className="text-lg font-extralight">
            Making Your Video Look More Cool.
          </p>
          <Button />
        </div>
        <div>
          <Image
            src="/HeroSectionImg.png"
            alt="hero"
            loading="eager"
            width={300}
            height={300}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
