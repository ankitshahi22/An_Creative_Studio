import Image from "next/image";
import Link from "next/link";
import { projects } from "@/store/data";

export const metadata = {
  title: "Work",
  description:
    "Browse a portfolio of video editing projects — YouTube videos, motion graphics, and cinematic edits by Nirjal Timalsina.",
};

const Work = () => {
  return (
    <div className="min-h-screen border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <p className="text-[#888] text-xs tracking-widest uppercase mb-4">
          Portfolio
        </p>
        <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-(--fg) mb-4">
          Selected Work
        </h1>
        <p className="text-[#999] text-sm mb-16 max-w-md">
          A selection of projects across video editing, brand design, and motion
          graphics. More work available on request.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group bg-white overflow-hidden block"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 underline rounded-xl">
                    View →
                  </span>
                </div>
              </div>
              <div className="p-6 border-t border-[#e8e8e8] flex items-center justify-between">
                <div>
                  <p className="text-[#0EA5E9] text-xs tracking-widest uppercase mb-1.5">
                    {p.category}
                  </p>
                  <h2 className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#111]">
                    {p.title}
                  </h2>
                </div>
                <span className="lg:hidden inline-flex items-center gap-1 text-xs font-semibold text-[#0EA5E9] border border-[#0EA5E9] px-3 py-1.5 rounded-full">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-[#e8e8e8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#999] text-sm max-w-md">
            Looking for something specific? We have more work across all three
            disciplines — get in touch and we&apos;ll share what&apos;s
            relevant.
          </p>
          <Link
            href="/contact"
            className="px-4 py-2.5 bg-[#111] text-white font-semibold text-sm hover:bg-[#333] transition-colors dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8] rounded-lg"
          >
            Request portfolio →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
