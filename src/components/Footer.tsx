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
    <footer className="w-full bg-[#0E1B2D] pt-20 pb-12 px-8 lg:px-24 border-t border-white/5">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
        
        {/* Column 1: QUICK LINKS */}
        <div className="flex flex-col">
          <h3 className="text-[#c5a365] text-xs font-bold tracking-[0.2em] mb-8 uppercase">QUICK LINKS</h3>
          <div className="flex flex-col gap-4 mb-8">
            {quickLinks.map((link, idx) => (
              <Link key={idx} href="#" className="text-gray-400 hover:text-[#c5a365] text-[11px] uppercase tracking-wide transition-colors">
                {link}
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="flex gap-2">
            <Link href="#" className="border border-white/10 p-2 rounded-sm hover:bg-white/5 hover:border-[#c5a365]/50 transition-all text-gray-400 hover:text-[#c5a365]">
              <FaFacebookF size={14} />
            </Link>
            <Link href="#" className="border border-white/10 p-2 rounded-sm hover:bg-white/5 hover:border-[#c5a365]/50 transition-all text-gray-400 hover:text-[#c5a365]">
              <FaInstagram size={14} />
            </Link>
            <Link href="#" className="border border-white/10 p-2 rounded-sm hover:bg-white/5 hover:border-[#c5a365]/50 transition-all text-gray-400 hover:text-[#c5a365]">
              <FaLinkedinIn size={14} />
            </Link>
            <Link href="#" className="border border-white/10 p-2 rounded-sm hover:bg-white/5 hover:border-[#c5a365]/50 transition-all text-gray-400 hover:text-[#c5a365]">
              <FaXTwitter size={14} />
            </Link>
            <Link href="#" className="border border-white/10 p-2 rounded-sm hover:bg-white/5 hover:border-[#c5a365]/50 transition-all text-gray-400 hover:text-[#c5a365]">
              <FaWhatsapp size={14} />
            </Link>
            <Link href="#" className="border border-white/10 p-2 rounded-sm hover:bg-white/5 hover:border-[#c5a365]/50 transition-all text-gray-400 hover:text-[#c5a365]">
              <FaYoutube size={14} />
            </Link>
          </div>
        </div>

        {/* Column 2: GET YOUR MEMBERSHIP */}
        <div className="flex flex-col">
          <h3 className="text-[#c5a365] text-xs font-bold tracking-[0.2em] mb-8 uppercase">GET YOUR MEMBERSHIP</h3>
          <div className="flex flex-col gap-4">
            {memberships.map((link, idx) => (
              <Link key={idx} href="#" className="text-gray-400 hover:text-[#c5a365] text-[11px] uppercase tracking-wide transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: PARTNERSHIP OPPORTUNITIES */}
        <div className="flex flex-col">
          <h3 className="text-[#c5a365] text-xs font-bold tracking-[0.2em] mb-8 uppercase">PARTNERSHIP OPPORTUNITIES</h3>
          <div className="flex flex-col gap-4">
            {partnerships.map((link, idx) => (
              <Link key={idx} href="#" className="text-gray-400 hover:text-[#c5a365] text-[11px] uppercase tracking-wide transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 4: CONTACT TODAY */}
        <div className="flex flex-col">
          <h3 className="text-[#c5a365] text-xs font-bold tracking-[0.2em] mb-8 uppercase">CONTACT TODAY</h3>
          
          <div className="text-gray-400 text-[11px] tracking-widest mb-6">
            INTERNATIONAL BUSINESS ADVANTAGE
          </div>
          
          <div className="text-gray-500 text-[10px] tracking-wider mb-2 uppercase">
            Call us Today:
          </div>
          <div className="text-white text-[15px] font-medium tracking-wider mb-1">
            +91 88027-56666
          </div>
          <div className="text-white text-[15px] font-medium tracking-wider mb-6">
            +91 88027-06666
          </div>
          
          <div className="text-gray-400 text-[11px] tracking-wide mb-8">
            <span className="font-bold text-[#c5a365] uppercase tracking-wider mr-2">EMAIL:</span> business@ibasearch.com
          </div>

          {/* Contact Form */}
          <form className="flex flex-col gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-2.5 text-[11px] outline-none focus:border-[#c5a365]/50 transition-colors"
            />
            <input 
              type="email" 
              placeholder="johndoe@email.com" 
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-2.5 text-[11px] outline-none focus:border-[#c5a365]/50 transition-colors"
            />
            <input 
              type="tel" 
              placeholder="+971 00-000-0000" 
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-2.5 text-[11px] outline-none focus:border-[#c5a365]/50 transition-colors"
            />
            <input 
              type="text" 
              placeholder="Company" 
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-2.5 text-[11px] outline-none focus:border-[#c5a365]/50 transition-colors"
            />
            <input 
              type="text" 
              placeholder="Country" 
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-2.5 text-[11px] outline-none focus:border-[#c5a365]/50 transition-colors"
            />
            <textarea 
              placeholder="Type your Message here" 
              rows={3}
              className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 px-4 py-2.5 text-[11px] outline-none resize-none focus:border-[#c5a365]/50 transition-colors"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3 mt-2 text-[11px] font-bold tracking-widest uppercase"
            >
              Submit Request
            </button>
          </form>

        </div>

      </div>
    </footer>
  );
}
