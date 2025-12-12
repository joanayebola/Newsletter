"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
    name: "Savannah Miles",
    role: "brand manager",
    avatar: "/avatar.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
    name: "Savannah Miles",
    role: "brand manager",
    avatar: "/avatar.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.",
    name: "Savannah Miles",
    role: "brand manager",
    avatar: "/avatar.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-center text-green-700 font-semibold mb-14"
        >
          Join 1000+ Happy Premium Users
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative px-6"
            >
         
              <p className="text-gray-800 text-lg leading-relaxed">{t.text}</p>

         
              <div className="text-gray-300 absolute right-0 bottom-8 opacity-40 pointer-events-none">
                <svg width="85" height="85" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M168 80a48.05 48.05 0 0 0-48 48v56a8 8 0 0 0 16 0v-56a32 32 0 0 1 64 0v56a8 8 0 0 0 16 0v-56a48.05 48.05 0 0 0-48-48ZM56 80a48.05 48.05 0 0 0-48 48v56a8 8 0 0 0 16 0v-56a32 32 0 0 1 64 0v56a8 8 0 0 0 16 0v-56a48.05 48.05 0 0 0-48-48Z"/>
                </svg>
              </div>


              <div className="flex items-center gap-4 mt-6 justify-center">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
