import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Inc.",
      image: "/testimonial1.jpg",
      content:
        "Working with Lumino was a game-changer for our company. Their team delivered a stunning website that perfectly captures our brand identity and has significantly improved our online presence.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Marketing Director, GrowthPlus",
      image: "/testimonial2.jpg",
      content:
        "The mobile app Lumino developed for us exceeded our expectations. Their attention to detail and commitment to delivering a user-friendly experience resulted in an app our customers love.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Founder, EcoShop",
      image: "/testimonial3.jpg",
      content:
        "Lumino transformed our e-commerce platform, resulting in a 40% increase in sales. Their team understood our unique needs and delivered an exceptional solution on time and within budget.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">
                      {testimonials[current].name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonials[current].role}
                    </p>
                    <div className="flex justify-center mt-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg italic">
                    "{testimonials[current].content}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-0 md:-translate-x-6 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-0 md:translate-x-6 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === current
                  ? "bg-primary-600"
                  : "bg-gray-300 dark:bg-gray-700"
              } transition-colors`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
