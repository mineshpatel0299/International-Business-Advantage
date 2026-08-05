import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function AcademySection() {
  const items = [
    "BOARD COACHING", "CXO COACHING", "YOUNG LEADERS", "EXECUTIVE COACHING", "COACHING THE TRAINERS",
    "YOU ARE A BRAND", "SELL LIKE A CHAMPION", "POWER SELLING", "IMPACT PRESENTATIONS", "CUSTOMER FIRST",
    "INFLUENCING OTHERS", "DECISION MAKING", "NEGOTIATION TECHNIQUES", "BUSINESS ETIQUETTES", "MANAGING COMMUNICATION"
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#f8f6f0]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">
            Executive Education
          </h3>
          <h2 className="text-[#081225] text-3xl lg:text-4xl font-light leading-tight">
            VK Business Academy
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a365] mt-6"></div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((title, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-[#c5a365]/30 transition-all duration-300 group cursor-pointer">
              
              <div className="w-10 h-10 rounded-full bg-[#f8f6f0] flex items-center justify-center mb-4 group-hover:bg-[#081225] transition-colors">
                <BookOpen size={18} className="text-[#c5a365]" />
              </div>
              
              <h3 className="text-[#081225] text-[11px] lg:text-[12px] font-semibold tracking-wide leading-snug uppercase mb-4 flex-1">
                {title}
              </h3>
              
              <button className="text-[#c5a365] text-[10px] font-bold tracking-wider hover:text-[#081225] transition-colors uppercase flex items-center gap-1">
                Details <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">&rarr;</span>
              </button>
              
            </div>
          ))}
        </div>
        
        {/* Bottom Call to action */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-3 px-10 py-3 bg-[#081225] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#c5a365] hover:text-[#081225] transition-all duration-300">
            <GraduationCap size={18} /> View All Programs
          </button>
        </div>
        
      </div>
    </section>
  );
}
