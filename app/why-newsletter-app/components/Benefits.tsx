"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type Benefit = {
    title: string;
    description: string;
    iconSrc: string;
    iconAlt: string;
};

const benefits: Benefit[] = [
    {
        title: "Kill The Spam",
        description:
            "Get your own Newsletter email. Subscribe with one-click for the most relevant newsletters and avoid the spam.",
        iconSrc: "/kill-spam.png",
        iconAlt: "Kill the spam icon",
    },
    {
        title: "Save Your Time",
        description:
            "Organize all your favorite newsletters into one application. Use all features to manage them. Control your feed.",
        iconSrc: "/save-time.png",
        iconAlt: "Save your time icon",
    },
    {
        title: "Find Top Content",
        description:
            "Select categories according to your interests and find the best newsletters for you in our application.",
        iconSrc: "/top-content.png",
        iconAlt: "Find top content icon",
    },
    {
        title: "Skip Ads",
        description:
            'Everybody like to read newsletters without any ads, pop-ups and all kinds of "shocking" marketing activities.',
        iconSrc: "/skip-ads.png",
        iconAlt: "Skip ads icon",
    },
];

const grid: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const card: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SpecialSolutionSection() {
    return (
        <section className="w-full py-16 md:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
                        Our team created a special solution <br className="hidden md:block" />
                        for your needs.
                    </h2>
                    <p className="mt-5 text-lg md:text-xl font-medium text-green-500">
                        With Newsletter-App you will:
                    </p>
                </motion.div>

                {/* Benefits grid */}
                <motion.div
                    variants={grid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
                >
                    {benefits.map((b) => (
                        <motion.div
                            key={b.title}
                            variants={card}
                            className="text-center flex flex-col items-center"
                        >
                            <div className="relative h-16 w-16 md:h-20 md:w-20">
                                <Image
                                    src={b.iconSrc}
                                    alt={b.iconAlt}
                                    fill
                                    className="object-contain select-none pointer-events-none"
                                />
                            </div>

                            <h3 className="mt-6 text-xl md:text-2xl font-semibold">
                                {b.title}
                            </h3>

                            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-[260px]">
                                {b.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
