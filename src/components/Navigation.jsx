import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const sections = [
  { id: 0, name: "Hero", label: "Home" },
  { id: 1, name: "About", label: "About" },
  { id: 2, name: "CTA", label: "Hire Me" },
  { id: 3, name: "Resume", label: "Resume" },
  { id: 4, name: "Projects", label: "Projects" },
  { id: 5, name: "Skills", label: "Skills" },
  { id: 6, name: "Contact", label: "Contact" },
  { id: 7, name: "Articles", label: "Articles" },
  { id: 8, name: "Profiles", label: "Profiles" },
];

export const Navigation = ({ currentSection, setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHidden =
    typeof document !== "undefined" &&
    document.body?.getAttribute("data-hide-nav") === "true";

  // Close menu on window resize if back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-200 ${
        isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="glass-card px-6 py-3 rounded-2xl">
        <div className="flex items-center justify-between">
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center w-full">
            <div className="flex space-x-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={currentSection === section.id ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentSection(section.id)}
                  className="relative transition-all duration-300"
                >
                  {section.label}
                  {currentSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger - Fixed Top Right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Open Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-background/95 backdrop-blur-lg z-50 shadow-2xl border-r border-gray-800"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Drawer Header */}
                <div className="flex justify-between items-center pb-6 border-b border-gray-800">
                  <h2 className="text-xl font-bold text-white">Navigation</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                {/* Menu Items */}
                <div className="flex-1 overflow-y-auto py-6 space-y-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={currentSection === section.id ? "hero" : "ghost"}
                      size="lg"
                      onClick={() => {
                        setCurrentSection(section.id);
                        setIsOpen(false);
                      }}
                      className="w-full relative transition-all duration-300 justify-start mb-2"
                    >
                      {section.label}
                      {currentSection === section.id && (
                        <motion.div
                          layoutId="activeSectionMobile"
                          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Button>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Karthikraja
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};