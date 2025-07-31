import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const achievements = [
  { number: "50+", label: "Projects Completed" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Availability" },
];

export const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.span>
              
              <motion.h2
                className="text-5xl md:text-6xl font-bold gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Passionate
                <br />
                <span className="text-accent">Full Stack Developer</span>
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I specialize in creating innovative web applications and digital experiences 
              that blend cutting-edge technology with exceptional user design. My passion 
              lies in transforming complex ideas into elegant, functional solutions that 
              drive business growth and user engagement.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              With expertise in React, Node.js, Python, and modern web technologies, 
              I bring ideas to life through clean code, intuitive interfaces, and 
              scalable architectures.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="default" size="lg">
                Download CV
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:border-primary/40 transition-all duration-300"
                >
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold gradient-text"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {achievement.number}
                  </motion.h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {achievement.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="relative">
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};