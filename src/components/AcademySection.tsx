import React from 'react';

export default function AcademySection() {
  const items = [
    "BOARD COACHING", "CXO COACHING", "YOUNG LEADERS", "EXECUTIVE COACHING", "COACHING THE TRAINERS",
    "YOU ARE A BRAND", "SELL LIKE A CHAMPION", "POWER SELLING", "IMPACT PRESENTATIONS", "CUSTOMER FIRST",
    "INFLUENCING OTHERS", "DECISION MAKING", "NEGOTIATION TECHNIQUES", "BUSINESS ETIQUETTES", "MANAGING COMMUNICATION"
  ];

  return (
    <section className="w-full flex flex-col items-center pb-20">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1200px] px-4">
        {/* Golden Border Container */}
        <div className="border border-[#ffd700] p-8 md:p-12 w-full bg-[#071326]">
          
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-widest text-center mb-10 uppercase">
            VK Business Academy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {items.map((title, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Gray Placeholder Image */}
                <div className="w-full aspect-[5/4] bg-[#cfd1d4] mb-3"></div>
                
                {/* Role Text */}
                <div className="text-center mb-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-white text-[11px] lg:text-[12px] font-semibold tracking-wide leading-snug uppercase">
                    {title}
                  </h3>
                </div>
                
                {/* Buttons Container */}
                <div className="flex w-full mt-auto">
                  <button className="flex-1 bg-[#1e4a86] hover:bg-[#1a3d6b] transition text-white py-2 px-1 text-[9px] font-bold tracking-wider text-center">
                    READ MORE
                  </button>
                  <button className="flex-1 bg-[#3b82f6] hover:bg-blue-600 transition text-white py-2 px-1 text-[9px] font-bold tracking-wider text-center">
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
