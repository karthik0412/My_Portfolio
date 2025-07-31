import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { Navigation } from "./Navigation";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { CTASection } from "./sections/CTASection";

const sections = [
  { id: 0, component: HeroSection },
  { id: 1, component: AboutSection },
  { id: 2, component: CTASection },
  // More sections will be added here
];

export const PortfolioLayout = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (newSection: number) => {
    if (newSection === currentSection || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(newSection);
      setIsTransitioning(false);
    }, 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        handleSectionChange(currentSection + 1);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        handleSectionChange(currentSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection]);

  const CurrentSectionComponent = sections[currentSection]?.component;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={handleSectionChange}
      />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.645, 0.045, 0.355, 1.000] 
          }}
          className="relative z-10"
        >
          {CurrentSectionComponent && <CurrentSectionComponent />}
        </motion.div>
      </AnimatePresence>

      {/* Section Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === section.id
                  ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                  : "bg-primary/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground flex items-center space-x-2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Use arrow keys or navigation to explore</span>
      </motion.div>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};