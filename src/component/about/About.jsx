"use client";

import {
  borderClr,
  chooseUsDataTitle,
  chooseUsContent,
} from "../../store/data";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className={`${borderClr} p-8`}>
      <div className="flex flex-col gap-10 w-[80%] mx-auto text-center">
        <div className="p-4">
          <h2 className={`text-4xl mb-4 text-[#007bff] font-bold uppercase`}>
            {chooseUsDataTitle[0].title}
          </h2>
          <p className="text-[#374151]">{chooseUsDataTitle[0].description}</p>
        </div>
        <motion.div
          className="flex gap-3 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border rounded-2xl p-4 text-left"
          >
            <span>{chooseUsContent[0].icon}</span>
            <h3 className="text-sm">{chooseUsContent[0].label}</h3>
            <p className="font-semibold text-sm">{chooseUsContent[0].title}</p>
            <p className="text-xs">{chooseUsContent[0].description}</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 mx-auto">
            {chooseUsContent.slice(1).map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="flex flex-col gap-1 border rounded-2xl p-4 text-left"
              >
                <span>{item.icon}</span>
                <h3 className="text-sm">{item.label}</h3>
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>{" "}
    </div>
  );
};

export default AboutUs;
