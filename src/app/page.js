import HeroSection from "../component/HeroSection/HeroSection";
import About from "../component/about/About";
import Work from "../component/work/work";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <About />
        <Work />
      </main>
    </>
  );
}
