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
  // Make sure we only replace the specific wrapper div
  // We can look for {/* Main Content Area */} then replace the next line.
  
  // Or just replace the first `className="w-full"` or `className="w-full z-10"` after <section
  
  let lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Main Content Area')) {
      let nextLine = lines[i+1];
      if (nextLine.includes('className="w-full"')) {
        lines[i+1] = nextLine.replace('className="w-full"', 'className="w-full px-4 lg:px-8"');
      } else if (nextLine.includes('className="w-full z-10"')) {
        lines[i+1] = nextLine.replace('className="w-full z-10"', 'className="w-full px-4 lg:px-8 z-10"');
      }
    }
  }
  
  let updated = lines.join('\n');
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Updated ' + file);
  }
});
