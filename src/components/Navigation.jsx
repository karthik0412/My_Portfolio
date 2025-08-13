import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  const isHidden = typeof document !== 'undefined' && document.body?.getAttribute('data-hide-nav') === 'true';
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-200 ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="glass-card px-6 py-3 rounded-2xl">
        <div className="flex items-center space-x-1">
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
    </motion.nav>
  );
};