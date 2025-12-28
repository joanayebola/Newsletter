"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:px-12 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Newsletter App Logo"
            width={160}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
        <Link href="how-it-works" className="text-gray-600 hover:text-black transition">
          How it works
        </Link>

        <Link
          href="why-newsletter-app"
          className="text-green-600 font-semibold hover:text-green-700 transition"
        >
          Why NewsletterApp?
        </Link>

        <Link href="#" className="text-gray-600 hover:text-black transition">
          Pricing
        </Link>

        <Link href="#" className="text-gray-600 hover:text-black transition">
          Blog
        </Link>
      </div>

      {/* Desktop Login Button */}
      <Link
        href="/login"
        className="hidden md:block ml-4 px-8 py-3 rounded-full border border-green-500 text-green-600 font-semibold hover:bg-green-50 transition"
      >
        LOGIN
      </Link>

      {/* Hamburger Button (Mobile Only) */}
      <button
        className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-[3px] w-7 bg-black rounded transition-all ${isOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></span>
        <span
          className={`block h-[3px] w-7 bg-black rounded transition-all ${isOpen ? "opacity-0" : ""
            }`}
        ></span>
        <span
          className={`block h-[3px] w-7 bg-black rounded transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-6 text-base font-medium md:hidden z-50">

          <Link href="#" className="text-gray-700">
            How it works
          </Link>

          <Link href="#" className="text-green-600 font-semibold">
            Why NewsletterApp?
          </Link>

          <Link href="#" className="text-gray-700">
            Pricing
          </Link>

          <Link href="#" className="text-gray-700">
            Blog
          </Link>

          <Link
            href="/login"
            className="px-6 py-3 rounded-full border border-green-500 text-green-600 font-semibold text-center"
          >
            LOGIN
          </Link>
        </div>
      )}
    </nav>
  );
}
