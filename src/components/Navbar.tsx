"use client";

import { useState } from 'react';
import { 
  ChevronRight,
} from 'lucide-react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaYoutube, 
  FaEnvelope, 
  FaPhoneAlt 
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  return (
    <div className="w-full font-sans relative z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0f172a] text-white py-1 px-4 flex justify-between items-center text-[11px]">
        <div className="flex gap-[6px]">
          <div className="border border-gray-400 p-[3px] rounded-[2px] cursor-pointer hover:bg-gray-700 transition">
            <FaFacebookF size={12} />
          </div>
          <div className="border border-gray-400 p-[3px] rounded-[2px] cursor-pointer hover:bg-gray-700 transition">
            <FaInstagram size={12} />
          </div>
          <div className="border border-gray-400 p-[3px] rounded-[2px] cursor-pointer hover:bg-gray-700 transition">
            <FaLinkedinIn size={12} />
          </div>
          <div className="border border-gray-400 p-[3px] rounded-[2px] cursor-pointer hover:bg-gray-700 transition">
            <FaXTwitter size={12} />
          </div>
          <div className="border border-gray-400 p-[3px] rounded-[2px] cursor-pointer hover:bg-gray-700 transition">
            <FaWhatsapp size={12} />
          </div>
          <div className="border border-gray-400 p-[3px] rounded-[2px] cursor-pointer hover:bg-gray-700 transition">
            <FaYoutube size={12} />
          </div>
        </div>
        <div className="flex gap-4 items-center text-gray-300">
          <div className="flex items-center gap-1.5">
            <FaEnvelope size={12} className="text-[#38bdf8]" />
            <span>business@ibasearch.com</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaPhoneAlt size={12} className="text-[#38bdf8]" />
            <span>+91-88027 56666 | +91-88027 06666</span>
          </div>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="bg-[#0b1016] text-white px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link href="/" className="relative w-40 h-28 mb-1 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="International Business Advantage Logo" 
              fill 
              className="object-contain" 
            />
          </Link>
        </div>
        
        {/* Right side buttons & search */}
        <div className="flex flex-col gap-[6px] w-full max-w-[420px]">
          <div className="flex gap-[6px] justify-between w-full">
            <button className="bg-[#429bf5] hover:bg-[#3182ce] text-white text-[11px] font-bold py-[9px] px-2 flex-1 whitespace-nowrap tracking-wide">JOB SEEKERS LOGIN</button>
            <button className="bg-[#429bf5] hover:bg-[#3182ce] text-white text-[11px] font-bold py-[9px] px-2 flex-1 whitespace-nowrap tracking-wide">EMPLOYERS LOGIN</button>
            <button className="bg-[#429bf5] hover:bg-[#3182ce] text-white text-[11px] font-bold py-[9px] px-2 flex-1 whitespace-nowrap tracking-wide">PARTNERS LOGIN</button>
          </div>
          <div className="w-full border-[1.5px] border-white p-[3px] flex gap-[3px]">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full outline-none text-[15px] font-semibold placeholder:text-[#2a4d80] text-[#2a4d80] px-3 py-1 h-[32px] bg-white" 
            />
            <button className="bg-[#24589d] hover:bg-[#1a3f68] transition w-[40px] shrink-0 flex items-center justify-center text-white h-[32px]">
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Main Menu - Static positioned row */}
      <div className="w-full bg-[#11233f] text-white text-[9px] font-bold tracking-wider leading-tight flex border-t border-b border-gray-600 relative">
        
        {/* ABOUT US */}
        <div className="w-[11.1%] border-l border-gray-500/50 relative">
          <div 
            onClick={() => toggleDropdown('about')}
            className={`py-3 text-center border-r border-r-gray-500/50 cursor-pointer select-none transition ${openDropdown === 'about' ? 'bg-[#489eff]' : 'hover:bg-[#489eff]/80'}`}
          >
            ABOUT US
          </div>
          {openDropdown === 'about' && (
            <div className="absolute top-full left-0 w-full bg-[#123160] flex flex-col opacity-95 border-l border-r border-b border-gray-500/50 z-50">
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">CHAIRMAN</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">BOARD OF DIRECTORS</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">ADVISORS</Link>
              <Link href="#" className="py-3 text-center hover:bg-[#1f4b8f]">CONSULTANTS</Link>
            </div>
          )}
        </div>

        {/* GLOBAL RETAINED SEARCH */}
        <div className="w-[12.5%] relative">
          <div 
            onClick={() => toggleDropdown('global')}
            className={`py-3 text-center border-r border-r-gray-500/50 cursor-pointer select-none transition ${openDropdown === 'global' ? 'bg-[#489eff]' : 'hover:bg-[#489eff]/80'}`}
          >
            GLOBAL RETAINED SEARCH
          </div>
          {openDropdown === 'global' && (
            <div className="absolute top-full left-0 w-full bg-[#123160] flex flex-col opacity-95 border-r border-b border-gray-500/50 z-50">
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">RETAINED CXO SEARCH</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">SENIOR EXECUTIVE SEARCH</Link>
              <Link href="#" className="py-3 text-center hover:bg-[#1f4b8f]">CAREER WITH IBA</Link>
            </div>
          )}
        </div>

        {/* ADVISORY & CONSULTING */}
        <div className="w-[12.5%] relative">
          <div 
            onClick={() => toggleDropdown('advisory')}
            className={`py-3 text-center border-r border-r-gray-500/50 cursor-pointer select-none transition ${openDropdown === 'advisory' ? 'bg-[#489eff]' : 'hover:bg-[#489eff]/80'}`}
          >
            ADVISORY & CONSULTING
          </div>
          {openDropdown === 'advisory' && (
            <div className="absolute top-full left-0 w-full bg-[#123160] flex flex-col opacity-95 border-r border-b border-gray-500/50 z-50">
              <Link href="#" className="py-3 text-center px-1 border-b border-gray-500/50 hover:bg-[#1f4b8f]">CORPORATE GOVERNANCE ADVISORY</Link>
              <Link href="#" className="py-3 text-center px-1 border-b border-gray-500/50 hover:bg-[#1f4b8f]">MEDIA ADVERTISING & PRODUCTION</Link>
              <Link href="#" className="py-3 text-center px-1 border-b border-gray-500/50 hover:bg-[#1f4b8f]">BRANDING, PR & IMAGE CONSULTING</Link>
              <Link href="#" className="py-3 text-center px-1 border-b border-gray-500/50 hover:bg-[#1f4b8f]">BUSINESS ADVISORY & CONSULTING</Link>
              <Link href="#" className="py-3 text-center px-1 border-b border-gray-500/50 hover:bg-[#1f4b8f]">LEGAL ADVISORY & CONSULTING</Link>
              <Link href="#" className="py-3 text-center px-1 border-b border-gray-500/50 hover:bg-[#1f4b8f]">FINANCIAL ADVISORY & CONSULTING</Link>
              <Link href="#" className="py-3 text-center px-1 hover:bg-[#1f4b8f]">HR TRANSFORMATIONAL CONSULTING</Link>
            </div>
          )}
        </div>

        {/* COACHING & MENTORING */}
        <div className="w-[12.5%] relative">
          <div 
            onClick={() => toggleDropdown('coaching')}
            className={`py-3 text-center border-r border-r-gray-500/50 cursor-pointer select-none transition ${openDropdown === 'coaching' ? 'bg-[#489eff]' : 'hover:bg-[#489eff]/80'}`}
          >
            COACHING & MENTORING
          </div>
          {openDropdown === 'coaching' && (
            <div className="absolute top-full left-0 w-full bg-[#123160] flex flex-col opacity-95 border-r border-b border-gray-500/50 z-50">
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">TRANSFORMATIONAL COACHING</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">ENTREPRENEURIAL COACHING</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">MENTORING THE YOUNG LEADERS</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">LEADERSHIP COACHING</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">IMPACT SALES PROGRAMS</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">SOFT SKILLS PROGRAMS</Link>
              <Link href="#" className="py-3 text-center hover:bg-[#1f4b8f]">INTERNSHIP PROGRAMS</Link>
            </div>
          )}
        </div>

        {/* PARTNERSHIPS & TIE-UPS */}
        <div className="w-[12.5%] relative">
          <div 
            onClick={() => toggleDropdown('partnerships')}
            className={`py-3 text-center border-r border-r-gray-500/50 cursor-pointer select-none transition ${openDropdown === 'partnerships' ? 'bg-[#489eff]' : 'hover:bg-[#489eff]/80'}`}
          >
            PARTNERSHIPS & TIE-UPS
          </div>
          {openDropdown === 'partnerships' && (
            <div className="absolute top-full left-0 w-full bg-[#123160] flex flex-col opacity-95 border-r border-b border-gray-500/50 z-50">
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">TECHNOLOGY PARTNERS</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">FRANCHISE PARTNERS</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">STRATEGIC PARTNERS</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">BUSINESS PARTNERS</Link>
              <Link href="#" className="py-3 text-center border-b border-gray-500/50 hover:bg-[#1f4b8f]">EXPANSION PARTNERS</Link>
              <Link href="#" className="py-3 text-center hover:bg-[#1f4b8f]">DELIVERY PARTNERS</Link>
            </div>
          )}
        </div>

        {/* EVENTS & ENTERTAINMENT */}
        <div className="w-[12.5%] relative">
          <div className="py-3 text-center border-r border-r-gray-500/50 cursor-pointer select-none hover:bg-[#489eff]/80 transition">
            EVENTS & ENTERTAINMENT
          </div>
        </div>

        {/* NEWSROOM */}
        <div className="w-[12.5%] relative">
          <div className="py-3 text-center border-r border-r-gray-500/50 cursor-pointer select-none hover:bg-[#489eff]/80 transition">
            NEWSROOM
          </div>
        </div>

        {/* CONTACT US */}
        <div className="w-[13.9%] relative">
          <div className="py-3 text-center border-r border-gray-500/50 cursor-pointer select-none hover:bg-[#489eff]/80 transition">
            CONTACT US
          </div>
        </div>

      </div>
    </div>
  );
}
