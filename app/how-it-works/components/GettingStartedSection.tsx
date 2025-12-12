"use client";

import Image from "next/image";

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

export default function GettingStartedSection() {
    return (
        <section className="w-full bg-[#f7f9f8] py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 text-center">
                    How to start your Newsletter experience?
                </h2>

                {/* Steps grid */}
                <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full">
                    {steps.map((step) => (
                        <div key={step.title} className="flex">
                            {/* Left vertical green line */}
                            <div className="w-1 rounded-full bg-green-500 mr-4 md:mr-5" />

                            {/* Text */}
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Illustration */}
                <div className="mt-14 md:mt-16 flex justify-center">
                    <div className="w-[230px] sm:w-[260px] md:w-[320px]">
                        <Image
                            src="/how-it-works/getting-started-illustration.png" // <-- put your image here
                            alt="Person announcing newsletters"
                            width={320}
                            height={320}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
