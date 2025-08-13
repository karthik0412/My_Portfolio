import { motion } from "framer-motion";
import { Trophy, Code2, ExternalLink, Github } from "lucide-react";

export const ProfilesSection = () => {
  const profiles = [
    {
      name: "HackerRank",
      href: "https://www.hackerrank.com/profile/jkarthikraja04",
      description:
        "Solve algorithms, data‑structures, and SQL challenges. I use this to practice core problem‑solving.",
      color: "bg-emerald-500",
      Icon: Trophy,
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/Karthik_180304/",
      description:
        "Daily coding practice focused on interview‑style problems and patterns in JS/Java.",
      color: "bg-yellow-500",
      Icon: Code2,
    },
    {
      name: "GitHub",
      href: "https://github.com/karthik0412",
      description:
        "Source code for my projects, experiments, and learning repositories.",
      color: "bg-slate-700",
      Icon: Github,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
  };

  return (
    <section
      id="profiles"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background to-muted"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      <div className="container mx-auto max-w-6xl w-full px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Profiles
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl border border-white/10 backdrop-blur-lg p-6 shadow flex items-start gap-4 hover:opacity-95 transition"
            >
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-white ${p.color}`}>
                <p.Icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-white transition" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  {p.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
