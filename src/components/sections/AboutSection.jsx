import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export const AboutSection = ({ setCurrentSection }) => {
  const [showCerts, setShowCerts] = useState(false);

  const certifications = [
    {
      title: "Data Structures And Algorithm Using Java",
      provider: "Infosys Springboard",
      date: "Completed: August 2024",
      file: "/DSA.pdf"
    },
    {
      title: "Database Management System",
      provider: "Infosys Springboard",
      date: "Completed: August 2024",
      file: "/sql.pdf"
    },
    {
      title: "Java Full Stack Development Training",
      provider: "QSpiders Software Training Institute",
      date: "Completed: May 2025",
      // file: "/certificates/java-full-stack.pdf"
    }
  ];

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (showCerts) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCerts]);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative py-16 bg-gradient-to-b from-background to-muted"
      style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}
    >
      <div className="container mx-auto px-6 max-w-6xl w-full flex justify-center">
        <div className="w-full max-w-4xl"> {/* Centered container with max width */}

          {/* Content Container - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            {/* Tag */}
            <motion.span
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.span>

            {/* Title */}
            <motion.h2
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hi, I'm <span className="text-accent">Karthikraja</span>
            </motion.h2>
            
            {/* Content wrapper for better centering */}
            <div className="text-left max-w-3xl mx-auto"> {/* Centered content with max width */}
              {/* Intro Paragraph */}
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I'm a passionate <strong>Full Stack Developer</strong> and a
                <strong> Electronics & Communication Engineering</strong> student
                with a strong foundation in modern web development, backend frameworks,
                and IoT systems. I love solving real-world problems through technology
                and building applications that combine performance, scalability, and
                clean design.
              </motion.p>

              {/* Extended Details */}
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Over the past few years, I've developed skills in
                <strong> React.js, Node.js, Java (Core & Advanced), Spring Boot, and SQL</strong>.
                My experience includes working as a <strong>Full Stack Development Intern</strong>
                and a <strong>Web Designing Intern</strong>, where I contributed to building
                responsive, user-friendly, and secure applications.
              </motion.p>

              {/* More Personality */}
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I have a strong interest in areas like <strong>Software Development,
                Web Design, and IoT-based applications</strong>. Some of my notable
                projects include a <strong>Task Manager App (Spring Boot)</strong> and an
                <strong> IoT-enabled Hand Rehabilitation System</strong> with real-time
                sensor data visualization.
              </motion.p>

              {/* Career Goals */}
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                My goal is to become a highly skilled full stack engineer who can
                architect scalable systems and create seamless digital experiences
                for businesses and users worldwide.
              </motion.p>
            </div>

            {/* Buttons - Centered */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => setShowCerts(true)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
              >
                View Certifications
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentSection(4)}
                className="border-primary text-primary hover:bg-primary/10"
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Background Element - Centered */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center mt-16"
          >
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl absolute -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>

      {/* Certifications Modal */}
      <AnimatePresence>
        {showCerts && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 text-white shadow-2xl border border-purple-500/50 ring-1 ring-white/10 backdrop-blur-md flex flex-col max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {/* Sticky Header */}
              <div className="sticky top-0 z-10 bg-black/40 backdrop-blur-md px-8 pt-6 pb-4 rounded-t-2xl border-b border-white/10">
                <button
                  className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 rounded-full p-2 text-white transition-colors"
                  onClick={() => setShowCerts(false)}
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1 text-center">
                  Courses & Certifications
                </h3>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 space-y-6 max-h-[70vh]">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-purple-300">{cert.provider}</p>
                    <p className="text-sm text-gray-400 mt-1">{cert.date}</p>
                    {cert.file && (
                      <div className="mt-4 flex justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-purple-500 hover:bg-purple-500/10"
                          onClick={() => handleDownload(cert.file)}
                        >
                          Download Certificate
                        </Button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};