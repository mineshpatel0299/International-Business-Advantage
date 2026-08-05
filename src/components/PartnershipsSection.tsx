import React from 'react';
import { Handshake, TrendingUp, Store, Network, Cpu, Banknote } from 'lucide-react';

export default function PartnershipsSection() {
  const items = [
    { title: "INVESTORS CONNECT", subtitle: "BUSINESS INVESTMENT PARTNERSHIP", icon: <TrendingUp size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "MERGER & ACQUISITION", subtitle: "BUSINESS ADVISORY & COLLABORATION", icon: <Handshake size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "FRANCHISE PARTNERSHIP", subtitle: "BUSINESS PARTNERSHIP", icon: <Store size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "COLLABORATION & TIE-UPS", subtitle: "BUSINESS EXPANSION PARTNERSHIP", icon: <Network size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "TECHNOLOGY PARTNERS", subtitle: "BUSINESS EXPANSION PARTNERSHIP", icon: <Cpu size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "FUNDRAISING", subtitle: "FOUNDATION", icon: <Banknote size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#081225]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">
            Global Collaborations
          </h3>
          <h2 className="text-white text-3xl lg:text-4xl font-light leading-tight">
            Business Partnerships & Collaborations
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a365] mt-6"></div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white flex flex-col items-center text-center p-8 transition-transform hover:-translate-y-1 duration-300">
              
              {item.icon}
              
              <div className="mb-8 flex-1 flex flex-col justify-center">
                <h3 className="text-[#081225] text-[15px] font-semibold tracking-wide leading-snug mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[10px] tracking-wider uppercase">{item.subtitle}</p>
              </div>
              
              {/* Buttons Container */}
              <div className="flex w-full gap-3 mt-auto">
                <button className="flex-1 text-[#c5a365] border border-[#c5a365] hover:bg-[#c5a365] hover:text-[#081225] py-2.5 text-[10px] font-bold tracking-wider transition-colors">
                  READ MORE
                </button>
                <button className="flex-1 bg-[#081225] text-white hover:bg-[#c5a365] py-2.5 text-[10px] font-bold tracking-wider transition-colors">
                  REGISTER NOW
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
