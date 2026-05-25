import Link from "next/link";
import Image from "next/image";
import { borderClr, navbarData } from "../../store/data";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import Youtube from "../icons/Youtube";

export default function Header() {
  return (
    <>
      <div
        className={`flex justify-between items-center gap-8 py-2 px-10 ${borderClr}`}
      >
        <div>
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              loading="eager"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="flex gap-8 text-xs text-[#a3a3a3]">
          {navbarData.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.name}
            </Link>
          ))}
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
          <p className="text-sm rotate-90 mb-25">nirjaltimalsina69@gmail.com</p>
          <div className="h-55 w-px bg-[#333]" />
        </div>
      </div>
    </>
  );
}
