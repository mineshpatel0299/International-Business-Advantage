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
  let updated = content.replace(/max-w-\[1400px\] /g, '');
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log('Updated ' + file);
  }
});

const heroFile = 'src/components/Hero.tsx';
let heroContent = fs.readFileSync(heroFile, 'utf8');
heroContent = heroContent.replace(/max-w-\[1400px\] mx-auto /g, 'w-full ');
fs.writeFileSync(heroFile, heroContent);
console.log('Updated Hero.tsx');

const footerFile = 'src/components/Footer.tsx';
let footerContent = fs.readFileSync(footerFile, 'utf8');
footerContent = footerContent.replace(/max-w-\[1400px\] mx-auto /g, 'w-full ');
fs.writeFileSync(footerFile, footerContent);
console.log('Updated Footer.tsx');
