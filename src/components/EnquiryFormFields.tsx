import React from "react";

export type FieldSpec = { label: string; type?: string };

export function inputClass() {
  return "w-full bg-white border border-white/10 text-black placeholder:text-gray-500 px-4 py-3 text-[13px] outline-none focus:border-[#c5a365]/50 transition-colors";
}

export function FieldInput({ label, type = "text" }: FieldSpec) {
  return <input type={type} placeholder={label} className={inputClass()} />;
}

export function FieldTextarea({ label }: { label: string }) {
  return <textarea placeholder={label} rows={2} className={`${inputClass()} resize-none`}></textarea>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#c5a365] text-[11px] font-semibold tracking-[0.2em] uppercase block mb-1 mt-2">
      {children}
    </span>
  );
}

export function StepPill({
  n,
  label,
  active,
  done,
}: {
  n: number;
  label: string;
  active: boolean;
  done: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${
          done
            ? "bg-[#3fa2f6] border-[#3fa2f6] text-white"
            : active
            ? "border-[#c5a365] text-[#c5a365]"
            : "border-white/15 text-gray-600"
        }`}
      >
        {n}
      </div>
      <span className={`text-[11px] uppercase tracking-wide ${active ? "text-white" : "text-gray-500"}`}>
        {label}
      </span>
    </div>
  );
}

export function CapsuleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase border transition-colors ${
        active
          ? "bg-[#c5a365] border-[#c5a365] text-[#0E1B2D]"
          : "bg-transparent border-white/15 text-gray-300 hover:border-[#c5a365]/60 hover:text-[#c5a365]"
      }`}
    >
      {children}
    </button>
  );
}
