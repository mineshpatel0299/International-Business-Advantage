import React from 'react';

export default function NetworkSection() {
  const roles = [
    "MANAGING DIRECTOR",
    "CHIEF EXECUTIVE OFFICER",
    "CHIEF MARKETING OFFICER",
    "CHIEF BUSINESS OFFICER",
    "CHIEF DIGITAL OFFICER",
    "CHIEF INFORMATION OFFICER",
    "CHIEF FINANCIAL OFFICER",
    "CHIEF HR OFFICER"
  ];

  return (
    <section className="w-full flex flex-col items-center pb-20">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1200px] mt-10 px-4">
        {/* Golden Border Container */}
        <div className="border border-[#ffd700] p-8 md:p-12 w-full bg-[#071326]">
          
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-widest text-center mb-10">
            CXO BUSINESS NETWORK PLATFORM: CONNECTING GLOBAL
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="flex flex-col">
                {/* White Placeholder Image */}
                <div className="w-full aspect-[5/4] bg-white mb-3"></div>
                
                {/* Role Text */}
                <div className="text-center mb-3">
                  <h3 className="text-white text-[13px] font-semibold tracking-wide">{role}</h3>
                  <p className="text-gray-400 text-[10px] tracking-wider mt-0.5">BUSINESS NETWORK</p>
                </div>
                
                {/* Membership Button */}
                <button className="w-full bg-[#3b82f6] hover:bg-blue-600 transition text-white py-2 text-[12px] font-bold tracking-[0.3em]">
                  MEMBERSHIP OPEN
                </button>
              </div>
            ))}
          </div>
          
        </div>
      </div>

    </section>
  );
}
