"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CommunitySection() {
    return (
        <section className="w-full bg-[#f7f9f8] py-16 md:py-24 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Top heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900"
                >
                    Be part of Newsletter community!
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
                        <div className="w-full max-w-[620px]">
                            <Image
                                src="/how-it-works-community.png"
                                alt="Newsletter community illustration"
                                width={900}
                                height={700}
                                className="w-full h-auto select-none pointer-events-none"
                            />
                        </div>
                    </motion.div>

                    {/* Right text */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl md:text-3xl font-semibold text-green-600">
                            Meet the experts!
                        </h3>

                        <div className="mt-5 space-y-6 text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                            <p>
                                Don&apos;t miss the chance to chat with top experts, bloggers and
                                digital ninjas.
                            </p>

                            <p>
                                Invite all your friends and colleagues to join us and enjoy this
                                unique experience.
                            </p>

                            <p>Be a valuable member of our Letterbox community.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
