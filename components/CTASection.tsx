"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full bg-[#1E2329] py-20 md:py-28 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            Bring back the joy of reading <br /> newsletters
          </h2>

          <p className="text-green-400 text-lg mt-4 font-medium">
            Subscribe and be ready for an amazing experience
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-4 text-gray-300 text-[17px]">
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✔</span>
              Save time and read your newsletters in one place.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✔</span>
              Organize your newsletter feed according to your interests.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400 text-xl">✔</span>
              Forget about newsletters emails and focus only in reading.
            </li>
          </ul>

          <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all">
            SUBSCRIBE
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/cta-illustration.png"
            alt="CTA Illustration"
            width={500}
            height={500}
            className="w-full h-auto select-none pointer-events-none"
          />
        </motion.div> 
      </div>
    </section>
  );
}
