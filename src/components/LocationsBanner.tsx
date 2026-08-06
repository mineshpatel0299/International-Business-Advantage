import React from 'react';

export default function LocationsBanner() {
  const indianCities = [
    "Delhi", "Gurugram", "Chandigarh", "Ahmedabad", "Mumbai",
    "Pune", "Goa", "Bangalore", "Hyderabad", "Chennai", "Kolkata"
  ];

  const internationalLocations = [
    "New York", "California", "Toronto", "United Kingdom", "France",
    "Germany", "Italy", "Dubai", "Singapore", "Malaysia", "Philippines",
    "Indonesia", "Australia", "New Zealand"
  ];

  return (
    <div className="w-full">
      {/* Indian Cities Bar */}
      <div className="w-full bg-[#8b0000] py-2 overflow-hidden text-white text-[11px] md:text-[13px] font-medium tracking-wider relative group flex">
        <div className="flex w-max animate-marquee-right gap-2 md:gap-3 px-2 group-hover:[animation-play-state:paused]">
          {[...indianCities, ...indianCities, ...indianCities, ...indianCities].map((city, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-nowrap">{city}</span>
              <span className="opacity-50">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* International Locations Bar */}
      <div className="w-full bg-[#0E1B2D] py-2.5 overflow-hidden text-white text-[10px] md:text-[12px] font-medium tracking-wider relative group flex">
        <div className="flex w-max animate-marquee-left gap-2 md:gap-3 px-2 group-hover:[animation-play-state:paused]">
          {[...internationalLocations, ...internationalLocations, ...internationalLocations, ...internationalLocations].map((location, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-nowrap">{location}</span>
              <span className="opacity-40">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
