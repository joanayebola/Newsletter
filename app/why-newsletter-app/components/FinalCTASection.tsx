"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FinalCTASection() {
    const router = useRouter();
    return (
        <section className="w-full bg-[#f7f9f8] py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                {/* Text */}
                <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed"
                >
                    No ads and spam in this app. Take reading and sharing to the next level
                    with Newsletter.
                </motion.h2>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
                    className="mt-10"
                >
                    <button
                        onClick={() => router.push("/how-it-works")}
                        className="inline-flex items-center justify-center rounded-full border-2 border-green-600 text-green-700 font-semibold px-12 py-3.5 hover:bg-green-600 hover:text-white transition"
                    >
                        HOW IT WORKS
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
