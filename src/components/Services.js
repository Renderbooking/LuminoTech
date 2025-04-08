import { motion } from "framer-motion";
import {
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
  FiBarChart2,
  FiSettings,
  FiDatabase,
  FiLayout,
} from "react-icons/fi";
import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies and frameworks.",
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      featured: false,
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "User-centric interface design with intuitive experiences that engage and delight your customers.",
      featured: false,
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
      featured: false,
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "IT Consulting",
      description:
        "Strategic IT consulting to help businesses leverage technology for optimal results.",
      featured: false,
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for improved efficiency and security.",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="services"
      className="py-10 relative overflow-hidden dark:bg-gray-900"
    >
      {/* Updated Background decorative elements - incorporating FAF5FF color */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF5FF] via-blue-50/20 to-white dark:from-gray-900 dark:via-blue-900/5 dark:to-gray-800 -z-10"></div>

      {/* Diagonal geometric elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-r from-[#F5EEFF]/60 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/5 -z-10 transform -skew-y-3"></div>

      {/* Abstract shapes - repositioned and recolored with FAF5FF tones */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#F0E6FF]/70 to-purple-100/30 dark:from-blue-800/10 dark:to-purple-800/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 -left-10 w-40 h-40 bg-gradient-to-tr from-purple-100/40 to-[#F0E6FF]/50 dark:from-purple-800/10 dark:to-blue-800/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-gradient-to-tl from-[#FAF5FF]/80 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/5 rounded-full blur-3xl -z-10"></div>

      {/* Dotted pattern overlay with a slight purple tint */}
      <div className="absolute inset-0 bg-[radial-gradient(#9061F9_1px,transparent_1px)] dark:bg-[radial-gradient(#9061F920_1px,transparent_1px)] [background-size:20px_20px] -z-10 opacity-[0.15]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
              What We Offer
            </motion.span>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-1 relative inline-block"
            >
              <span className="relative z-10">Our Services</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mx-auto mb-6"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-3xl mx-auto text-md text-gray-600 dark:text-gray-300 mb-2"
            >
              We offer a comprehensive range of digital services to help your
              business thrive in the modern world.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-xl overflow-hidden group ${
                service.featured
                  ? "border-2 border-purple-500 dark:border-purple-400"
                  : "border border-purple-100/60 dark:border-gray-700"
              } shadow-lg hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/30 transition-all duration-300 cursor-pointer`}
            >
              <div className="bg-white dark:bg-gray-800 p-8 h-full">
                <motion.div
                  className="text-purple-600 dark:text-purple-400 mb-4 transition-transform duration-300 ease-out items-center justify-center flex"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 5 : 0,
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors  items-center justify-center flex">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {service.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-[#FAF5FF]/80 dark:from-purple-900/20 dark:to-purple-900/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
