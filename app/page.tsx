import Navbar from "./components/Navbar";
import CanvasHero from "./components/CanvasHero";
import SectionCarousel from "./components/SectionCarousel";
import TimPage from "./components/TimPage";
import KontakPage from "./components/KontakPage";
import Footer from "./components/Footer";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main id="main-content" className="flex flex-col">
      <Navbar/>

      <CanvasHero />

      <SectionCarousel />

      <TimPage />

      <KontakPage />

      <Footer />
    </main>
  );
}