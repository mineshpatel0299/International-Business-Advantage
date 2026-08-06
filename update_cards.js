const fs = require('fs');
const files = [
  'src/components/NetworkSection.tsx',
  'src/components/EventsSection.tsx',
  'src/components/PartnershipsSection.tsx',
  'src/components/GlobalSearchSection.tsx',
  'src/components/AcademySection.tsx',
  'src/components/AdvisorySection.tsx'
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = content.replace(/className="flex flex-col h-full bg-\[#0E1B2D\]"/g, 'className="flex flex-col h-full bg-[#0a2543]"');
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Updated ' + file);
  }
});
