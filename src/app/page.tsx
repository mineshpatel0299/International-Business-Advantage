import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
    <main className="min-h-screen bg-[#061224]">
      <Navbar />
      <Hero />
      <NetworkSection />
      <GlobalSearchSection />
      <AdvisorySection />
      <EventsSection />
      <PartnershipsSection />
      <AcademySection />
      <EmployersSection />
      <Footer />
    </main>
  );
}
