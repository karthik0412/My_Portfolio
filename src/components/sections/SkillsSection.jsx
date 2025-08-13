import { motion } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Database, Wrench, Sparkles } from "lucide-react";

export const SkillsSection = () => {
  const categories = [
    {
      title: "Front‑End",
      icon: MonitorSmartphone,
      items: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Back‑End",
      icon: Server,
      items: ["Java", "Spring Boot"],
    },
    {
      title: "Databases",
      icon: Database,
      items: ["SQL"],
    },
    {
      title: "Tools",
      icon: Wrench,
      items: ["GitHub", "VS Code", "Eclipse", "Arduino IDE", "Google Colab"],
    },
    {
      title: "Productivity",
      icon: Sparkles,
      items: ["MS Word", "MS PowerPoint", "ChatGPT"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-muted to-background"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      <div className="container mx-auto max-w-6xl w-full px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            A snapshot of the technologies and tools I use to build reliable, scalable, and user‑friendly products.
          </motion.p>
        </div>

        {/* Category cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => {
            const Icon = cat.icon || Code2;
            return (
              <motion.div
                key={cat.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card rounded-2xl border border-white/10 backdrop-blur-lg p-6 shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative band / overview */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Front‑End", val: 90 },
            { label: "Back‑End", val: 80 },
            { label: "Databases", val: 75 },
            { label: "Tools", val: 85 },
          ].map((b) => (
            <div key={b.label} className="glass-card p-4 rounded-xl border border-white/10">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{b.label}</span>
                <span className="text-muted-foreground">{b.val}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  style={{ width: `${b.val}%` }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};