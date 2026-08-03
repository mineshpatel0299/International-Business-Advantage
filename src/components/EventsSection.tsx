import React from 'react';

export default function EventsSection() {
  const smallItems = [
    "CONFERENCE & FORUMS",
    "BUSINESS MEETS",
    "SPORTS EVENTS",
    "PRODUCT PROMOTIONS"
  ];

  return (
    <section className="w-full flex flex-col items-center pb-20">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-4">
        {/* Golden Border Container */}
        <div className="border border-[#ffd700] p-8 md:p-12 w-full bg-[#0a2543]">
          
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-widest text-center mb-10 uppercase">
            Business Events & Entertainment
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Left Large Item */}
            <div className="flex flex-col h-full">
              <div className="w-full flex-grow min-h-[250px] bg-[#cfd1d4] mb-3"></div>
              <h3 className="text-white text-center text-[12px] font-semibold tracking-wide">
                MUSIC CONCERTS & SHOWS
              </h3>
            </div>
            
            {/* Right Side 2x2 Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {smallItems.map((title, idx) => (
                <div key={idx} className="flex flex-col">
                  {/* Aspect ratio box to keep them consistent */}
                  <div className="w-full aspect-[16/9] bg-[#cfd1d4] mb-3"></div>
                  <h3 className="text-white text-center text-[10px] md:text-[11px] font-semibold tracking-wide">
                    {title}
                  </h3>
                </div>
              ))}
            </div>

          </div>
          
        </div>
      </div>

    </section>
  );
}
