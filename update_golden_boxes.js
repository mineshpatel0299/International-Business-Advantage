const fs = require('fs');
const files = [
  'src/components/GlobalSearchSection.tsx',
  'src/components/AdvisorySection.tsx',
  'src/components/EventsSection.tsx',
  'src/components/PartnershipsSection.tsx',
  'src/components/AcademySection.tsx',
  'src/components/EmployersSection.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content.replace(/className="border border-\[#c5a365\] p-8 md:p-12 w-full"/g, 'className="border border-[#c5a365] bg-[#0a2543] p-8 md:p-12 w-full"');
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Updated ' + file);
  }
});
