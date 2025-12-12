"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full pt-10 md:pt-14 pb-8 md:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT SIDE ANIMATION CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-medium text-gray-800 leading-[1.15] max-w-lg"
          >
            Bring back the joy of <br /> reading newsletters
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
            className="text-lg text-green-600 mt-6 leading-relaxed max-w-md"
          >
            Discover, subscribe and manage all <br />
            your email newsletters in one place.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="mt-8 md:mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-10 rounded-full transition-all"
          >
            TRY FOR FREE
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE ILLUSTRATION — SLIDE UP / FADE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          className="flex justify-center md:justify-end mt-4 md:mt-0"
        >
          <div className="w-[75%] sm:w-[65%] md:w-full">
            <Image
              src="/hero-illustration.png"
              alt="Newsletter Illustration"
              width={600}
              height={600}
              priority
              className="w-full h-auto select-none pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
