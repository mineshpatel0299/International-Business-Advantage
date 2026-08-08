"use client";

import { useState } from "react";
import DocumentUploadStepper, { type DocStep } from "@/components/DocumentUploadStepper";
import SignInPanel from "@/components/SignInPanel";
import {
  type FieldSpec,
  inputClass,
  FieldInput,
  FieldTextarea,
  StepPill,
  CapsuleButton,
} from "@/components/EnquiryFormFields";

const registrantTypes = ["Advisors", "Consultants", "Partners", "Company Registration", "Employers"] as const;
type RegistrantType = (typeof registrantTypes)[number];

const personFields: FieldSpec[] = [
  { label: "Landline", type: "tel" },
  { label: "Email ID", type: "email" },
  { label: "Skype ID" },
  { label: "Google Meet ID" },
  { label: "Zoom ID" },
  { label: "Location" },
];

const companyRegistrationFields: FieldSpec[] = [
  { label: "Company Name" },
  { label: "Office Phone Number", type: "tel" },
  { label: "Alternate Email ID (Optional)", type: "email" },
  { label: "Industry Type" },
  { label: "Products" },
  { label: "Countries Exporting In" },
];

const employerDocSteps: DocStep[] = [
  { key: "panCard", label: "", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "aadhaarCard", label: "", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "gstCertificate", label: "", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "contractAgreement", label: "", accept: ".pdf", maxSizeMB: 5 },
  { key: "jobDescription", label: "", accept: ".pdf,.doc,.docx", maxSizeMB: 5 },
  { key: "companyLogo", label: "", accept: ".jpg,.jpeg,.png,.svg", maxSizeMB: 5 },
  { key: "otherDocuments", label: "", accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png", maxSizeMB: 10, multiple: true, optional: true },
];


export default function EmployerEnquiryForm() {
  const [registrantType, setRegistrantType] = useState<RegistrantType>("Employers");
  const [mode, setMode] = useState<"register" | "signin">("register");
  const [step, setStep] = useState<"details" | "documents">("details");

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Registrant Type Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {registrantTypes.map((type) => (
          <CapsuleButton key={type} active={false} onClick={() => setRegistrantType(type)}>
            {type}
          </CapsuleButton>
        ))}
      </div>

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
              label="Company & Person Details"
              active={step === "details"}
              done={step === "documents"}
            />
            <StepPill n={2} label="Upload Documents" active={step === "documents"} done={false} />
          </div>

          {step === "details" && (
            <form
              className="grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setStep("documents");
              }}
            >
              <FieldInput label="Name Of The Company" />
              <FieldTextarea label="Company HQ Address" />
              <FieldTextarea label="Current Office Address" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {companyRegistrationFields.map((field) => (
                  <FieldInput key={field.label} {...field} />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldInput label="Name Of The Person" />
                <FieldInput label="Designation" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personFields.map((field) => (
                  <FieldInput key={field.label} {...field} />
                ))}
              </div>

              <textarea
                placeholder="Message"
                rows={4}
                className={`${inputClass()} resize-none`}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 mt-2 text-[12px] font-bold tracking-widest uppercase"
              >
                Continue to Document Upload
              </button>
            </form>
          )}

          {step === "documents" && (
            <form
              id="enquiry-form"
              className="grid grid-cols-1 gap-4 scroll-mt-24"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="hidden" name="registrantType" value={registrantType} />

              <DocumentUploadStepper steps={employerDocSteps} />

              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="flex-1 border border-white/15 text-gray-300 hover:border-[#c5a365]/50 hover:text-[#c5a365] py-3.5 text-[12px] font-bold tracking-widest uppercase transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 text-[12px] font-bold tracking-widest uppercase"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
