"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen"
    >
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
}
