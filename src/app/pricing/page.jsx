import PricingCards from "../../component/common/PricingCard";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for professional video editing services by Nirjal Timalsina.",
};

const Pricing = () => {
  return (
    <div className="min-h-svh border-b border-[#e8e8e8]">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-24 flex flex-col gap-12 sm:gap-16">
        <div>
          <p className="text-[#888] text-xs tracking-widest uppercase mb-4">
            Pricing & Investment
          </p>
          <h1 className="font-[family-name:var(--font-sora)] text-4xl sm:text-5xl font-bold text-(--fg) mb-4">
            Transparent Packages
          </h1>
          <p className="text-[#999] text-sm max-w-md">
            All pricing varies depending on scope, complexity, and turnaround
            timeline. Custom quotes available on request.
          </p>
        </div>

        <PricingCards />
      </div>
    </div>
  );
};

export default Pricing;
