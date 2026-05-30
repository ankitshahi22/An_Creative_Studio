"use client";

import Link from "next/link";
import Image from "next/image";
import { borderClr, navbarData } from "../../store/data";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import Youtube from "../icons/Youtube";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header() {
  const [toggleModeIcon, setToggleModeIcon] = useState(false);

  return (
    <>
      <div
        className={`flex justify-between items-center gap-8 py-2 px-10 bg-white/95 sticky top-0 z-50 ${borderClr}`}
      >
        <Link href="/" className="flex items-center gap-1">
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
          </div>{" "}
        </Link>

        <div className="flex items-center gap-8 text-xs">
          {navbarData.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          ))}
          <div className="border-l border-r border-neutral-300 pl-4 pr-4">
            <button
              className="flex items-center justify-center"
              onClick={() => setToggleModeIcon(!toggleModeIcon)}
            >
              {toggleModeIcon ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed left-20 bottom-0">
        <div className="flex flex-col items-center gap-4">
          <Facebook />
          <LinkedIn />
          <Youtube />
          <div className="h-70 w-px bg-[#333]" />
        </div>
      </div>

      <div className="fixed right-0 bottom-0">
        <div className="flex flex-col items-center">
          <p className="text-sm rotate-90 mb-25">ancreativestudio@gmail.com</p>
          <div className="h-55 w-px bg-[#333]" />
        </div>
      </div>
    </>
  );
}
