"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiCode, FiLayers, FiServer } from "react-icons/fi";
import { useEffect, useState } from "react";
import rocket from "../images/rocket.png";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateMovement = (factor = 1) => {
    const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;

    return {
      x: ((mousePosition.x - centerX) / 50) * factor,
      y: ((mousePosition.y - centerY) / 50) * factor,
    };
  };

  const technologies = ["React", "Next.js", "React Native", "Laravel"];

  const flyingIcons = [
    { Icon: FiCode, initialX: "10%", initialY: "20%", size: 24, delay: 0 },
    { Icon: FiLayers, initialX: "20%", initialY: "70%", size: 32, delay: 0.5 },
    { Icon: FiServer, initialX: "80%", initialY: "30%", size: 28, delay: 1 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-35 pb-16 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 z-0"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient-shift 15s ease infinite",
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-300"
            initial={{
              opacity: 0.1 + Math.random() * 0.3,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0.2 + Math.random() * 1.5,
            }}
            animate={{
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating technology icons */}
      {flyingIcons.map(({ Icon, initialX, initialY, size, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-600 dark:text-primary-400 opacity-50 z-10"
          initial={{ x: initialX, y: initialY, opacity: 0 }}
          animate={{
            opacity: isLoaded ? 0.7 : 0,
            x: isLoaded
              ? `calc(${initialX} + ${calculateMovement(-0.5).x}px)`
              : initialX,
            y: isLoaded
              ? `calc(${initialY} + ${calculateMovement(-0.5).y}px)`
              : initialY,
          }}
          transition={{
            opacity: { duration: 1, delay },
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              Next-Generation Digital Solutions
            </motion.div>

            <div className="mb-6">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Transforming Ideas into
                <motion.div
                  className="relative inline-block mt-2 sm:mt-0 sm:ml-3"
                  animate={{
                    x: isLoaded ? calculateMovement(0.2).x : 0,
                    y: isLoaded ? calculateMovement(0.2).y : 0,
                  }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-primary-600 via-purple-500 to-primary-600 bg-clip-text text-transparent animate-gradient">
                    Digital Realities
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-3 bg-primary-200 dark:bg-primary-700 -z-10 opacity-50 transform skew-x-12"></span>
                </motion.div>
              </motion.h1>
            </div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Lumino Stack delivers cutting-edge web applications, mobile
              solutions, and digital experiences that elevate brands and drive
              business growth through innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm shadow-sm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    backgroundColor: "#EEF2FF",
                    color: "#4F46E5",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-row justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <motion.a
                href="#contact"
                className="relative overflow-hidden inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium rounded-lg group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                Get Started
                <motion.span
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="ml-2 flex items-center"
                >
                  <FiArrowRight />
                </motion.span>
              </motion.a>

              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 font-medium rounded-lg transition-colors relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Explore Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-full bg-primary-50 dark:bg-primary-900/20 -z-10 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative mt-0 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              animate={{
                x: isLoaded ? calculateMovement(0.5).x : 0,
                y: isLoaded ? calculateMovement(0.5).y : 0,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary-400 dark:bg-primary-600 rounded-full opacity-20 z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20 z-10"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20"></div>

              <Image
                src={rocket}
                alt="Lumino Stack"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Floating statistics cards */}
              <motion.div
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-30 flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <FiCode />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Products Delivered
                  </div>
                  <div className="font-bold">50+</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-30 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ y: 5 }}
              >
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <FiLayers />
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Happy Clients
                  </div>
                  <div className="font-bold">100+</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Add CSS keyframes for animations */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes animate-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: animate-gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
