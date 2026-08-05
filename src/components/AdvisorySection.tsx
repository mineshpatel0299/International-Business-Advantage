import React from 'react';
import { Shield, Target, Award, Scale, Users, ArrowRight } from 'lucide-react';

export default function AdvisorySection() {
  const items = [
    { title: "CORPORATE GOVERNANCE", subtitle: "ADVISORY", icon: <Shield size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "STRATEGIC BUSINESS", subtitle: "CONSULTING", icon: <Target size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "BRANDING, PR & IMAGE", subtitle: "CONSULTING", icon: <Award size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "LEGAL ADVISORY", subtitle: "CONSULTING", icon: <Scale size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "HR TRANSFORMATIONAL", subtitle: "CONSULTING", icon: <Users size={28} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#081225]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">
            Expert Guidance
          </h3>
          <h2 className="text-white text-3xl lg:text-4xl font-light leading-tight">
            Board Advisory & Consulting
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a365] mt-6"></div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white flex flex-col items-center text-center p-6 transition-transform hover:-translate-y-1 duration-300">
              
              {item.icon}
              
              <div className="mb-6 flex-1 flex flex-col justify-center">
                <h3 className="text-[#081225] text-[13px] font-semibold tracking-wide leading-snug mb-1">{item.title}</h3>
                <p className="text-gray-500 text-[10px] tracking-wider uppercase">{item.subtitle}</p>
              </div>
              
              {/* Buttons Container */}
              <div className="flex flex-col w-full gap-2 mt-auto">
                <button className="w-full text-[#c5a365] hover:text-[#081225] py-2 text-[10px] font-bold tracking-wider transition-colors border border-transparent hover:border-[#081225]">
                  READ MORE
                </button>
                <button className="w-full bg-[#081225] text-white hover:bg-[#c5a365] py-2 text-[10px] font-bold tracking-wider transition-colors">
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
