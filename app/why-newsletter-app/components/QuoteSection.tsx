"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuoteSection() {
    return (
        <section className="w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-[#f7f9f8] px-6 md:px-16 lg:px-20 py-16 md:py-24 flex items-center"
                >
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 leading-[1.2]">
                            &quot;Once you learn to read, <br className="hidden md:block" />
                            you will be forever free&quot;
                        </h2>

                        <p className="mt-6 text-lg md:text-xl text-green-600 font-medium">
                            Frederick Douglas
                        </p>
                    </div>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-[#f7f9f8] flex items-center justify-center px-6 py-10 md:py-0"
                >
                    <div className="w-full max-w-[680px]">
                        <Image
                            src="/why-newsletter-app-quote-illustration.png"
                            alt="Illustration of man breaking through a wall"
                            width={1200}
                            height={800}
                            className="w-full h-auto select-none pointer-events-none"
                            priority={false}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
