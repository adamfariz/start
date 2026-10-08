"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-900 bg-black mt-12">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-fraunces font-bold text-2xl text-white mb-6 inline-block tracking-tight">
              BoostFlow
            </Link>
            <p className="font-inter text-gray-500 text-sm max-w-xs leading-relaxed">
              Premium websites for small businesses that send customers straight to your WhatsApp.
            </p>
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-white mb-6 tracking-wide">Links</h4>
            <ul className="space-y-3 font-inter text-sm text-gray-500">
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-inter font-bold text-white mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 font-inter text-sm text-gray-500">
              <li>
                <a href="mailto:hello@boostflow.agency" className="hover:text-white transition-colors">
                  hello@boostflow.agency
                </a>
              </li>
              <li>
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-whatsapp hover:text-green-500 transition-colors font-medium"
                >
                  <MessageCircle size={18} />
                  <span>Message on WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-inter text-gray-600">
          <p>&copy; {year} BoostFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
