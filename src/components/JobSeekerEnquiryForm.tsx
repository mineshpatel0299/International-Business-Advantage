"use client";

import { useState } from "react";
import DocumentUploadStepper, { type DocStep } from "@/components/DocumentUploadStepper";
import SignInPanel from "@/components/SignInPanel";
import {
  type FieldSpec,
  inputClass,
  FieldInput,
  FieldTextarea,
  SectionLabel,
  StepPill,
  CapsuleButton,
} from "@/components/EnquiryFormFields";

const contactFields: FieldSpec[] = [
  { label: "Mobile No", type: "tel" },
  { label: "Alternate Mobile No", type: "tel" },
  { label: "Landline", type: "tel" },
  { label: "Skype ID" },
  { label: "Google Meet ID" },
  { label: "Zoom ID" },
  { label: "Email ID", type: "email" },
  { label: "Location" },
];

const companyFields: FieldSpec[] = [
  { label: "Name of the Company Working At?" },
  { label: "Designation" },
  { label: "Office Phone Number", type: "tel" },
  { label: "Alternate Email ID (Optional)", type: "email" },
  { label: "Industry Type" },
  { label: "Products" },
  { label: "Territory / Countries Managed" },
];

const ctcFields: FieldSpec[] = [
  { label: "Annual CTC Support" },
  { label: "Fixed CTC" },
  { label: "Variable" },
  { label: "Perks" },
];

const reportingSubFields = ["Name", "Designation", "Company", "Location", "Contact Number", "Email ID"];

const referenceAccept = ".pdf,.doc,.docx,.jpg,.jpeg,.png";

const jobSeekerDocSteps: DocStep[] = [
  { key: "resume", label: "Resume", accept: ".pdf,.doc,.docx", maxSizeMB: 10 },
  { key: "ctcSupport", label: "CTC Support Document", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "salarySlips", label: "Latest 3 Months Salary Slips", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 10, multiple: true },
  { key: "contractAgreement", label: "Contract Agreement", accept: ".pdf", maxSizeMB: 5 },
  { key: "currentCompanyReferences", label: "4 Current Company References", accept: referenceAccept, maxSizeMB: 10, multiple: true },
  { key: "professionalReferences", label: "4 Professional References", accept: referenceAccept, maxSizeMB: 10, multiple: true },
  { key: "personalReferences", label: "4 Personal References", accept: referenceAccept, maxSizeMB: 10, multiple: true },
  { key: "panCard", label: "PAN Card", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "aadhaarCard", label: "Aadhaar Card", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "companyLogo", label: "Company Logo", accept: ".jpg,.jpeg,.png,.svg", maxSizeMB: 5, optional: true },
];

function ReportingGroup({ title }: { title: string }) {
  return (
    <div className="border border-white/10">
      <div className="px-4 py-3 text-white text-[12px] font-semibold uppercase tracking-wide border-b border-white/10">
        {title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {reportingSubFields.map((field) => (
          <FieldInput key={field} label={field} />
        ))}
      </div>
    </div>
  );
}

export default function JobSeekerEnquiryForm() {
  const [mode, setMode] = useState<"register" | "signin">("register");
  const [step, setStep] = useState<"personal" | "company" | "documents">("personal");

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Mode Tabs */}
      <div className="flex justify-center gap-2.5">
        {(["register", "signin"] as const).map((m) => (
          <CapsuleButton key={m} active={mode === m} onClick={() => setMode(m)}>
            {m === "register" ? "New Registration" : "Sign In"}
          </CapsuleButton>
        ))}
      </div>

      {mode === "signin" ? (
        <SignInPanel />
      ) : (
        <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">
          {/* Step Indicator */}
          <div className="flex justify-center gap-6">
            <StepPill
              n={1}
              label="Personal Details"
              active={step === "personal"}
              done={step === "company" || step === "documents"}
            />
            <StepPill
              n={2}
              label="Company Details"
              active={step === "company"}
              done={step === "documents"}
            />
            <StepPill n={3} label="Upload Documents" active={step === "documents"} done={false} />
          </div>

          {step === "personal" && (
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setStep("company");
              }}
            >
              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-[11px] tracking-wider uppercase">Photograph</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full bg-white/5 border border-white/10 text-gray-400 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#285e8e] file:text-white file:text-[11px] file:font-bold file:uppercase file:tracking-wider file:cursor-pointer hover:file:bg-[#1e4a72] text-[12px] outline-none focus:border-[#c5a365]/50 transition-colors cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldInput label="Name Of The Person" />
                <FieldInput label="DOB" type="date" />
              </div>

              <FieldTextarea label="Permanent Address" />
              <FieldTextarea label="Present Address" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactFields.map((field) => (
                  <FieldInput key={field.label} {...field} />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 mt-2 text-[12px] font-bold tracking-widest uppercase"
              >
                Next: Company Details
              </button>
            </form>
          )}

          {step === "company" && (
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setStep("documents");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {companyFields.map((field) => (
                  <FieldInput key={field.label} {...field} />
                ))}
              </div>
              <FieldTextarea label="Office Address" />

              <textarea
                placeholder="Message"
                rows={4}
                className={`${inputClass()} resize-none`}
              ></textarea>

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setStep("personal")}
                  className="flex-1 border border-white/15 text-gray-300 hover:border-[#c5a365]/50 hover:text-[#c5a365] py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 text-[12px] font-bold tracking-widest uppercase"
                >
                  Continue to Document Upload
                </button>
              </div>
            </form>
          )}

          {step === "documents" && (
            <form
              id="enquiry-form"
              className="grid grid-cols-1 gap-4 scroll-mt-24"
              onSubmit={(e) => e.preventDefault()}
            >
              <ReportingGroup title="Reporting Into" />
              <ReportingGroup title="Who All Report To You? Mention" />

              <SectionLabel>Compensation Details</SectionLabel>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {ctcFields.map((field) => (
                  <FieldInput key={field.label} {...field} />
                ))}
              </div>

              <DocumentUploadStepper steps={jobSeekerDocSteps} />

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setStep("company")}
                  className="flex-1 border border-white/15 text-gray-300 hover:border-[#c5a365]/50 hover:text-[#c5a365] py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 text-[12px] font-bold tracking-widest uppercase"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
