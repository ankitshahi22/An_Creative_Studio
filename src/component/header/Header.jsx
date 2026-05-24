import Link from "next/link";
import Image from "next/image";
import { borderClr, navbarData } from "../../store/data";

export default function Header() {
  return (
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
  );
}
