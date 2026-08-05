import React from 'react';

export default function EmployersSection() {
  const employers = Array.from({ length: 28 }); // Reduced to 28 for a cleaner 7x4 grid

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#081225]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">
            Trusted By
          </h3>
          <h2 className="text-white text-3xl lg:text-4xl font-light leading-tight">
            Top Employers
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a365] mt-6"></div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6">
          {employers.map((_, idx) => (
            <div key={idx} className="w-full aspect-[3/2] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group">
              {/* Logo Placeholder */}
              <div className="w-12 h-12 rounded-full bg-white/20 group-hover:bg-[#c5a365]/50 transition-colors"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
