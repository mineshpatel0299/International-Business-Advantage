"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaYoutube 
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const quickLinks = [
    "ABOUT US",
    "INTERNATIONAL BUSINESS ADVANTAGE",
    "GLOBAL RETAINED SEARCH COMPANY",
    "MANAGEMENT SERVICES",
    "COACHING & MENTORING",
    "INTERNSHIP PROGRAMS"
  ];

  const memberships = [
    "VRK BILLIONAIRES CLUB",
    "VRK MILLIONARES CLUB",
    "VRK GLOBAL CXO NETWORK CLUB",
    "GLOBAL DIVERSITY BUSINESS CLUB",
    "EVENTS & ENTERTAINMENT"
  ];

  const partnerships = [
    "BUSINESS OPPORTUNITIES",
    "FRANCHISE PARTNERSHIP",
    "COLLABORATIONS & TIE UPS",
    "LUXURY MARKETPLACE",
    "LUXURY TRAVEL HOLIDAYS",
    "LUXURY REAL ESTATE"
  ];

  return (
    <footer className="w-full bg-[#0a2543] pt-16 pb-8 px-8 lg:px-16 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
        
        {/* Column 1: QUICK LINKS */}
        <div className="flex flex-col">
          <h3 className="text-white text-sm font-bold tracking-wider mb-6 uppercase">QUICK LINKS</h3>
          <div className="flex flex-col gap-3 mb-8">
            {quickLinks.map((link, idx) => (
              <Link key={idx} href="#" className="text-gray-300 hover:text-white text-[11px] uppercase tracking-wide transition">
                {link}
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex gap-2">
            <Link href="#" className="border border-white/40 p-1.5 rounded-md hover:bg-white/10 transition text-white">
              <FaFacebookF size={14} />
            </Link>
            <Link href="#" className="border border-white/40 p-1.5 rounded-md hover:bg-white/10 transition text-white">
              <FaInstagram size={14} />
            </Link>
            <Link href="#" className="border border-white/40 p-1.5 rounded-md hover:bg-white/10 transition text-white">
              <FaLinkedinIn size={14} />
            </Link>
            <Link href="#" className="border border-white/40 p-1.5 rounded-md hover:bg-white/10 transition text-white">
              <FaXTwitter size={14} />
            </Link>
            <Link href="#" className="border border-white/40 p-1.5 rounded-md hover:bg-white/10 transition text-white">
              <FaWhatsapp size={14} />
            </Link>
            <Link href="#" className="border border-white/40 p-1.5 rounded-md hover:bg-white/10 transition text-white">
              <FaYoutube size={14} />
            </Link>
          </div>
        </div>

        {/* Column 2: GET YOUR MEMBERSHIP */}
        <div className="flex flex-col">
          <h3 className="text-white text-sm font-bold tracking-wider mb-6 uppercase">GET YOUR MEMBERSHIP</h3>
          <div className="flex flex-col gap-3">
            {memberships.map((link, idx) => (
              <Link key={idx} href="#" className="text-gray-300 hover:text-white text-[11px] uppercase tracking-wide transition">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: PARTNERSHIP OPPORTUNITIES */}
        <div className="flex flex-col">
          <h3 className="text-white text-sm font-bold tracking-wider mb-6 uppercase">PARTNERSHIP OPPORTUNITIES</h3>
          <div className="flex flex-col gap-3">
            {partnerships.map((link, idx) => (
              <Link key={idx} href="#" className="text-gray-300 hover:text-white text-[11px] uppercase tracking-wide transition">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4: CONTACT TODAY */}
        <div className="flex flex-col">
          <h3 className="text-white text-sm font-bold tracking-wider mb-6 uppercase">CONTACT TODAY</h3>
          
          <div className="text-gray-300 text-[11px] tracking-wide mb-4">
            INTERNATIONAL BUSINESS ADVANTAGE
          </div>
          
          <div className="text-gray-400 text-[11px] tracking-wide mb-1">
            Call us Today:
          </div>
          <div className="text-white text-[15px] font-semibold tracking-wider mb-1">
            +91 88027-56666
          </div>
          <div className="text-white text-[15px] font-semibold tracking-wider mb-4">
            +91 88027-06666
          </div>
          
          <div className="text-gray-300 text-[11px] tracking-wide mb-6">
            <span className="font-bold text-white uppercase">EMAIL:</span> business@ibasearch.com
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-white text-black px-3 py-2 text-[11px] rounded-[2px] outline-none"
            />
            <input 
              type="email" 
              placeholder="johndoe@email.com" 
              className="w-full bg-white text-black px-3 py-2 text-[11px] rounded-[2px] outline-none"
            />
            <input 
              type="tel" 
              placeholder="+971 00-000-0000" 
              className="w-full bg-white text-black px-3 py-2 text-[11px] rounded-[2px] outline-none"
            />
            <input 
              type="text" 
              placeholder="Company" 
              className="w-full bg-white text-black px-3 py-2 text-[11px] rounded-[2px] outline-none"
            />
            <input 
              type="text" 
              placeholder="Country" 
              className="w-full bg-white text-black px-3 py-2 text-[11px] rounded-[2px] outline-none"
            />
            <textarea 
              placeholder="Type your Message here" 
              rows={3}
              className="w-full bg-white text-black px-3 py-2 text-[11px] rounded-[2px] outline-none resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-[#3b82f6] hover:bg-blue-600 transition text-white py-2 mt-1 text-[12px] font-bold tracking-wider rounded-[2px]"
            >
              Submit
            </button>
          </form>

        </div>

      </div>
    </footer>
  );
}
