import React from 'react';
import { Calendar } from 'lucide-react';

export default function EventsSection() {
  const smallItems = [
    { title: "CONFERENCE & FORUMS", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" },
    { title: "BUSINESS MEETS", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" },
    { title: "SPORTS EVENTS", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop" },
    { title: "PRODUCT PROMOTIONS", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" }
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#f8f6f0]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">
            Networking & Growth
          </h3>
          <h2 className="text-[#081225] text-3xl lg:text-4xl font-light leading-tight">
            Business Events & Entertainment
          </h2>
          <div className="w-16 h-0.5 bg-[#c5a365] mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Left Large Item */}
          <div className="relative group overflow-hidden bg-[#081225] h-[400px] lg:h-auto flex flex-col cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop" 
              alt="Music Concerts"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081225] via-transparent to-transparent"></div>
            
            <div className="relative z-10 mt-auto p-8 flex items-center justify-between">
              <div>
                <Calendar size={24} className="text-[#c5a365] mb-3" />
                <h3 className="text-white text-xl font-medium tracking-wide">
                  MUSIC CONCERTS & SHOWS
                </h3>
              </div>
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#c5a365] group-hover:border-[#c5a365] transition-colors">
                +
              </button>
            </div>
          </div>
          
          {/* Right Side 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {smallItems.map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden bg-[#081225] aspect-[4/3] flex flex-col cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081225] via-transparent to-transparent"></div>
                
                <div className="relative z-10 mt-auto p-6">
                  <h3 className="text-white text-[13px] font-semibold tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
