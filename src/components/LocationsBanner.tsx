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
      <div className="w-full bg-[#081225] py-2 flex justify-center text-[#c5a365] text-[11px] md:text-[13px] font-medium tracking-wider">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
          {indianCities.map((city, index) => (
            <React.Fragment key={city}>
              <span>{city}</span>
              {index < indianCities.length - 1 && <span className="opacity-50">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* International Locations Bar */}
      <div className="w-full bg-[#f8f6f0] py-2.5 flex justify-center text-gray-700 text-[10px] md:text-[12px] font-medium tracking-wider border-b border-gray-200">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4">
          {internationalLocations.map((location, index) => (
            <React.Fragment key={location}>
              <span>{location}</span>
              {index < internationalLocations.length - 1 && <span className="opacity-40">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
