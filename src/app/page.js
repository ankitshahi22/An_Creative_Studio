import dynamic from "next/dynamic";
import HeroSection from "../component/HeroSection/HeroSection";

const WhyUsSection = dynamic(() => import("../component/whyusSection/WhyUsSection"));
const ToolsSection = dynamic(() => import("../component/tools/ToolsSection"));
const Work = dynamic(() => import("../component/work/work"));
const Testimonial = dynamic(() => import("../component/testimonial /testimonial"));
const GetInTouchSection = dynamic(() => import("../component/GetInTouch/GetInTouchSection"));
const ScrollToTop = dynamic(() => import("@/utils/ScrollToTop"));

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <ToolsSection />
      <Work />
      <Testimonial />
      <GetInTouchSection />
      <ScrollToTop />
    </>
  );
}
