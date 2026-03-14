import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/Statssection";
import CreativeSection from "./components/Creativesection";
import FooterSection from "./components/Footersection";
import { Route, Routes } from "react-router-dom";
import Contactpage from "./Pages/Contactpage";
import ServicesPage from "./Pages/ServicesPage";
import PortfolioPage from "./Pages/PortfolioPage";
import CTABand from "./components/CtaBand";
import AboutPage from "./Pages/AboutPage";
import EcommerceSolutions from "./components/Services/EcommerceSolutions";
import SocialMediaMarketing from "./components/Services/SocialMediaMarketing";
import WebDesignDevelopment from "./components/Services/WebDesignDevelopment";
import DigitalMediaBuying from "./components/Services/DigitalMediaBuying";
import Branding from "./components/Services/Branding";
import MediaProduction from "./components/Services/MediaProduction";
import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";
function useBreakpoint() {
  const [w, setW] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return { isMd: w >= 768 };
}

function App() {
  const { isMd } = useBreakpoint();
  const { isDark } = useTheme();

  return (
    <>
      {/* Go to top */}
      {isMd && (
        <div
          className="fixed right-10 bottom-5 -translate-y-1/3 z-30 flex flex-col items-center gap-2 transition-colors duration-300"
          style={{ color: isDark ? "#c4b5fd" : "#3F0F8B" }}
        >
          <svg width="20" height="20" viewBox="0 0 14 20" fill="none">
            <line
              x1="7"
              y1="18"
              x2="7"
              y2="2"
              stroke={isDark ? "rgba(196,181,253,0.4)" : "rgba(63,15,139,0.35)"}
              strokeWidth="1.5"
            />
            <path
              d="M1 8L7 2L13 8"
              stroke={isDark ? "rgba(196,181,253,0.4)" : "rgba(63,15,139,0.35)"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer text-[15px] font-bold tracking-widest uppercase transition-colors duration-300"
            style={{
              writingMode: "vertical-rl",
              color: isDark ? "#c4b5fd" : "#3F0F8B",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = isDark ? "#ffffff" : "#53178A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = isDark ? "#c4b5fd" : "#3F0F8B")
            }
          >
            Go Top
          </button>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">
              <HeroSection />
              <AboutSection />
              <ServicesSection />
              <StatsSection />
              <CreativeSection />
              <CTABand />
            </div>
          }
        />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/ecommerce-solutions"
          element={<EcommerceSolutions />}
        />
        <Route
          path="/services/social-media-marketing"
          element={<SocialMediaMarketing />}
        />
        <Route
          path="/services/web-design-development"
          element={<WebDesignDevelopment />}
        />
        <Route
          path="/services/digital-media-buying"
          element={<DigitalMediaBuying />}
        />
        <Route path="/services/branding" element={<Branding />} />
        <Route
          path="/services/media-production"
          element={<MediaProduction />}
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <FooterSection />
    </>
  );
}

export default App;
