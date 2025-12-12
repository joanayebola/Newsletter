"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    title: "BUSINESS DEVELOPMENT",
    logo: "/agenus-logo.png", // place logo inside public folder
    text: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est. Lorem ipsum dolor sit amet.",
  },
  {
    title: "DIGITAL MARKETING",
    logo: "/agenus-logo.png",
    text: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est. Lorem ipsum dolor sit amet.",
  },
  {
    title: "TECHNOLOGIES",
    logo: "/agenus-logo.png",
    text: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est. Lorem ipsum dolor sit amet.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-[#F8E3BC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-sm p-8 md:p-10 hover:shadow-md transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-green-700 font-semibold tracking-wide text-center mb-4">
                {card.title}
              </h3>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image
                  src={card.logo}
                  alt={card.title}
                  width={110}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-gray-800 leading-relaxed text-center relative z-10">
                {card.text}
              </p>

              {/* Faded Quote Icon */}
              <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-gray-800"
                >
                  <path d="M168 80a48.05 48.05 0 0 0-48 48v56a8 8 0 0 0 16 0v-56a32 32 0 0 1 64 0v56a8 8 0 0 0 16 0v-56a48.05 48.05 0 0 0-48-48ZM56 80a48.05 48.05 0 0 0-48 48v56a8 8 0 0 0 16 0v-56a32 32 0 0 1 64 0v56a8 8 0 0 0 16 0v-56a48.05 48.05 0 0 0-48-48Z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
