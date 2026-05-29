"use client";

import { borderClr, footerData } from "../../store/data";
import GetCurrentTime from "../../utils/CurrentTime";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={`${borderClr}`}>
        <div className="w-[80%] mx-auto py-12 px-6 flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <Image
              src="/Logo.png"
              alt="Logo"
              loading="eager"
              width={35}
              height={35}
            />
            <div>
              <h2 className="text-neutral-500 text-sm font-semibold">
                AN Creative Studios™
              </h2>
              <p className="text-[#0EA5E9] text-[10px] -mt-1">
                Elevate Beyond Limits
              </p>
            </div>
          </div>

          <p className={`text-xs text-neutral-500 w-[50%]`}>
            AN Creative Studios™ is a creative production studio dedicated to
            delivering impactful design and video solutions. We combine
            strategy, creativity, and precision to elevate brands across Nepal
            and beyond.
          </p>
          <div className={`${borderClr} w-[50%]`}></div>

          <div className="flex flex-col gap-3">
            {footerData.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs text-[#525252]"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[80%] mx-auto py-2 px-6">
        <div>
          <p className="text-neutral-400 text-[10px] font-medium">VERSION</p>
          <p className="text-neutral-500 text-xs font-semibold">
            2026 © Edition.
          </p>
        </div>
        <div>
          <p className="text-neutral-400 text-[10px] font-medium">LOCAL TIME</p>
          <p className="text-neutral-500 text-xs font-semibold">
            <GetCurrentTime />
            <span className="text-neutral-500 text-xs ml-1 font-semibold">
              NPT
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
