const fs = require('fs');

const files = [
  'src/components/EventsSection.tsx',
  'src/components/GlobalSearchSection.tsx',
  'src/components/NetworkSection.tsx',
  'src/components/PartnershipsSection.tsx',
  'src/components/EmployersSection.tsx',
  'src/components/AcademySection.tsx',
  'src/components/AdvisorySection.tsx',
  'src/components/AboutSection.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Remove px-8 lg:px-24 from the wrapper div
  let updated = content.replace(/className="w-full px-8 lg:px-24( z-10)?"/g, 'className="w-full$1"');
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Updated ' + file);
  }
});
