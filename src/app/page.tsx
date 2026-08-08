import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LocationsBanner from "@/components/LocationsBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import NetworkSection from "@/components/NetworkSection";
import GlobalSearchSection from "@/components/GlobalSearchSection";
import AdvisorySection from "@/components/AdvisorySection";
import EventsSection from "@/components/EventsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import AcademySection from "@/components/AcademySection";
import EmployersSection from "@/components/EmployersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <Navbar />
      <Hero />
      <LocationsBanner />
      <AboutSection />
      <ServicesSection />
      {/* <NetworkSection /> */}
      {/* <GlobalSearchSection /> */}
      {/* <AdvisorySection /> */}
      {/* <EventsSection /> */}
      {/* <PartnershipsSection /> */}
      {/* <AcademySection /> */}
      <EmployersSection />
      <Footer />
    </main>
  );
}
