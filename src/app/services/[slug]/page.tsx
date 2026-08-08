import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import NetworkSection from "@/components/NetworkSection";
import GlobalSearchSection from "@/components/GlobalSearchSection";
import AdvisorySection from "@/components/AdvisorySection";
import EventsSection from "@/components/EventsSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import AcademySection from "@/components/AcademySection";

export const servicePages = {
  "cxo-business-network-platform": {
    title: "International Business Advantage",
    subtitle: "A CXO BUSINESS NETWORK PLATFORM",
    image: "/ggg.png",
    Section: NetworkSection,
  },
  "global-search-company": {
    title: "Global Search Company",
    subtitle: "FINDING TOP TIER TALENT",
    image:
      "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop",
    Section: GlobalSearchSection,
  },
  "board-advisory-consulting": {
    title: "Board Advisory & Consulting",
    subtitle: "CORPORATE GOVERNANCE ADVISORY",
    image:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop",
    Section: AdvisorySection,
  },
  "business-events-entertainment": {
    title: "Business Events & Entertainment",
    subtitle: "CONNECTING THROUGH EXPERIENCES",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop",
    Section: EventsSection,
  },
  "business-partnerships-collaborations": {
    title: "Business Partnerships & Collaborations",
    subtitle: "GROWING TOGETHER",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    Section: PartnershipsSection,
  },
  "vk-business-academy": {
    title: "VK Business Academy",
    subtitle: "SHAPING MASTER EDUCATORS",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    Section: AcademySection,
  },
} as const;

export type ServiceSlug = keyof typeof servicePages;

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = servicePages[slug as ServiceSlug];

  if (!page) {
    notFound();
  }

  const { title, subtitle, image, Section } = page;

  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <Navbar />
      <PageHero title={title} subtitle={subtitle} image={image} />
      <Section />
      <Footer />
    </main>
  );
}
