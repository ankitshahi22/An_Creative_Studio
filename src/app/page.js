import HeroSection from "../component/HeroSection/HeroSection";
import Work from "../component/work/work";
import Testimonial from "../component/testimonial /testimonial";
import WhyUsSection from "../component/whyusSection/WhyUsSection";
import ToolsSection from "../component/tools/ToolsSection";
import GetInTouchSection from "../component/GetInTouch/GetInTouchSection";
import ScrollToTop from "@/utils/ScrollToTop";

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
