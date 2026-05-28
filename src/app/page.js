import HeroSection from "../component/HeroSection/HeroSection";
import About from "../component/about/About";
import Work from "../component/work/work";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Testimonial from "../component/testimonial /testimonial";
import Contact from "../component/contact/Contact";

export default function Home() {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-1" />

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
        </div>
      </div>

      <main>
        <About />
        <Work />
      </main>

      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
