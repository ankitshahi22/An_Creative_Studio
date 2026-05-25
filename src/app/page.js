import HeroSection from "../component/HeroSection/HeroSection";
import About from "../component/about/About";
import Work from "../component/work/work";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Work />
      </main>
      <Footer />
    </>
  );
}
