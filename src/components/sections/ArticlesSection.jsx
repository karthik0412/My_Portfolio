import { motion } from "framer-motion";
import { BookOpen, Code2, Layers, Rocket } from "lucide-react";

export const ArticlesSection = () => {
  const articles = [
    {
      title: "Mastering OOP in Java",
      topic: "Java",
      icon: BookOpen,
      excerpt:
        "Understand classes, objects, inheritance, polymorphism, and interfaces with practical examples in Java.",
      href: "https://docs.oracle.com/javase/tutorial/java/concepts/",
    },
    {
      title: "Closures & Scope – JavaScript Deep‑Dive",
      topic: "JavaScript",
      icon: Code2,
      excerpt:
        "A concise guide to lexical scope and closures, with patterns you can apply in real‑world code.",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
    },
    {
      title: "REST APIs with Spring Boot",
      topic: "Spring Boot",
      icon: Layers,
      excerpt:
        "Build and test a production‑ready REST service with Spring Boot, Spring Web and Actuator.",
      href: "https://spring.io/guides/gs/rest-service/",
    },
    {
      title: "Spring Data JPA Essentials",
      topic: "Spring Boot",
      icon: Layers,
      excerpt:
        "Entity mapping, repositories, paging & sorting — the essentials for data access in Spring.",
      href: "https://spring.io/projects/spring-data-jpa",
    },
    {
      title: "React Hooks Patterns",
      topic: "React",
      icon: Rocket,
      excerpt:
        "From useState to custom hooks — learn robust patterns to compose logic in React apps.",
      href: "https://react.dev/learn",
    },
    {
      title: "Efficient State Management in React",
      topic: "React",
      icon: Rocket,
      excerpt:
        "When to use Context, reducers, or external stores — practical guidance for scalable UIs.",
      href: "https://react.dev/learn/managing-state",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
  };

  return (
    <section
      id="articles"
      className="relative min-h-screen flex items-center justify-center py-20"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      {/* Soft gradient accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl w-full px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold gradient-text text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Articles & Guides
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Curated learning notes and references on Java, JavaScript, Spring Boot, and React that helped me build real projects.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => {
            const Icon = a.icon || BookOpen;
            return (
              <motion.article
                key={a.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card rounded-2xl border border-white/10 backdrop-blur-lg p-6 h-full shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10">{a.topic}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{a.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">{a.excerpt}</p>
                <div>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent hover:opacity-95 transition"
                  >
                    Read
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
