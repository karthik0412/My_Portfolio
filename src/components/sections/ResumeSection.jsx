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
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-b from-muted to-background text-white"
      style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}
    >
      <div className="container mx-auto max-w-6xl w-full">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Resume
        </motion.h2>

        {/* Intro Text */}
        <motion.p
          className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here's a quick overview of my technical background, experience, and certifications.
        </motion.p>

        {/* Resume Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full justify-center items-stretch max-w-4xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pb-4 border-b border-white/10 mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">Technical Skills</h3>
            </div>
            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm sm:text-base">Front-End:</span>
                <span className="text-right text-sm sm:text-base">HTML, CSS, JavaScript</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm sm:text-base">Back-End:</span>
                <span className="text-right text-sm sm:text-base">Java, J2EE, Spring Boot</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm sm:text-base">Database:</span>
                <span className="text-right text-sm sm:text-base">MySQL, SQL</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm sm:text-base">Tools:</span>
                <span className="text-right text-sm sm:text-base">GitHub, VS Code, Eclipse, Arduino IDE</span>
              </div>
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="pb-4 border-b border-white/10 mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">Internships</h3>
            </div>
            <div className="space-y-5 flex-grow">
              <div>
                <div className="font-semibold text-sm sm:text-base mb-1">Web Developer Intern</div>
                <div className="text-sm text-muted-foreground">Adyog Software Solutions</div>
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base mb-1">Full Stack Developer Intern</div>
                <div className="text-sm text-muted-foreground">Retech Solutions</div>
              </div>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="pb-4 border-b border-white/10 mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">Projects</h3>
            </div>
            <div className="space-y-5 flex-grow">
              <div>
                <div className="font-semibold text-sm sm:text-base mb-1">Task Manager (Spring Boot)</div>
                <div className="text-sm text-muted-foreground">
                  CRUD application using REST APIs & MySQL.
                </div>
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base mb-1">Hand Rehabilitation (IoT + React)</div>
                <div className="text-sm text-muted-foreground">
                  Real-time hand movement tracker using ESP32 & Firebase.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="bg-white/10 rounded-xl shadow-md p-6 border border-white/10 backdrop-blur-sm flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="pb-4 border-b border-white/10 mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-primary">Certifications</h3>
            </div>
            <div className="space-y-4 flex-grow">
              <div>
                <div className="font-semibold text-sm sm:text-base">Java Programming</div>
                <div className="text-sm text-muted-foreground">Infosys Springboard</div>
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base">SQL Database Essentials</div>
                <div className="text-sm text-muted-foreground">Infosys Springboard</div>
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base">Full Stack Java</div>
                <div className="text-sm text-muted-foreground">QSpiders</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleDownload}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
          >
            Download Full Resume (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
};