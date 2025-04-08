import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [isInView, setIsInView] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      image: "/project1.jpg",
      link: "#",
      github: "#",
      description:
        "A fully-featured e-commerce platform with advanced filtering and payment integration.",
    },
    {
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "/project2.jpg",
      link: "#",
      github: "#",
      description:
        "Patient management mobile application for healthcare providers.",
    },
    {
      title: "Financial Dashboard",
      category: "web",
      image: "/project3.jpg",
      link: "#",
      github: "#",
      description:
        "Interactive data visualization dashboard for financial analytics.",
    },
    {
      title: "Restaurant Booking System",
      category: "web",
      image: "/project4.jpg",
      link: "#",
      github: "#",
      description:
        "Online reservation system for restaurants with table management.",
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/project5.jpg",
      link: "#",
      github: "#",
      description:
        "Mobile app for tracking workouts, nutrition, and health metrics.",
    },
    {
      title: "Real Estate Platform",
      category: "web",
      image: "/project6.jpg",
      link: "#",
      github: "#",
      description:
        "Property listing and management platform with virtual tours.",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Mesh pattern overlay */}
      <div className="absolute inset-0 bg-[url('/mesh-pattern.png')] bg-cover opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          onAnimationComplete={() => setIsInView(true)}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-2"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            Our Work
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-1 text-white">
            Recent Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-6"
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  filter === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
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
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            variants={containerVariants}
            className="relative"
          >
            {/* Projects display in a hexagonal grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div
                    className="relative bg-white/10 backdrop-blur-md hover:bg-white/15 rounded-lg overflow-hidden transition-all duration-300 border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col"
                    onMouseEnter={() => setActiveProject(index)}
                    onMouseLeave={() => setActiveProject(null)}
                  >
                    {/* Top decorative element */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ objectPosition: "center" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent group-hover:opacity-70 transition-opacity duration-300"></div>

                      {/* Category badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600/40 backdrop-blur-md rounded-full text-white text-xs font-medium border border-blue-400/20">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex gap-4 items-center mt-auto">
                        <a
                          href={project.link}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          className="p-2 bg-blue-600/30 hover:bg-purple-600/40 text-white rounded-lg transition-colors backdrop-blur-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
