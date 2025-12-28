"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type Feature = {
    title: string;
    description: string;
    align: "left" | "right";
};

const features: Feature[] = [
    {
        title: "Kill The Spam",
        description:
            "Use Newsletter email to subscribe to newsletters. Win the battle against spam. Earn more time for a joyful reading.",
        align: "left",
    },
    {
        title: "One-Click Unsubscribe",
        description:
            "Don’t like what you’re reading? Remove the feed and never see it again.",
        align: "right",
    },
    {
        title: "Be part of Newsletter community",
        description:
            "Join top experts for a chat on the topics and trends that matter to you.",
        align: "left",
    },
    {
        title: "Control Your Feed",
        description:
            "Group newsletters into folders, create labels, quickly mark as read and update the appearance.",
        align: "right",
    },
    {
        title: "Discover Newsletters",
        description:
            "Browse through your interests and find the ultimate content. Inspire yourself!",
        align: "left",
    },
    {
        title: "Enjoy Newsletter",
        description:
            "No ads and spam in this app. Take reading and sharing to the next level with Newsletter.",
        align: "right",
    },
];

const listContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

const listItem: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function FeatureCard({ title, description, align }: Feature) {
    return (
        <motion.div
            variants={listItem}
            className={`flex gap-4 ${align === "right" ? "md:justify-start" : ""}`}
        >
            {/* green vertical line */}
            <div className="w-1 bg-green-500 rounded-full mt-1" />

            <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed max-w-[260px]">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default function WhyFeaturesSection() {
    const left = features.filter((f) => f.align === "left");
    const right = features.filter((f) => f.align === "right");

    return (
        <section className="w-full bg-[#f7f9f8] py-16 md:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900">
                        Why Newsletter? How to enjoy your feed?
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-green-600">
                        Be ready for an amazing experience.
                    </p>
                </motion.div>

                {/* Layout */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-12 items-center">
                    {/* LEFT COLUMN */}
                    <motion.div
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        className="space-y-10 md:space-y-14"
                    >
                        {left.map((f) => (
                            <FeatureCard key={f.title} {...f} />
                        ))}
                    </motion.div>

                    {/* CENTER IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <div className="w-full max-w-[420px] md:max-w-[520px]">
                            <Image
                                src="/why-newsletter-app-features-center.png"
                                alt="Newsletter features illustration"
                                width={900}
                                height={800}
                                className="w-full h-auto select-none pointer-events-none"
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <motion.div
                        variants={listContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        className="space-y-10 md:space-y-14"
                    >
                        {right.map((f) => (
                            <FeatureCard key={f.title} {...f} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
