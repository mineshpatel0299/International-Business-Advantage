import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobSeekerEnquiryForm from "@/components/JobSeekerEnquiryForm";

export default function JobSeekerEnquiryPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <Navbar />

      <section className="w-full flex flex-col items-center py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0E1B2D]">
        <div className="w-full px-4 lg:px-8">
          <div className="border-2 border-[#eab308] bg-[#0a2543] p-5 sm:p-8 md:p-12 w-full">

            {/* Header Area */}
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-light tracking-wide uppercase">
                Job Seeker Enquiry Form
              </h2>
              <p className="text-gray-400 text-[13px] leading-relaxed mt-4 max-w-xl mx-auto">
                Register your profile and our team will connect you with the right
                opportunities.
              </p>
            </div>

            <JobSeekerEnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
