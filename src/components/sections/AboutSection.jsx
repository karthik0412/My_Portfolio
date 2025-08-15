import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

  return (
    <section
      className="min-h-screen flex items-center justify-center relative py-16 bg-gradient-to-b from-background to-muted"
      style={{ minHeight: 'calc(100vh - 80px)', marginTop: '80px' }}
    >
      <div className="container mx-auto px-6 max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center w-full">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
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
              className="text-5xl md:text-6xl font-bold gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Hi, I'm <span className="text-accent">Karthikraja </span>
            </motion.h2>
            <br />

            {/* Intro Paragraph */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
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
            <br />

            {/* Extended Details */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
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
            <br />

            {/* More Personality */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
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
            <br />

            {/* Career Goals */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              My goal is to become a highly skilled full stack engineer who can
              architect scalable systems and create seamless digital experiences
              for businesses and users worldwide.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => setShowCerts(!showCerts)}
              >
                {showCerts ? "Hide Certifications" : "View Certifications"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentSection(4)}
              >
                View Projects
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image & Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl absolute -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>

      {/* Certifications Section */}
      <AnimatePresence>
        {showCerts && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mt-10 bg-white text-black shadow-lg rounded-xl p-6 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Courses & Certifications
            </h3>
            <div className="space-y-6 max-h-80 overflow-y-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold">{cert.title}</h4>
                  <p className="text-gray-700">{cert.provider}</p>
                  <p className="text-sm text-gray-600">{cert.date}</p>
                  {cert.file && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3 text-black border-primary hover:bg-primary/10"
                      onClick={() => handleDownload(cert.file)}
                    >
                      Download Certificate
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
