import React from 'react';

export default function GlobalSearchSection() {
  const roles = [
    "MD, DIRECTORS, CEO",
    "CXO, VP, GM",
    "DGM-MANAGERS",
    "INTERNS"
  ];

  return (
    <section className="w-full flex flex-col items-center pb-20">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-4">
        {/* Golden Border Container */}
        <div className="border border-[#ffd700] p-8 md:p-12 w-full bg-[#0a2543]">
          
          <h2 className="text-white text-2xl md:text-3xl font-medium tracking-widest text-center mb-10 uppercase">
            Global Search Company
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="flex flex-col">
                {/* White Placeholder Image */}
                <div className="w-full aspect-square bg-white mb-3"></div>
                
                {/* Role Text */}
                <div className="text-center mb-4">
                  <h3 className="text-white text-[12px] font-semibold tracking-wide">{role}</h3>
                </div>
                
                {/* Buttons Container */}
                <div className="flex w-full mt-auto">
                  <button className="flex-1 bg-[#1e4a86] hover:bg-[#1a3d6b] transition text-white py-2 px-1 text-[10px] font-bold tracking-wider text-center leading-tight">
                    JOB SEEKER<br />APPLY HERE
                  </button>
                  <button className="flex-1 bg-[#3b82f6] hover:bg-blue-600 transition text-white py-2 px-1 text-[10px] font-bold tracking-wider text-center leading-tight">
                    EMPLOYER<br />APPLY HERE
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
