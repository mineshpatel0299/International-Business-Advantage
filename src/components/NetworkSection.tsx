import React from 'react';
import { ArrowRight, Users, UserCog, Megaphone, Briefcase, Monitor, FileText, DollarSign, UserCheck } from 'lucide-react';

export default function NetworkSection() {
  const roles = [
    { title: "Managing Director", icon: <Users size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "Chief Executive Officer", icon: <UserCog size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "Chief Marketing Officer", icon: <Megaphone size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "Chief Business Officer", icon: <Briefcase size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "Chief Digital Officer", icon: <Monitor size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "Chief Information Officer", icon: <FileText size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "Chief Financial Officer", icon: <DollarSign size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> },
    { title: "Chief HR Officer", icon: <UserCheck size={32} className="text-[#c5a365] mb-4" strokeWidth={1.5} /> }
  ];

  return (
    <section className="w-full flex flex-col items-center py-24 bg-[#081225]">
      
      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] px-8 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-[#c5a365] text-xs font-light tracking-[0.2em] uppercase mb-4">
              Our Network
            </h3>
            <h2 className="text-white text-3xl lg:text-4xl font-light leading-tight">
              CXO Business Network Platform:<br />
              Connecting Global Leaders
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              Join a curated community of CXOs and business leaders across industries and geographies. Collaborate, share insights, and grow together.
            </p>
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white flex flex-col items-center text-center p-8 transition-transform hover:-translate-y-1 duration-300">
              {role.icon}
              <h3 className="text-[#081225] text-[15px] font-semibold mb-1">{role.title}</h3>
              <p className="text-gray-400 text-[10px] tracking-wider uppercase mb-8">Business Network</p>
              
              <button className="flex items-center gap-2 text-[#081225] text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#c5a365] transition-colors mt-auto">
                Membership Open <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
        
        {/* Bottom Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-3 px-8 py-3 border border-white/20 text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-[#081225] transition-all duration-300">
            View All Networks <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
