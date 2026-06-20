import { SERVICES } from "../../store/data";
import ServiceCard from "./ServiceCard";

export const metadata = {
  title: "Services",
  description:
    "Video editing services including YouTube editing, motion graphics, color grading, and short-form content.",
};

const Services = () => {
  return (
    <div className="min-h-svh border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <p className="text-[#888] text-xs tracking-widest uppercase mb-4">
          What we offer
        </p>
        <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-(--fg) mb-16">
          Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
