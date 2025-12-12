"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-10">

          {/* Column 1 */}
          <div>
            <h3 className="text-green-700 font-semibold text-lg mb-4">
              Get started
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Blog</li>
              <li>Site Map</li>
              <li>F.A.Q.</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-green-700 font-semibold text-lg mb-4">
              Pricing
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Bronze</li>
              <li>Silver</li>
              <li>Gold</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-green-700 font-semibold text-lg mb-4">
              Follow
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* DISCLAIMER TEXT */}
        <p className="text-gray-600 text-sm mb-8">
          Data is a real-time snapshot *Data is delayed at least 15 minutes. Global Olives and Natural product, Market and Analysis.
        </p>
      </div>

      {/* GREEN BOTTOM BAR */}
      <div className="w-full bg-green-600 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between text-white text-sm">

          {/* Left Links */}
          <div className="flex flex-wrap gap-3 md:gap-6">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span>/</span>
            <span className="cursor-pointer hover:underline">Personal Information</span>
            <span>/</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <span>2021</span>
            <span className="font-extrabold tracking-wider">
              NEWSLETTER
              <span className="text-xs align-top ml-0.5">APP</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
