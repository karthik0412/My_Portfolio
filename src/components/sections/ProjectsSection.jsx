import { motion } from "framer-motion";

// Resolve assets (optimized 320x180)
const ecommerceImg = new URL("../../assets/ecommerce.png", import.meta.url).href;
const dashboardImg = new URL("../../assets/dashboard.png", import.meta.url).href;
const signupImg = new URL("../../assets/signup.png", import.meta.url).href;
const taskImg = new URL("../../assets/taskmanager.png", import.meta.url).href;

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Project",
      description:
        "A full-stack e-commerce platform built with Spring Boot (backend) and React.js (frontend) using RESTful APIs and CRUD operations. Features include product listings, cart management, order placement, and secure data handling for a seamless online shopping experience.",
      repo: "https://github.com/karthik0412/SignupProject.git",
      image: ecommerceImg,
    },
    {
      title: "Hand Rehab Dashboard",
      description:
        "A React.js web application developed to assist patients recovering from accidents or strokes who experience difficulty in hand movement. The dashboard displays real-time rehabilitation sensor data, visual analytics, and progress tracking to help doctors and patients monitor recovery.",
      repo: "https://github.com/karthik0412/Rehab-Dashboard.git",
      image: dashboardImg,
    },
    {
      title: "Task Manager",
      description:
        "A Spring Boot-based application for efficiently managing tasks. Users can create, update, delete, and track tasks, with backend support for storing and retrieving task data securely. Designed to streamline personal and team productivity.",
      repo: "https://github.com/karthik0412/Task_Manager.git",
      image: taskImg,
    },
    {
      title: "Sign Up Page (Farmers & Buyers)",
      description:
        "A simple and user-friendly signup page designed specifically for farmers and local buyers, built using HTML, CSS, and JavaScript. The page allows users to create accounts quickly with a clean, responsive layout optimized for accessibility.",
      repo: "https://github.com/karthik0412/Ecommerce_Project.git",
      image: signupImg,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.48, delay: i * 0.12, ease: "easeOut" } }),
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-muted"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      <div className="container px-6 mx-auto max-w-6xl w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold gradient-text text-center mb-12 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* grid: two rows (2x2) on md+, single column on small */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 items-stretch">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group glass-card overflow-hidden rounded-2xl shadow-lg border border-white/10 backdrop-blur-lg flex flex-col h-full"
            >
              {/* Visual thumbnail with glow and hover */}
              <div className="relative w-full aspect-[16/9] bg-white/5 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl opacity-50" aria-hidden />
                <img
                  src={proj.image}
                  alt={`${proj.title} screenshot`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="text-xl md:text-2xl font-semibold">{proj.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  {proj.description}
                </p>
                <div className="mt-2">
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open repository for ${proj.title}`}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent hover:opacity-95 shadow-md shadow-primary/20"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
