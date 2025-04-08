import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [isInView, setIsInView] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      image: "/project1.jpg",
      link: "#",
      description:
        "A fully-featured e-commerce platform with advanced filtering and payment integration.",
    },
    {
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "/project2.jpg",
      link: "#",
      description:
        "Patient management mobile application for healthcare providers.",
    },
    {
      title: "Financial Dashboard",
      category: "web",
      image: "/project3.jpg",
      link: "#",
      description:
        "Interactive data visualization dashboard for financial analytics.",
    },
    {
      title: "Restaurant Booking System",
      category: "web",
      image: "/project4.jpg",
      link: "#",
      description:
        "Online reservation system for restaurants with table management.",
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/project5.jpg",
      link: "#",
      description:
        "Mobile app for tracking workouts, nutrition, and health metrics.",
    },
    {
      title: "Real Estate Platform",
      category: "web",
      image: "/project6.jpg",
      link: "#",
      description:
        "Property listing and management platform with virtual tours.",
    },
  ];
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  // Badge animation for filter buttons
  const badgeVariants = {
    inactive: { scale: 1 },
    active: {
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="py-10 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Enhanced gradient background with animation */}
      <motion.div
        style={{ opacity: backgroundOpacity, scale: backgroundScale }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-1000 z-0"
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "15s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "20s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "25s", animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => setIsInView(true)}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 backdrop-blur-md text-purple-300 rounded-full text-sm font-medium mb-2 border border-purple-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            Our Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Recent Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-8"
          ></motion.div>
          <p className="max-w-3xl mx-auto text-md text-gray-200 mb-8">
            Explore our portfolio of successful projects that showcase our
            expertise and creativity.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["all", "web", "mobile"].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={filter === category ? "active" : "inactive"}
                variants={badgeVariants}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-800 to-purple-800 text-white shadow-lg shadow-blue-500/30 border border-blue-400/20"
                    : "bg-white/10 text-white hover:bg-white/15 backdrop-blur-md border border-white/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            variants={containerVariants}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group"
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.4, ease: "easeOut" },
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Link href={project.link}>
                    <div
                      className="relative bg-white/10 backdrop-blur-xl hover:bg-white/15 rounded-xl overflow-hidden transition-all duration-300 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col cursor-pointer"
                      onMouseEnter={() => setActiveProject(index)}
                      onMouseLeave={() => setActiveProject(null)}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{
                          boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                        }}
                      ></div>

                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                          style={{ objectPosition: "center" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 via-blue-800/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300"></div>

                        {/* Enhanced category badge */}
                        <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/40 backdrop-blur-md rounded-full text-white text-xs font-medium border border-blue-300/20 shadow-lg shadow-blue-500/10">
                          {project.category}
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 flex-grow">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
