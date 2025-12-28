"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WelcomeSection() {
    return (
        <section className="w-full pt-0 pb-16 md:pb-20 overflow-hidden">
            <div className="max-w-6xl mx-auto pl-6 md:pl-12 pr-0 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">

                {/* LEFT: TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Welcome to Newsletter-App!
                    </h2>

                    <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                        That is how your screen looks like after signing up! Now it is time
                        to choose your predefined feeds based on preferences and interests.
                    </p>

                    <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Learn from the experts all about business and finances, marketing and
                        technology.
                    </p>

                    <button className="mt-10 inline-flex items-center justify-center rounded-full border-2 border-green-600 text-green-700 font-semibold px-14 py-3.5 hover:bg-green-600 hover:text-white transition">
                        LOGIN
                    </button>
                </motion.div>

                {/* RIGHT: IMAGE — FLUSH RIGHT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="flex justify-end w-full"
                >
                    <div className="relative w-full max-w-none">
                        <Image
                            src="/how-it-works-welcome-mock.png"
                            alt="Newsletter app dashboard preview"
                            width={1000}
                            height={700}
                            className="w-full h-auto select-none pointer-events-none"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
