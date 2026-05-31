import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Brand Identity",
    category: "Graphic Design",
    img: "/img1.png",
  },
  {
    id: "02",
    title: "Video Production",
    category: "Video Editing",
    img: "/img2.png",
  },
  {
    id: "03",
    title: "Motion Graphics",
    category: "Animation",
    img: "/img3.png",
  },
  {
    id: "04",
    title: "Social Content",
    category: "Design & Editing",
    img: "/img4.png",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <p className="text-[#888] text-xs tracking-widest uppercase mb-4">
          Portfolio
        </p>
        <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-[#111] mb-4">
          Selected Work
        </h1>
        <p className="text-[#999] text-sm mb-16 max-w-md">
          A selection of projects across video editing, brand design, and motion
          graphics. More work available on request.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#e8e8e8]">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`group bg-white overflow-hidden border-b border-[#e8e8e8] last:border-b-0 ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${i < 2 ? "md:border-b" : "md:border-b-0"}`}
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t border-[#e8e8e8]">
                <p className="text-[#0EA5E9] text-xs tracking-widest uppercase mb-1.5">
                  {p.category}
                </p>
                <h2 className="font-[family-name:var(--font-sora)] text-lg font-bold text-[#111]">
                  {p.title}
                </h2>
              </div>
            </div>
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
            className="shrink-0 px-6 py-3 bg-[#111] text-white text-sm font-semibold hover:bg-[#333] transition-colors"
          >
            Request portfolio →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
