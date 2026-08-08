"use client";

import { useState } from "react";
import { Check } from "lucide-react";

type DocStep = {
  key: string;
  label: string;
  accept: string;
  maxSizeMB: number;
};

const documentSteps: DocStep[] = [
  { key: "aadhar", label: "Aadhar Card", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "pan", label: "PAN Card", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "passport", label: "Passport", accept: ".pdf,.jpg,.jpeg,.png", maxSizeMB: 5 },
  { key: "cv", label: "CV / Resume", accept: ".pdf,.doc,.docx", maxSizeMB: 10 },
];

function validateFile(file: File, step: DocStep): string {
  const allowedExts = step.accept.split(",").map((ext) => ext.trim().toLowerCase());
  const fileExt = "." + (file.name.split(".").pop() ?? "").toLowerCase();

  if (!allowedExts.includes(fileExt)) {
    return `${step.label} must be one of: ${step.accept}`;
  }
  if (file.size > step.maxSizeMB * 1024 * 1024) {
    return `${step.label} must be smaller than ${step.maxSizeMB}MB.`;
  }
  return "";
}

export default function DocumentUploadStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [error, setError] = useState("");

  const current = documentSteps[activeStep];
  const isLastStep = activeStep === documentSteps.length - 1;
  const allDone = documentSteps.every((step) => files[step.key]);

  const goToStep = (idx: number) => {
    // Only completed steps or the current step can be revisited directly.
    if (idx <= activeStep) {
      setError("");
      setActiveStep(idx);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setFiles((prev) => ({ ...prev, [current.key]: null }));
      return;
    }

    const validationError = validateFile(file, current);
    if (validationError) {
      setError(validationError);
      e.target.value = "";
      setFiles((prev) => ({ ...prev, [current.key]: null }));
      return;
    }

    setError("");
    setFiles((prev) => ({ ...prev, [current.key]: file }));

    if (!isLastStep) {
      setActiveStep((step) => step + 1);
    }
  };

  const handleBack = () => {
    setError("");
    setActiveStep((step) => Math.max(0, step - 1));
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="text-gray-500 text-[10px] tracking-wider uppercase">Documents</label>

      {/* Stepper Indicator */}
      <div className="flex items-start">
        {documentSteps.map((step, idx) => (
          <div key={step.key} className="flex items-center flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => goToStep(idx)}
              disabled={idx > activeStep}
              className="flex flex-col items-center gap-1.5 shrink-0"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border transition-colors ${
                  files[step.key]
                    ? "bg-[#3fa2f6] border-[#3fa2f6] text-white"
                    : idx === activeStep
                    ? "border-[#c5a365] text-[#c5a365]"
                    : "border-white/15 text-gray-600"
                }`}
              >
                {files[step.key] ? <Check size={14} /> : idx + 1}
              </div>
              <span
                className={`text-[9px] uppercase tracking-wide text-center whitespace-nowrap ${
                  idx === activeStep ? "text-white" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </button>
            {idx < documentSteps.length - 1 && (
              <div
                className={`flex-1 h-px mx-2 mt-[-14px] ${
                  idx < activeStep ? "bg-[#3fa2f6]" : "bg-white/15"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Current Step Upload */}
      <div className="flex flex-col gap-2 border border-white/10 p-4">
        <span className="text-white text-[12px] font-semibold uppercase tracking-wide">
          Step {activeStep + 1} of {documentSteps.length}: Upload {current.label}
        </span>
        <input
          key={current.key}
          type="file"
          accept={current.accept}
          onChange={handleFileChange}
          className="w-full bg-white/5 border border-white/10 text-gray-400 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#285e8e] file:text-white file:text-[11px] file:font-bold file:uppercase file:tracking-wider file:cursor-pointer hover:file:bg-[#1e4a72] text-[12px] outline-none focus:border-[#c5a365]/50 transition-colors cursor-pointer"
        />
        {files[current.key] && !error && (
          <span className="text-[#3fa2f6] text-[11px]">Selected: {files[current.key]?.name}</span>
        )}
        {error && <span className="text-red-400 text-[11px]">{error}</span>}

        {activeStep > 0 && (
          <button
            type="button"
            onClick={handleBack}
            className="self-start text-gray-400 hover:text-[#c5a365] text-[11px] font-bold tracking-wider uppercase transition-colors mt-1"
          >
            &larr; Back to {documentSteps[activeStep - 1].label}
          </button>
        )}
      </div>

      {/* Completion Summary */}
      {allDone && (
        <div className="flex flex-col gap-2 border border-[#3fa2f6]/40 bg-[#3fa2f6]/5 p-4">
          <span className="text-[#3fa2f6] text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2">
            <Check size={14} /> All documents uploaded
          </span>
          <ul className="flex flex-col gap-1">
            {documentSteps.map((step) => (
              <li key={step.key} className="text-gray-400 text-[11px]">
                {step.label}: <span className="text-gray-300">{files[step.key]?.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
