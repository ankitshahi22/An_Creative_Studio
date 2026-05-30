import HeroSection from "../component/HeroSection/HeroSection";
import Work from "../component/work/work";
import Footer from "../component/footer/Footer";
import Testimonial from "../component/testimonial /testimonial";
import Contact from "../component/contact/Contact";
import WhyUsSection from "../component/whyusSection/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <WhyUsSection />
        <Work />
      </main>
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
