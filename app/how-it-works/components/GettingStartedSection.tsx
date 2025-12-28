"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const steps = [
    {
        title: "Create An Account",
        description:
            "Use the 7-days free trial option or select some of our subscription plans.",
    },
    {
        title: "Check Your Newsletter",
        description:
            "You can use all features, even during the trial period. Try them for FREE.",
    },
    {
        title: "Start to enjoy",
        description: "Welcome to Newsletter!",
    },
];

// Animation variants (TYPED)
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export default function GettingStartedSection() {
    return (
        <section className="w-full bg-[#f7f9f8] py-16 md:py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* SECTION TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 text-center"
                >
                    How to start your Newsletter experience?
                </motion.h2>

                {/* STEPS GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full"
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.title}
                            variants={item}
                            className="flex"
                        >
                            {/* LEFT GREEN LINE */}
                            <motion.div
                                initial={{ scaleY: 0, opacity: 0 }}
                                whileInView={{ scaleY: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                className="w-1 bg-green-500 rounded-full mr-4 md:mr-5 origin-top"
                            />

                            {/* TEXT */}
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ILLUSTRATION */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="mt-14 md:mt-16 flex justify-center"
                >
                    <div className="w-[230px] sm:w-[260px] md:w-[320px]">
                        <Image
                            src="/how-it-works-getting-started-illustration.png"
                            alt="Person announcing newsletters"
                            width={320}
                            height={320}
                            className="w-full h-auto select-none pointer-events-none"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
