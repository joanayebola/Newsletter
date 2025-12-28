"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const views = ["List View", "Card View", "Magazine View"] as const;

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ViewModeSection() {
    return (
        <section className="w-full bg-[#f7f9f8] py-16 md:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center text-2xl md:text-3xl lg:text-4xl font-medium text-green-600"
                >
                    Choose your view mode
                </motion.h2>

                {/* Content */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
                    {/* Left illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex justify-center md:justify-start"
                    >
                        <div className="w-full max-w-[560px]">
                            <Image
                                src="/how-it-works-view-mode.png"
                                alt="View mode illustration"
                                width={900}
                                height={700}
                                className="w-full h-auto select-none pointer-events-none"
                            />
                        </div>
                    </motion.div>

                    {/* Right list */}
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex flex-col gap-5 md:gap-6 items-center md:items-start"
                    >
                        {views.map((label) => (
                            <motion.li
                                key={label}
                                variants={item}
                                className="flex items-center gap-4 text-2xl md:text-3xl font-semibold text-gray-800"
                            >
                                <span className="text-gray-800">✓</span>
                                <span>{label}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
