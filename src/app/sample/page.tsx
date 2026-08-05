"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import { 
  ArrowRight as LArrowRight, 
  Search as LSearch, 
  Shield as LShield, 
  Target as LTarget, 
  Award as LAward, 
  Scale as LScale, 
  Users as LUsers, 
  Calendar as LCalendar, 
  Briefcase as LBriefcase, 
  UserCog as LUserCog, 
  Megaphone as LMegaphone, 
  Monitor as LMonitor, 
  FileText as LFileText, 
  DollarSign as LDollarSign, 
  UserCheck as LUserCheck, 
  BookOpen as LBookOpen, 
  GraduationCap as LGraduationCap 
} from 'lucide-react';



const SampleLocations = () => {
  const indianCities = ["Delhi", "Gurugram", "Chandigarh", "Ahmedabad", "Mumbai", "Pune", "Goa", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];
  const intlCities = ["New York", "California", "Toronto", "United Kingdom", "France", "Germany", "Italy", "Dubai", "Singapore", "Malaysia", "Philippines", "Indonesia", "Australia", "New Zealand"];
  
  return (
    <div className="w-full bg-white flex justify-center pb-12 pt-8">
      <div className="w-full max-w-[1400px] px-8">
        <div className="relative overflow-hidden bg-[#f8f6f0] rounded-[2rem] p-8 lg:p-14 shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex flex-col flex-shrink-0 text-left border-l-4 border-[#c5a365] pl-6 py-2">
            <span className="text-gray-500 text-[10px] font-light tracking-[0.3em] uppercase mb-2 block">Our Footprint</span>
            <h3 className="text-[#1a1a1a] text-3xl font-light tracking-tight">Global <br /> Presence</h3>
          </div>

          <div className="flex-1 flex flex-col gap-8 w-full">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12 border-b border-gray-200/60 pb-8">
              <h4 className="text-[#c5a365] text-[11px] font-bold tracking-[0.2em] w-24 flex-shrink-0 pt-1">INDIA</h4>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {indianCities.map(city => (
                  <span key={city} className="text-gray-700 text-sm font-medium hover:text-[#c5a365] transition-colors cursor-pointer tracking-wide">{city}</span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
              <h4 className="text-[#c5a365] text-[11px] font-bold tracking-[0.2em] w-24 flex-shrink-0 pt-1">GLOBAL</h4>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {intlCities.map(city => (
                  <span key={city} className="text-gray-700 text-sm font-medium hover:text-[#c5a365] transition-colors cursor-pointer tracking-wide">{city}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const SampleAbout = () => (
  <section className="w-full py-24 lg:py-32 bg-white flex justify-center relative overflow-hidden">
    {/* Subtle background decoration */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f8f6f0] rounded-full blur-[100px] -mr-40 -mt-40 opacity-50"></div>

    <div className="w-full max-w-[1400px] px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
      
      {/* Image Area - Asymmetrical framing */}
      <div className="flex-1 relative w-full flex justify-center lg:justify-end">
        <div className="relative w-full max-w-[500px]">
          {/* Main Image */}
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.08)] relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Corporate Boardroom" 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Decorative Gold Border Offset */}
          <div className="absolute -bottom-6 -left-6 w-full h-full rounded-[2rem] border border-[#c5a365]/30 z-0 hidden lg:block"></div>
          {/* Small Floating Stat */}
          <div className="absolute bottom-12 -right-4 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl z-20 flex flex-col items-center justify-center border border-gray-100">
            <span className="text-[#c5a365] text-3xl font-bold">25+</span>
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-1 text-center">Years of <br/> Excellence</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col items-start lg:pl-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-[#c5a365]"></div>
          <span className="text-[#c5a365] text-[10px] font-light tracking-[0.3em] uppercase">Who We Are</span>
        </div>
        
        <h2 className="text-[#1a1a1a] text-4xl lg:text-[3.5rem] font-light leading-[1.1] mb-8 tracking-tight">
          Strategic <br /> Advantage. <br /> Global Impact.
        </h2>
        
        <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed max-w-lg font-light">
          <p>
            <strong className="font-semibold text-[#1a1a1a]">International Business Advantage</strong> is a premier Global Search & Business Consulting Company dedicated to transforming organizations through strategic talent acquisition and business advisory.
          </p>
          <p>
            For over two and a half decades, we have partnered with MNCs, Blue Chip Companies, Large Corporate Houses, and Family-owned businesses to deliver complete projects in Search & Recruitment, Coaching, and Training Solutions. Based in Gurgaon, our expertise drives growth across a PAN India presence.
          </p>
        </div>
        
        <button className="mt-12 group relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.2em] text-[#1a1a1a] uppercase transition-all overflow-hidden border border-[#1a1a1a] rounded-full hover:border-transparent cursor-pointer">
          <span className="absolute inset-0 w-full h-full bg-[#1a1a1a] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative group-hover:text-white transition-colors duration-300 flex items-center gap-3">
            Discover Our Story <LArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>

    </div>
  </section>
);

const SampleNetwork = () => {
  const roles = [
    { title: "Managing Director", icon: <LUsers size={24} /> },
    { title: "Chief Executive Officer", icon: <LUserCog size={24} /> },
    { title: "Chief Marketing Officer", icon: <LMegaphone size={24} /> },
    { title: "Chief Business Officer", icon: <LBriefcase size={24} /> },
    { title: "Chief Digital Officer", icon: <LMonitor size={24} /> },
    { title: "Chief Information Officer", icon: <LFileText size={24} /> },
    { title: "Chief Financial Officer", icon: <LDollarSign size={24} /> },
    { title: "Chief HR Officer", icon: <LUserCheck size={24} /> }
  ];

  return (
    <section className="w-full py-24 bg-[#081225] flex justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#112340] via-[#081225] to-[#081225] opacity-60"></div>
      <div className="w-full max-w-[1400px] px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.3em] uppercase mb-4">VRK Global CXO Network</h3>
          <h2 className="text-white text-4xl font-light tracking-tight">Exclusive Leadership Club</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl flex flex-col items-center text-center backdrop-blur-sm hover:bg-white/10 hover:border-[#c5a365]/50 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-[#c5a365]/10 flex items-center justify-center text-[#c5a365] mb-6 group-hover:bg-[#c5a365] group-hover:text-[#081225] transition-colors shadow-lg">
                {role.icon}
              </div>
              <h4 className="text-white text-sm font-bold tracking-widest uppercase mb-6">{role.title}</h4>
              <span className="text-[#c5a365] text-[10px] font-bold tracking-[0.2em] uppercase mt-auto opacity-0 group-hover:opacity-100 transition-opacity">Request Membership &rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable Section Component
const SectionHeader = ({ subtitle, title }: { subtitle: string, title: string }) => (
  <div className="text-center mb-16">
    <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">{subtitle}</h3>
    <h2 className="text-[#1a1a1a] text-3xl font-light">{title}</h2>
  </div>
);

const SampleGlobalSearch = () => {
  const cards = [
    { title: "Executive Search", desc: "Retained search for C-Suite and Board level appointments globally.", roles: "MD, DIRECTORS, CEO" },
    { title: "Mid-Management", desc: "Targeted acquisition for pivotal leadership and operational roles.", roles: "CXO, VP, GM" },
    { title: "Emerging Talent", desc: "Identifying high-potential leaders for future strategic growth.", roles: "DGM-MANAGERS" },
    { title: "Early Career", desc: "Acquiring fresh talent and interns to build a strong foundation.", roles: "INTERNS" }
  ];
  return (
    <section className="w-full py-24 bg-white flex justify-center">
      <div className="w-full max-w-[1400px] px-8">
        <SectionHeader subtitle="Talent Acquisition" title="Global Retained Search" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#f8f6f0] p-12 rounded-[2rem] flex flex-col items-start shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-8">
                <LSearch size={20} className="text-[#c5a365]" />
              </div>
              <h4 className="text-[#1a1a1a] text-xl font-bold tracking-tight mb-4">{card.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">{card.desc}</p>
              <div className="mt-auto pt-6 border-t border-gray-200/60 w-full flex justify-between items-center">
                <span className="text-[#c5a365] text-[10px] font-bold tracking-[0.2em]">{card.roles}</span>
                <LArrowRight size={16} className="text-[#1a1a1a] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SampleAdvisory = () => {
  const items = [
    { title: "CORPORATE GOVERNANCE", subtitle: "ADVISORY", icon: <LShield size={32} />, desc: "Legal advisory, financial structuring, and risk management." },
    { title: "STRATEGIC BUSINESS", subtitle: "CONSULTING", icon: <LTarget size={32} />, desc: "Business advisory, branding, and comprehensive PR strategies." },
    { title: "BRANDING, PR & IMAGE", subtitle: "CONSULTING", icon: <LAward size={32} />, desc: "Building strong corporate and personal branding footprints." },
    { title: "LEGAL ADVISORY", subtitle: "CONSULTING", icon: <LScale size={32} />, desc: "Expert legal counsel and corporate structuring." },
    { title: "HR TRANSFORMATIONAL", subtitle: "CONSULTING", icon: <LUsers size={32} />, desc: "Organizational redesign, culture building, and leadership assessment." }
  ];
  return (
    <section className="w-full py-24 bg-[#f8f6f0] flex justify-center">
      <div className="w-full max-w-[1400px] px-8">
        <SectionHeader subtitle="Expert Guidance" title="Advisory & Consulting" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] flex flex-col items-center text-center shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-gray-100 hover:border-[#c5a365]/30 transition-colors">
              <div className="text-[#081225] mb-8">{item.icon}</div>
              <h4 className="text-[#1a1a1a] text-lg font-bold tracking-wide mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SampleEvents = () => {
  const items = [
    { title: "MUSIC CONCERTS & SHOWS", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070" },
    { title: "CONFERENCE & FORUMS", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070" },
    { title: "BUSINESS MEETS", img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084" },
    { title: "SPORTS EVENTS", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070" },
    { title: "PRODUCT PROMOTIONS", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012" }
  ];
  return (
    <section className="w-full py-24 bg-white flex justify-center">
      <div className="w-full max-w-[1400px] px-8">
        <SectionHeader subtitle="Networking & Growth" title="Business Events & Entertainment" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-[#f8f6f0] rounded-[2rem] overflow-hidden shadow-md group cursor-pointer relative h-80">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081225]/90 via-[#081225]/40 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-8 h-[2px] bg-[#c5a365] mb-4 transform origin-left group-hover:scale-x-150 transition-transform"></div>
                <h4 className="text-white text-sm font-bold tracking-[0.2em]">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SamplePartnerships = () => {
  const cards = [
    { title: "INVESTORS CONNECT", subtitle: "BUSINESS INVESTMENT PARTNERSHIP", items: ["Venture Capital", "Angel Investors", "Private Equity"] },
    { title: "MERGER & ACQUISITION", subtitle: "BUSINESS ADVISORY & COLLABORATION", items: ["Due Diligence", "Valuation", "Integration Strategy"] },
    { title: "FRANCHISE PARTNERSHIP", subtitle: "BUSINESS PARTNERSHIP", items: ["Master Franchise", "Unit Franchise", "Area Development"] },
    { title: "COLLABORATION & TIE-UPS", subtitle: "BUSINESS EXPANSION PARTNERSHIP", items: ["Joint Ventures", "Strategic Alliances", "Co-Branding"] },
    { title: "TECHNOLOGY PARTNERS", subtitle: "BUSINESS EXPANSION PARTNERSHIP", items: ["Platform Integrations", "Digital Transformation", "EdTech Solutions"] },
    { title: "FUNDRAISING", subtitle: "FOUNDATION", items: ["Seed Funding", "Series A/B", "Debt Financing"] }
  ];
  return (
    <section className="w-full py-24 bg-[#081225] flex justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a365]/30 to-transparent"></div>
      <div className="w-full max-w-[1400px] px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.3em] uppercase mb-4">Global Collaborations</h3>
          <h2 className="text-white text-3xl font-light tracking-tight">Partnerships & Tie Ups</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-[#111827] border border-white/5 p-10 rounded-[2rem] flex flex-col shadow-2xl hover:border-[#c5a365]/40 transition-colors">
              <h4 className="text-white text-lg font-bold tracking-wide mb-2">{card.title}</h4>
              <p className="text-[#c5a365] text-[10px] tracking-wider uppercase mb-6 pb-6 border-b border-white/10">{card.subtitle}</p>
              <ul className="space-y-4 mb-8 flex-1">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a365]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-[#c5a365] text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:text-white transition-colors">
                Partner With Us <LArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SampleAcademy = () => {
  const items = [
    "BOARD COACHING", "CXO COACHING", "YOUNG LEADERS", "EXECUTIVE COACHING", "COACHING THE TRAINERS",
    "YOU ARE A BRAND", "SELL LIKE A CHAMPION", "POWER SELLING", "IMPACT PRESENTATIONS", "CUSTOMER FIRST",
    "INFLUENCING OTHERS", "DECISION MAKING", "NEGOTIATION TECHNIQUES", "BUSINESS ETIQUETTES", "MANAGING COMMUNICATION"
  ];
  return (
    <section className="w-full py-24 bg-white flex justify-center">
      <div className="w-full max-w-[1400px] px-8">
        <SectionHeader subtitle="Executive Education" title="VK Business Academy" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((title, idx) => (
            <div key={idx} className="bg-[#f8f6f0] p-6 rounded-[2rem] flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm text-[#081225] group-hover:scale-110 transition-transform">
                <LBookOpen size={20} className="text-[#c5a365]" />
              </div>
              <h4 className="text-[#1a1a1a] text-[12px] font-bold tracking-wide uppercase leading-snug mb-6 flex-1">{title}</h4>
              <span className="text-[#c5a365] text-[10px] font-bold tracking-[0.2em] uppercase mt-auto">Details &rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SampleEmployers = () => {
  const employers = Array.from({ length: 28 });
  return (
    <section className="w-full py-24 bg-[#f8f6f0] flex justify-center">
      <div className="w-full max-w-[1400px] px-8">
        <SectionHeader subtitle="Trusted By" title="Top Employers" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {employers.map((_, idx) => (
            <div key={idx} className="aspect-[3/2] bg-white rounded-2xl flex items-center justify-center border border-gray-100 hover:border-[#c5a365]/50 transition-colors shadow-sm hover:shadow-md cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#c5a365]/20 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function SamplePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SampleLocations />
      <SampleAbout />
      <SampleNetwork />
      <SampleGlobalSearch />
      <SampleAdvisory />
      <SampleEvents />
      <SamplePartnerships />
      <SampleAcademy />
      <SampleEmployers />
      <Footer />
    </main>
  );
}
