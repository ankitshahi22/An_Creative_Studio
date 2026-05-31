"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Moon, MoveRight, Sun, X } from "lucide-react";
import { linksData } from "../../store/data";
import { useTheme } from "../../store/ThemeContext";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const close = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-5xl mx-auto">
      <div className="flex justify-between items-center px-5 sm:px-8 py-4 sm:bg-transparent sm:mix-blend-exclusion bg-(--bg)">
        <Link href="/" onClick={close} className="flex items-center gap-2.5">
          <Image
            src={theme === "dark" ? "/darkModeLogo.png" : "/lightModeLogo.png"}
            alt="AN Creative Studios"
            loading="eager"
            width={24}
            height={24}
            style={{ height: "auto" }}
          />
          <span className="text-sm font-semibold text-(--fg) font-[family-name:var(--font-sora)] tracking-tight">
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
        <div className="hidden md:flex items-center gap-2">
          <div className="ml-2 pl-2 pr-2 border-l border-r border-[#e5e5e5]">
            <button
              onClick={toggle}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-[#555] dark:text-[#aaa]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>{" "}
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-sm px-4 py-1.5 font-semibold hover:text-[#0EA5E9] transition-colors uppercase"
          >
            Hire us <MoveRight size={18} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1">
          <div className="ml-2 pl-2 pr-2 border-l border-[#e5e5e5]">
            <button
              onClick={toggle}
              className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-[#555] dark:text-[#aaa]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="text-[#555] hover:text-[#111] transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <nav className="md:hidden border-t border-(--border-color) bg-(--bg-card) px-5 py-4 flex flex-col gap-1">
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
