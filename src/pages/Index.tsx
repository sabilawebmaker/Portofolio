import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader onComplete={() => setLoading(false)} />
        ) : (
          <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Pricing />
            <Footer />
            <BackToTop />
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default Index;
