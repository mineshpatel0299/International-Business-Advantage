import React from 'react';

export default function LocationsBanner() {
  const indianCities = [
    "Delhi", "Gurugram", "Chandigarh", "Ahmedabad", "Mumbai", 
    "Pune", "Goa", "Bangalore", "Hyderabad", "Chennai", "Kolkata"
  ];
  
  const internationalLocations = [
    "New York", "California", "Torronto", "United Kingdom", "France", 
    "Germany", "Italy", "Dubai", "Singapore", "Malaysia", "Philippines", 
    "Indonesia", "Australia", "New Zealand"
  ];

  return (
    <div className="w-full">
      {/* Indian Cities Bar */}
      <div className="w-full bg-[#cc0000] py-1.5 flex justify-center text-white text-[11px] font-semibold tracking-wide">
        <div className="flex flex-wrap justify-center gap-1.5 px-4">
          {indianCities.map((city, index) => (
            <React.Fragment key={city}>
              <span>{city}</span>
              {index < indianCities.length - 1 && <span className="opacity-80">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* International Locations Bar */}
      <div className="w-full bg-[#0a3875] py-1.5 flex justify-center text-white text-[11px] font-semibold tracking-wide border-b border-gray-700">
        <div className="flex flex-wrap justify-center gap-1.5 px-4">
          {internationalLocations.map((location, index) => (
            <React.Fragment key={location}>
              <span>{location}</span>
              {index < internationalLocations.length - 1 && <span className="opacity-80">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
