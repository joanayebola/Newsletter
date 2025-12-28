"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CheckNewsletterSection() {
    return (
        <section className="w-full overflow-hidden">
            {/* Full-width wrapper so the diagonal can reach the edges */}
            <div className="relative w-full bg-[#f7f9f8]">
                {/* Diagonal black panel */}
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[62%] bg-black"
                    style={{
                        clipPath: "polygon(0 0, 78% 0, 58% 100%, 0 100%)",
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
                        {/* LEFT: Text on black */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-center md:text-left"
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-white">
                                Check Your Newsletter
                            </h2>

                            <p className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
                                We should understand if you prefer to rename some categories,
                                add folders and label them. Add new relevant content quick and
                                easy and paste a particular link.
                            </p>

                            <p className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-md mx-auto md:mx-0">
                                Don&apos;t forget the search bar, as well.
                            </p>

                            <motion.button
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
                                className="mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3.5 px-10 rounded-full transition-all"
                            >
                                TRY FOR FREE
                            </motion.button>
                        </motion.div>

                        {/* RIGHT: Big circle graphic */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.35 }}
                            transition={{ duration: 0.75, ease: "easeOut" }}
                            className="flex justify-center md:justify-end"
                        >
                            <div className="w-full max-w-[520px]">
                                <Image
                                    src="/how-it-works-check-newsletter.png"
                                    alt="Newsletter features wheel"
                                    width={700}
                                    height={700}
                                    className="w-full h-auto select-none pointer-events-none"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
