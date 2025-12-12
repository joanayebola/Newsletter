"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leftFeatures = [
  {
    title: "Kill The Spam",
    text: "Use Newsletter email to subscribe to newsletters. Win the battle against spam. Earn more time for joyful reading.",
  },
  {
    title: "Be part of Newsletter community",
    text: "Join top experts for a chat on the topics and trends that matter to you.",
  },
  {
    title: "Discover Newsletters",
    text: "Browse through your interests and find the ultimate content. Inspire yourself!",
  },
];

const rightFeatures = [
  {
    title: "One-Click Unsubscribe",
    text: "Don’t like what you’re reading? Remove the feed and never see it again.",
  },
  {
    title: "Control Your Feed",
    text: "Group newsletters into folders, create labels, quickly mark as read and update the appearance.",
  },
  {
    title: "Enjoy Newsletter",
    text: "No ads and spam in this app. Take reading and sharing to the next level.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#f8faf8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-800 text-center"
        >
          Why Newsletter-App? How to enjoy your feed?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-green-600 text-center mt-4 text-lg"
        >
          Be ready for an amazing experience.
        </motion.p>

        {/* FEATURES + CENTER IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-12 order-2 md:order-1">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="max-w-sm"
              >
                <div className="flex items-start gap-4">
                  {/* GREEN ACCENT BAR */}
                  <div className="w-1 h-10 bg-green-600 rounded-full mt-1"></div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <Image
              src="/features-illustration.png"
              alt="Feature Illustration"
              width={600}
              height={600}
              className="w-full max-w-md h-auto select-none pointer-events-none"
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-12 order-3">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="max-w-sm"
              >
                <div className="flex items-start gap-4">
                  {/* GREEN ACCENT BAR */}
                  <div className="w-1 h-10 bg-green-600 rounded-full mt-1"></div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
