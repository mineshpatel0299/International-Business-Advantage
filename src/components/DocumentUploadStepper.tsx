"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export type DocStep = {
  key: string;
  label: string;
  accept: string;
  maxSizeMB: number;
  multiple?: boolean;
  optional?: boolean;
};

const defaultSteps: DocStep[] = [
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

type DocumentUploadStepperProps = {
  steps?: DocStep[];
};

export default function DocumentUploadStepper({ steps = defaultSteps }: DocumentUploadStepperProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [files, setFiles] = useState<Record<string, File[] | null>>({});
  const [error, setError] = useState("");

  const current = steps[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const hasFile = (key: string) => Boolean(files[key]?.length);
  const allDone = steps.filter((step) => !step.optional).every((step) => hasFile(step.key));

  const goToStep = (idx: number) => {
    // Only completed steps or the current step can be revisited directly.
    if (idx <= activeStep) {
      setError("");
      setActiveStep(idx);
    }
  };

  const advance = () => {
    if (!isLastStep) {
      setActiveStep((step) => step + 1);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList || fileList.length === 0) {
      setFiles((prev) => ({ ...prev, [current.key]: null }));
      return;
    }

    const selected = Array.from(fileList);
    for (const file of selected) {
      const validationError = validateFile(file, current);
      if (validationError) {
        setError(validationError);
        e.target.value = "";
        setFiles((prev) => ({ ...prev, [current.key]: null }));
        return;
      }
    }

    setError("");
    setFiles((prev) => ({ ...prev, [current.key]: selected }));
    advance();
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
        {steps.map((step, idx) => (
          <div key={step.key} className="flex items-center flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => goToStep(idx)}
              disabled={idx > activeStep}
              className="flex flex-col items-center gap-1.5 shrink-0"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border transition-colors ${
                  hasFile(step.key)
                    ? "bg-[#3fa2f6] border-[#3fa2f6] text-white"
                    : idx === activeStep
                    ? "border-[#c5a365] text-[#c5a365]"
                    : "border-white/15 text-gray-600"
                }`}
              >
                {hasFile(step.key) ? <Check size={14} /> : idx + 1}
              </div>
              <span
                title={`Upload ${step.label}`}
                className={`text-[9px] uppercase tracking-wide text-center max-w-[84px] truncate ${
                  idx === activeStep ? "text-white" : "text-gray-500"
                }`}
              >
                Upload {step.label}
              </span>
            </button>
            {idx < steps.length - 1 && (
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
          Step {activeStep + 1} of {steps.length}: Upload {current.label}
          {current.optional && <span className="text-gray-500 normal-case"> (Optional)</span>}
        </span>
        <input
          key={current.key}
          type="file"
          accept={current.accept}
          multiple={current.multiple}
          onChange={handleFileChange}
          className="w-full bg-white/5 border border-white/10 text-gray-400 file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg-[#285e8e] file:text-white file:text-[11px] file:font-bold file:uppercase file:tracking-wider file:cursor-pointer hover:file:bg-[#1e4a72] text-[12px] outline-none focus:border-[#c5a365]/50 transition-colors cursor-pointer"
        />
        {hasFile(current.key) && !error && (
          <span className="text-[#3fa2f6] text-[11px]">
            Selected: {files[current.key]?.map((file) => file.name).join(", ")}
          </span>
        )}
        {error && <span className="text-red-400 text-[11px]">{error}</span>}

        <div className="flex items-center gap-4 mt-1">
          {activeStep > 0 && (
            <button
              type="button"
              onClick={handleBack}
              className="text-gray-400 hover:text-[#c5a365] text-[11px] font-bold tracking-wider uppercase transition-colors"
            >
              &larr; Back to {steps[activeStep - 1].label}
            </button>
          )}
          {current.optional && !hasFile(current.key) && !isLastStep && (
            <button
              type="button"
              onClick={advance}
              className="text-gray-400 hover:text-[#c5a365] text-[11px] font-bold tracking-wider uppercase transition-colors"
            >
              Skip &rarr;
            </button>
          )}
        </div>
      </div>

      {/* Completion Summary */}
      {allDone && (
        <div className="flex flex-col gap-2 border border-[#3fa2f6]/40 bg-[#3fa2f6]/5 p-4">
          <span className="text-[#3fa2f6] text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2">
            <Check size={14} /> All documents uploaded
          </span>
          <ul className="flex flex-col gap-1">
            {steps.map((step) => (
              <li key={step.key} className="text-gray-400 text-[11px]">
                {step.label}:{" "}
                <span className="text-gray-300">
                  {files[step.key]?.map((file) => file.name).join(", ") || "Skipped"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
