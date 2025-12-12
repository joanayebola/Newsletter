"use client";

import { motion } from "framer-motion";

export default function WhySection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-0">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          WHY NEWSLETTER-APP?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 text-lg leading-relaxed"
        >
          Newsletter-App is a brand new application for newsletters reading.
          With Newsletter-App, you will have the chance to bring back the joy of
          newsletter reading. There are no ads, no spam emails and…
        </motion.p>

        {/* Read More Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all"
        >
          Read More
        </motion.button>
      </div>
    </section>
  );
}
