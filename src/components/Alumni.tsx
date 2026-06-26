"use client";

import { Sparkles, MessageSquare, Quote, Building2 } from "lucide-react";

const STATS = [
  { value: "3.200+", label: "Alumni Terdaftar" },
  { value: "94.6%", label: "Keterserapan Industri" },
  { value: "480+", label: "Mitra Perusahaan IT" },
  { value: "85+", label: "Universitas Dalam & Luar Negeri" }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ahmad Rayhan",
    role: "Senior Software Engineer di GoTo",
    batch: "Alumni RPL 2021",
    comment: "Kurikulum berbasis industri di SMK Telkom Purwokerto memberi saya lompatan karier luar biasa. Sebelum lulus pun saya sudah ditawari kerja remote.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    name: "Clara Amalia",
    role: "Network Architect di Telkom Indonesia",
    batch: "Alumni TKJ 2020",
    comment: "Praktik laboratorium Cisco CCNA dengan peralatan lengkap langsung membuat saya siap bekerja menghadapi infrastruktur telekomunikasi nasional.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

const CORPORATES = [
  "Telkom Indonesia", "Gojek", "Tokopedia", "Cisco", "LinkAja", "Huawei"
];

export default function Alumni() {
  return (
    <section id="alumni" className="bg-[#FAF9F6] py-28 px-4 sm:px-8 border-b border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-telkom-red/5 border border-telkom-red/10 px-4 py-1.5 rounded-full text-[10px] font-extrabold text-telkom-red uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            SEBARAN ALUMNI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Menembus Batas Industri <br />
            & Institusi Terbaik
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed font-body">
            Lulusan SMK Telkom Purwokerto tersebar di berbagai perusahaan teknologi papan atas Indonesia dan global, serta universitas terkemuka.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E5EA] rounded-3xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-black text-telkom-red tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-[#E5E5EA] rounded-[2rem] p-8 relative flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FFF1F2] z-0" />
              <div className="space-y-4 relative z-10">
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-body italic">
                  "{test.comment}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#F4F4F6]">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-telkom-red/10"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-900 leading-none">
                      {test.name}
                    </h4>
                    <span className="text-[10px] text-zinc-400 font-bold font-mono uppercase tracking-wider block mt-1">
                      {test.role} • {test.batch}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Partners marquee-like showcase */}
        <div className="border-t border-[#E5E5EA] pt-12 text-center">
          <span className="text-[10px] font-black text-zinc-400 tracking-[0.25em] uppercase mb-8 block font-mono">
            Partner Rekrutmen & Penyaluran Industri
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50">
            {CORPORATES.map((corp, idx) => (
              <span
                key={idx}
                className="text-sm sm:text-lg font-black text-zinc-800 tracking-wider font-mono hover:opacity-100 transition-opacity"
              >
                {corp}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
