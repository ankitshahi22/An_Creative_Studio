import Link from "next/link";
import Image from "next/image";
import { navbarData } from "../../store/data";

export default function Header() {
  return (
    <div className={`flex justify-between items-center gap-8 p-5`}>
      <div>
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            loading="eager"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex gap-8 text-sm">
        {navbarData.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
