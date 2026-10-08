"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-base-bg border-b border-accent-border py-4">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-fraunces font-bold text-2xl tracking-tight text-base-text hover:opacity-80 transition-opacity">
          BoostFlow
        </Link>

        <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium text-gray-400">
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <Link
          href="https://wa.me/1234567890?text=Hi%20BoostFlow,%20I'd%20like%20to%20discuss%20a%20website%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-whatsapp text-white px-5 py-2.5 rounded-lg font-inter font-bold text-sm hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={18} className="fill-current" />
          <span>Message Us</span>
        </Link>
      </div>
    </nav>
  );
}
