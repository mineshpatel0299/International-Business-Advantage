import React from 'react';
import { Search, Briefcase, ChevronRight } from 'lucide-react';

export default function GlobalSearchSection() {
  const roles = [
    "MD, DIRECTORS, CEO",
    "CXO, VP, GM",
    "DGM-MANAGERS",
    "INTERNS"
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#f8f6f0]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">
            Talent Acquisition
          </h3>
          <h2 className="text-[#081225] text-3xl lg:text-4xl font-light leading-tight">
            Global Search Company
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a365] mt-6"></div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white border border-gray-100 shadow-sm flex flex-col items-center text-center p-8 transition-all hover:shadow-md hover:-translate-y-1 duration-300">
              <Search size={32} className="text-[#c5a365] mb-6" strokeWidth={1.5} />
              
              <h3 className="text-[#081225] text-[14px] font-semibold tracking-wide mb-8">{role}</h3>
              
              <div className="flex flex-col w-full gap-3 mt-auto">
                <button className="flex items-center justify-center gap-2 w-full border border-[#081225] text-[#081225] py-2.5 text-[10px] font-bold tracking-wider hover:bg-[#081225] hover:text-white transition-colors">
                  JOB SEEKER APPLY
                </button>
                <button className="flex items-center justify-center gap-2 w-full bg-[#081225] text-white py-2.5 text-[10px] font-bold tracking-wider hover:bg-[#c5a365] transition-colors">
                  EMPLOYER APPLY
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
