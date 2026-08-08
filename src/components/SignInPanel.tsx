"use client";

import { inputClass } from "@/components/EnquiryFormFields";

export default function SignInPanel() {
  return (
    <form
      className="flex flex-col gap-4 max-w-md w-full mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="text" placeholder="User ID (DOB / Mobile / Email ID)" className={inputClass()} />
      <input type="password" placeholder="Password / OTP" className={inputClass()} />
      <input type="password" placeholder="Confirm Password" className={inputClass()} />

      <div className="flex items-center gap-3 text-gray-500 text-[10px] uppercase tracking-wider">
        <div className="flex-1 h-px bg-white/10" />
        or
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <div className="flex gap-2">
        <input type="text" placeholder="OTP on Mobile / Email" className={`flex-1 ${inputClass()}`} />
        <button
          type="button"
          className="px-4 bg-[#285e8e] hover:bg-[#1e4a72] text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
        >
          Send OTP
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-[#c5a365] hover:bg-[#b09055] transition-colors text-[#0E1B2D] py-3.5 mt-2 text-[12px] font-bold tracking-widest uppercase"
      >
        Sign In
      </button>
    </form>
  );
}
