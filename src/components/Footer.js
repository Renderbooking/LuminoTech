import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiCode,
  FiUser,
  FiGrid,
  FiHeart,
} from "react-icons/fi";
import Link from "next/link"; // Changed to Next.js Link

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialLinkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: i * 0.05,
      },
    }),
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  // Footer links
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-purple-500/10"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 1 + Math.random() * 5,
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
              duration: 25 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: 100 + Math.random() * 150,
              height: 100 + Math.random() * 150,
              opacity: 0.05 + Math.random() * 0.08,
              filter: "blur(30px)",
            }}
          />
        ))}
      </div>

      {/* Scroll to top button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <motion.div
              className="col-span-1 lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-5">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3"
                  initial={{ rotate: -10 }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-white font-bold text-xl">L</span>
                </motion.div>
                <h3 className="text-gray-800 dark:text-white text-xl font-bold">
                  LuminoStack
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transforming ideas into exceptional digital experiences with
                cutting-edge technology and innovative solutions.
              </p>

              <div className="flex space-x-3 mb-8">
                {[
                  {
                    icon: <FiFacebook />,
                    url: "https://facebook.com",
                    name: "Facebook",
                    color: "#1877F2",
                  },
                  {
                    icon: <FiInstagram />,
                    url: "https://instagram.com",
                    name: "Instagram",
                    color: "#E4405F",
                  },
                  {
                    icon: <FiLinkedin />,
                    url: "https://linkedin.com",
                    name: "LinkedIn",
                    color: "#0A66C2",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300"
                    style={{ backgroundColor: social.color }}
                    aria-label={social.name}
                    variants={socialLinkVariants}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    whileTap="tap"
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="col-span-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center group"
                      scroll={false}
                      onClick={(e) => {
                        if (link.href.startsWith("/#")) {
                          e.preventDefault();
                          const sectionId = link.href.replace("/#", "");
                          document.getElementById(sectionId)?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="col-span-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  {
                    name: "Web Development",
                    icon: <FiCode className="mr-2" />,
                    href: "/#services",
                  },
                  {
                    name: "Mobile App Development",
                    icon: <FiUser className="mr-2" />,
                    href: "/#services",
                  },
                  {
                    name: "UI/UX Design",
                    icon: <FiGrid className="mr-2" />,
                    href: "/#services",
                  },
                  {
                    name: "Digital Marketing",
                    icon: <FiHeart className="mr-2" />,
                    href: "/#services",
                  },
                ].map((service, i) => (
                  <motion.li key={i} variants={itemVariants}>
                    <Link
                      href={service.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                      scroll={false}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("services")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {service.icon}
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="col-span-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <motion.li variants={itemVariants} className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Panipokhari, Kathmandu, Nepal
                  </span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <FiPhone className="mt-1 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <FiMail className="mt-1 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">
                    info@luminostack.com
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer bottom / copyright */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} LuminoStack. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
