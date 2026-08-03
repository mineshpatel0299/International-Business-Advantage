import React from 'react';

export default function EmployersSection() {
  const employers = Array.from({ length: 42 });

  return (
    <section className="w-full flex flex-col items-center pb-20">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1200px] px-4">
        {/* Golden Border Container */}
        <div className="border border-[#ffd700] p-8 md:p-12 w-full bg-[#071326]">
          
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-widest text-center mb-10 uppercase">
            Top Employers
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-6">
            {employers.map((_, idx) => (
              <div key={idx} className="w-full aspect-[2/1] bg-[#cfd1d4]">
                {/* Logo Placeholder */}
              </div>
            ))}
          </div>
          
        </div>
      </div>

    </section>
  );
}
