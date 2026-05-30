import PricingCards from "../../component/common/PricingCard";
import { borderClr } from "../../store/data";

const Pricing = () => {
  return (
    <div className={`${borderClr}`}>
      <div className="min-h-svh px-6 py-24 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center text-center gap-2">
          <p className="uppercase text-sm text-[#0ea5e9] tracking-widest">
            Pricing & Investment
          </p>
          <h2 className="text-4xl font-bold uppercase">Transparent Packages</h2>
          <p className="text-sm text-neutral-400 max-w-md">
            All pricing varies depending on scope, complexity, and turnaround
            timeline.
          </p>
        </div>

        <PricingCards />
      </div>
    </div>
  );
};

export default Pricing;
