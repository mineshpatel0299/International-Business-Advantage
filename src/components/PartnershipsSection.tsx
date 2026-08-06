import React from 'react';
import { Handshake, TrendingUp, Store, Network, Cpu, Banknote } from 'lucide-react';
import ParallaxWrapper from './ParallaxWrapper';

export default function PartnershipsSection() {
  const items = [
    { title: "INVESTORS CONNECT", subtitle: "BUSINESS INVESTMENT PARTNERSHIP", buttonText: "Register Now" },
    { title: "MERGER & ACQUISITION", subtitle: "BUSINESS ADVISORY & COLLABORATION", buttonText: "Register Now" },
    { title: "FRANCHISE PARTNERSHIP", subtitle: "BUSINESS PARTNERSHIP", buttonText: "Register Now" },
    { title: "COLLABORATION & TIE-UPS", subtitle: "BUSINESS EXPANSION PARTNERSHIP", buttonText: "Register Now" },
    { title: "TECHNOLOGY PARTNERS", subtitle: "BUSINESS EXPANSION PARTNERSHIP", buttonText: "Register Now" },
    { title: "FUNDRAISING", subtitle: "FOUNDATION", buttonText: "Register Now" },
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#0E1B2D]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Golden Border Box */}
        <div className="border border-[#c5a365] bg-[#0a2543] p-8 md:p-12 w-full">
          
          {/* Header Area */}
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
              Business Partnerships & Collaborations
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col h-full bg-[#0a2543]">
                {/* White Image Placeholder */}
                <div className="w-full aspect-[4/3] bg-[#dcdcdc]"></div>
                
                {/* Text Content */}
                <div className="flex flex-col items-center pt-4 pb-3 text-center flex-1">
                  <h3 className="text-white text-[13px] font-bold tracking-wide uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] tracking-wider uppercase">
                    {item.subtitle}
                  </p>
                </div>
                
                {/* Buttons - 50/50 Split */}
                <div className="flex w-full mt-auto">
                  <button className="flex-1 bg-[#285e8e] hover:bg-[#1e4a72] text-white py-2.5 text-[9px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
                    READ MORE
                  </button>
                  <button className="flex-1 bg-[#3fa2f6] hover:bg-[#2e8ee6] text-white py-2.5 text-[9px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center">
                    REGISTER NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
