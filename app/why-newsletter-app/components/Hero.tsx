"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function WhyHero() {
    const router = useRouter();

    return (
        <section className="w-full pt-10 md:pt-14 pb-8 md:pb-16 overflow-hidden bg-white">
            <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-medium text-gray-800 leading-[1.15] max-w-lg"
                    >
                        With Newsletter you <br /> will:
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                        className="text-lg text-green-600 mt-6 leading-relaxed max-w-md"
                    >
                        With Newsletter you will:
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                        onClick={() => router.push("/how-it-works")}
                        className="mt-8 md:mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-10 rounded-full transition-all"
                    >
                        HOW IT WORKS
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                    className="flex justify-center md:justify-end mt-4 md:mt-0"
                >
                    <div className="w-[85%] sm:w-[75%] md:w-full">
                        <Image
                            src="/newsletter-app-hero.png"
                            alt="Why Newsletter App hero illustration"
                            width={600}
                            height={600}
                            priority
                            className="w-full h-auto select-none pointer-events-none"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
