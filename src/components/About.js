"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FiAward,
  FiUsers,
  FiClock,
  FiTrendingUp,
  FiCoffee,
} from "react-icons/fi";
import { useRef } from "react";
import aboutImage from "@/assets/images/about.webp";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effect values
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.05]
  );
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.3, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.6], [60, 0, 0]);

  const features = [
    { icon: <FiAward />, text: "4+ years of industry experience" },
    { icon: <FiUsers />, text: "Dedicated team of experts" },
    { icon: <FiTrendingUp />, text: "Client-focused approach" },
    { icon: <FiClock />, text: "Cutting-edge technologies" },
  ];

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Projects" },
    { value: "8", label: "Team Members" },
    { value: "95%", label: "Client Satisfaction" },
  ];

  // Staggered animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-[#f8f9ff] dark:from-gray-900 dark:to-gray-800"
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100/50 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/10 rounded-full filter blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/40 to-blue-100/20 dark:from-purple-900/20 dark:to-blue-900/10 rounded-full filter blur-3xl -z-10 transform -translate-x-1/4 translate-y-1/4"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20 dark:bg-blue-400/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 * (Math.random() > 0.5 ? 1 : -1)],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Diagonal separator at the top with gradient */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-50 to-purple-50/50 dark:from-blue-900/30 dark:to-purple-900/20 -z-10 transform -skew-y-2"></div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f630_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f615_1px,transparent_1px)] [background-size:30px_30px] -z-10 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center lg-mb-6 mb-0"
        >
          <div className="flex flex-col items-center mb-4">
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
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4 relative inline-block overflow-visible"
            >
              <span className="relative z-10">About Lumino Stack</span>
              <motion.div
                className="absolute -bottom-3 left-0 w-full h-3 overflow-visible z-0"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-8"
                ></motion.div>
              </motion.div>
            </motion.h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section - Now on the left side */}
          <div className="order-1">
            <div className="relative">
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={aboutImage}
                  alt="Lumino Stack Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={{ translateX: "200%" }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 5,
                  }}
                />

                {/* Company founding year badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-10 border-l-4 border-blue-500"
                >
                  <span className="text-gray-800 dark:text-gray-200 text-xs font-semibold">
                    ESTABLISHED
                  </span>
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center">
                    <FiCoffee className="inline mr-2 animate-pulse" />
                    2025
                  </div>
                </motion.div>
              </motion.div>

              {/* Stats cards floating above the image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-10 -right-10 left-10 grid grid-cols-2 gap-3"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    }}
                    className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center"
                  >
                    <div className="lg:text-2xl text-xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Text Section - Now on the right side */}
          <div className="order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Transforming Ideas Into Digital Reality
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Lumino Stack, we combine cutting-edge technology with
                  creative expertise to deliver solutions that empower your
                  business to thrive in the digital landscape.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 p-3 rounded-lg shadow-sm backdrop-blur-sm border border-gray-100 dark:border-gray-700"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                      transition: { type: "spring", stiffness: 400 },
                    }}
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                      {feature.icon}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 items-center justify-center"
              >
                <motion.a
                  href="#services"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 inline-block shadow-md hover:shadow-lg hover:shadow-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
