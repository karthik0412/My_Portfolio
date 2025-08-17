import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, Github, Copy } from "lucide-react";
import { useCallback } from "react";

export const ContactSection = ({ jumpToResume, jumpToProjects }) => {
  const copy = useCallback((v) => navigator?.clipboard?.writeText(v), []);

  const contacts = [
    {
      label: "Phone",
      value: "9384519390",
      href: "tel:9384519390",
      Icon: Phone,
      copyable: true,
    },
    {
      label: "Email",
      value: "jkarthikraja04@gmail.com",
      href: "mailto:jkarthikraja04@gmail.com",
      Icon: Mail,
      copyable: true,
    },
    {
      label: "Location",
      value: "Kanchipuram, India",
      href: undefined,
      Icon: MapPin,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/karthikraja-jb9979b319",
      href: "https://www.linkedin.com/in/karthikraja-j-b9979b319",
      Icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/karthik0412",
      href: "https://github.com/karthik0412",
      Icon: Github,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: i * 0.12 },
    }),
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background to-muted"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl w-full px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m always open to collaboration and new opportunities. Reach me via the options below.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card rounded-2xl border border-white/10 p-6 backdrop-blur-lg shadow"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{c.label}</h3>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm md:text-base text-muted-foreground break-all">{c.value}</p>
                )}
                {c.copyable && (
                  <button
                    aria-label={`Copy ${c.label}`}
                    className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    onClick={() => copy(c.value)}
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* call to action */}
        <motion.div
          className="mt-10 text-center flex flex-col gap-4 items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:jkarthikraja04@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-primary to-accent font-medium shadow hover:opacity-95 transition"
          >
            <Mail className="h-5 w-5" />
            Send an Email
          </a>

          {/* NEW BUTTONS: direct jump */}
          {/* <button
            onClick={jumpToResume}
            className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-accent to-primary font-medium shadow hover:opacity-90 transition"
          >
            View Resume
          </button>
          <button
            onClick={jumpToProjects}
            className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-primary to-accent font-medium shadow hover:opacity-90 transition"
          >
            View Projects
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};
