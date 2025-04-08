import { motion } from "framer-motion";
import { 
  FiBriefcase, 
  FiPenTool, 
  FiRefreshCw, 
  FiServer 
} from "react-icons/fi";

export default function ProcessFlow() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Process steps data
  const processSteps = [
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Requirement Analysis",
      description: "Understand the project's goals, gather requirements, and plan the project's scope, timeline, and resources."
    },
    {
      icon: <FiPenTool className="w-6 h-6" />,
      title: "Design and Architecture",
      description: "Develop the architecture and design for the solution based on the requirements."
    },
    {
      icon: <FiRefreshCw className="w-6 h-6" />,
      title: "Development and Implementation",
      description: "Build the software or solution according to the design specifications."
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "Testing and Deployment",
      description: "Ensure the software is functioning as expected and is ready for release."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/10 to-white dark:from-gray-900 dark:via-blue-900/5 dark:to-gray-800 -z-10"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-primary-100/50 to-purple-100/30 dark:from-primary-900/20 dark:to-purple-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/50 to-purple-100/30 dark:from-blue-900/20 dark:to-purple-900/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f650_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f620_1px,transparent_1px)] [background-size:30px_30px] -z-10 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-5"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
          >
            <span className="relative z-10">Transform Ideas into Reality with</span>
            <span className="relative z-10 text-primary-600 dark:text-primary-400 block mt-2">Lumino Technology!</span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-3 bg-primary-200 dark:bg-primary-800/70 -z-10 rounded"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mt-6"
          >
            From concept to launch, our experts are here to guide your startup through every business challenge
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800/90 p-8 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}