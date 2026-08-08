"use client";

import React from "react";
import DocumentUploadStepper from "@/components/DocumentUploadStepper";

type EnquiryFormProps = {
  serviceName: string;
};

export default function EnquiryForm({ serviceName }: EnquiryFormProps) {
  return (
    <form
      id="enquiry-form"
      className="grid grid-cols-1 gap-4 scroll-mt-24"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="hidden" name="service" value={serviceName} />

      <div className="text-center mb-2">
        <span className="text-[#c5a365] text-[11px] font-semibold tracking-[0.2em] uppercase">
          Enquiring For: {serviceName}
        </span>
      </div>

      {/* Name row: Salutation + Name + Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          defaultValue="Mr."
          className="w-full bg-white border border-white/10 text-black px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
        >
          <option value="Mr." className="bg-[#0a2543] text-white">Mr.</option>
          <option value="Mrs." className="bg-[#0a2543] text-white">Mrs.</option>
          <option value="Ms." className="bg-[#0a2543] text-white">Ms.</option>
        </select>
        <input
          type="text"
          placeholder="Name"
          className="sm:col-span-1 w-full bg-white border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
        />
        <input
          type="tel"
          placeholder="Mobile"
          className="w-full bg-white border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        className="w-full bg-white border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Current Location"
          className="w-full bg-white border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
        />
        <input
          type="text"
          placeholder="Your Current Company"
          className="w-full bg-white border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
        />
      </div>

      <input
        type="text"
        placeholder="Your Designation"
        className="w-full bg-white border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors"
      />

      <textarea
        placeholder="Message"
        rows={4}
        className="w-full bg-white border border-white/10 text-white placeholder:text-gray-600 px-4 py-3 text-[13px] outline-none resize-none focus:border-[#c5a365]/50 transition-colors"
      ></textarea>

      <DocumentUploadStepper />

      <button
        type="submit"
        className="w-full bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 mt-2 text-[12px] font-bold tracking-widest uppercase"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
