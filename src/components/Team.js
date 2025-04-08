"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import { useRef, useState } from "react";

export default function Team() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // State for carousel
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Number of cards to show at once

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@lumino.com",
      },
    },
    {
      name: "Lisa Chen",
      role: "CTO",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@lumino.com",
      },
    },
    {
      name: "Mark Williams",
      role: "Design Director",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mark@lumino.com",
      },
    },
    {
      name: "Sophia Rodriguez",
      role: "Marketing Strategist",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sophia@lumino.com",
      },
    },
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "john@lumino.com",
      },
    },
    {
      name: "Lisa Chen",
      role: "CTO",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@lumino.com",
      },
    },
    {
      name: "Mark Williams",
      role: "Design Director",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mark@lumino.com",
      },
    },
    {
      name: "Sophia Rodriguez",
      role: "Marketing Strategist",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sophia@lumino.com",
      },
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(team.length / itemsPerPage);

  // Get current items to display
  const currentItems = team.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle next and previous
  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Card variants for hover animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  // Social icon variants
  const socialIconVariants = {
    initial: { scale: 0 },
    hover: (i) => ({
      scale: 1,
      transition: { delay: i * 0.1, type: "spring", stiffness: 400 },
    }),
  };

  // Staggered container for team members
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Carousel container variants
  const carouselVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-10 relative overflow-hidden"
    >
      {/* Animated background layers */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900/30 -z-10"
      />

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10 -z-10">
        <div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(#4f46e520_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute bottom-0 right-0 w-full h-96 bg-[radial-gradient(#7c3aed20_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          style={{ opacity: opacityTitle }}
          className="text-center mb-10"
        >
          <div className="flex flex-col items-center">
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
              Meet Our Team
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            >
              <span className="relative z-10">
                The Experts Behind Our Success
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-3xl mx-auto text-md text-gray-600 dark:text-gray-300"
            >
              Our talented team combines creativity, technical expertise, and
              industry knowledge to deliver exceptional digital experiences for
              our clients.
            </motion.p>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentPage}
            variants={carouselVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-10 px-2 sm:px-0"
            >
              {currentItems.map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg group relative flex flex-col h-full"
                >
                  <div className="relative h-[280px] w-full overflow-hidden">
                    <Image
                      src={member.image || ""}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex space-x-3 justify-center mt-4">
                          {[
                            {
                              icon: <FiLinkedin />,
                              url: member.social.linkedin,
                            },
                            { icon: <FiTwitter />, url: member.social.twitter },
                            {
                              icon: <FiMail />,
                              url: `mailto:${member.social.email}`,
                            },
                          ].map((social, i) => (
                            <motion.a
                              key={i}
                              href={social.url}
                              custom={i}
                              variants={socialIconVariants}
                              initial="initial"
                              whileInView="hover"
                              viewport={{ once: true }}
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-blue-600 transition-colors duration-300"
                            >
                              {social.icon}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Top accent line with gradient */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Carousel Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 cursor-pointer"
              aria-label="Previous team members"
            >
              <FiArrowLeft className="text-xl" />
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentPage === idx
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center justify-center p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 cursor-pointer"
              aria-label="Next team members"
            >
              <FiArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 15s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
