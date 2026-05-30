import HeroSection from "../component/HeroSection/HeroSection";
import Work from "../component/work/work";
import Testimonial from "../component/testimonial /testimonial";
import WhyUsSection from "../component/whyusSection/WhyUsSection";
import GetInTouchSection from "../component/GetInTouch/GetInTouchSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <WhyUsSection />
        <Work />
      </main>
      <Testimonial />
      <GetInTouchSection />
    </>
  );
}
