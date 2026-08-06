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
  // Replace the border and color
  // We use #ffd700 for a bright golden yellow, and border-2 for thickness
  let updated = content.replace(/border border-\[#c5a365\]/g, 'border-2 border-[#eab308]');
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Updated ' + file);
  }
});
