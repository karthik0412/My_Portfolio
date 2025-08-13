import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ResumeSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Karthikraja_J_Resume.pdf";
    link.download = "Karthikraja_J_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-muted to-background text-white" style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}
    >
      <div className="container mx-auto max-w-6xl text-center w-full">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold gradient-text mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Resume
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here's a quick overview of my technical background, experience, and certifications.
        </motion.p>

        {/* Resume Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full justify-center items-start">

          {/* Technical Skills */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Technical Skills</h3>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="font-medium">Front-End:</span>
                <span>HTML, CSS, JavaScript</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Back-End:</span>
                <span>Java, J2EE, Spring Boot</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Database:</span>
                <span>MySQL, SQL</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tools:</span>
                <span>GitHub, VS Code, Eclipse, Arduino IDE</span>
              </div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Projects</h3>
            <ul className="space-y-3 text-left">
              <li>
                <strong>Task Manager (Spring Boot):</strong> CRUD application using REST APIs & MySQL.
              </li>
              <li>
                <strong>Hand Rehabilitation (IoT + React):</strong> Real-time hand movement tracker using ESP32 & Firebase.
              </li>
            </ul>
          </motion.div>

          {/* Internships */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Internships</h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="font-medium">Web Developer Intern</span>
                <span>Adyog Software Solutions</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Full Stack Developer Intern</span>
                <span>Retech Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">Certifications</h3>
            <ul className="space-y-3 text-left">
              <li>Java Programming – Infosys Springboard</li>
              <li>SQL Database Essentials – Infosys Springboard</li>
              <li>Full Stack Java – QSpiders</li>
            </ul>
          </motion.div>
        </div>

        {/* Download Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleDownload}
            className="px-8 py-4 text-lg"
          >
            Download Full Resume (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};