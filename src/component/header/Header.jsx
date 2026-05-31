"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MoveRight, X } from "lucide-react";
import { linksData } from "../../store/data";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-5xl mx-auto">
      <div className="flex justify-between items-center px-5 sm:px-8 py-4 sm:bg-transparent sm:mix-blend-exclusion bg-[#f5f4f2]">
        <Link href="/" onClick={close} className="flex items-center gap-2.5">
          <Image
            src="/Logo.png"
            alt="AN Creative Studios"
            loading="eager"
            width={30}
            height={30}
          />
          <span className="text-sm font-semibold text-[#111] font-[family-name:var(--font-sora)] tracking-tight">
            AN Creative Studios™
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {linksData.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm transition-colors duration-200 hover:underline"
              style={{ color: pathname === item.link ? "#0EA5E9" : "#888" }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-1 text-sm px-4 py-1.5 font-semibold hover:text-[#0EA5E9] transition-colors uppercase"
        >
          Hire us <MoveRight size={18} />
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-[#555] hover:text-[#111] transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <nav className="md:hidden border-t border-[#e8e8e8] bg-[#fafafa] px-5 py-4 flex flex-col gap-1">
          {linksData.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={close}
              className="text-sm py-3 border-b border-[#f0f0f0] last:border-b-0 transition-colors hover:text-[#0ea539]"
              style={{ color: pathname === item.link ? "#0EA5E9" : "#555" }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={close}
            className="mt-3 text-center text-sm px-4 py-2.5 bg-[#0EA5E9] text-white font-semibold hover:bg-[#0284c7] transition-colors"
          >
            Hire us
          </Link>
        </nav>
      )}
    </header>
  );
}
