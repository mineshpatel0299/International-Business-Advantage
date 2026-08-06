import React from 'react';

export default function EmployersSection() {
  const employers = Array.from({ length: 42 }); // 7 columns x 6 rows

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#0E1B2D]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Golden Border Box */}
        <div className="border border-[#c5a365] bg-[#0a2543] p-8 md:p-12 w-full">
          
          {/* Header Area */}
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
              Top Employers
            </h2>
          </div>

          {/* Grid Area */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6">
            {employers.map((_, idx) => (
              <div key={idx} className="w-full aspect-[5/2] bg-[#dcdcdc] hover:opacity-80 transition-opacity cursor-pointer">
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
