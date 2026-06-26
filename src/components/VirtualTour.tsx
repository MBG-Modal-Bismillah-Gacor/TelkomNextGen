"use client";

import { useState } from "react";
import { Eye, Info, Check, MapPin } from "lucide-react";

const HOTSPOTS = [
  {
    id: 1,
    name: "Software & AI Lab",
    description: "Ruang lab pemrograman canggih dengan spesifikasi Intel Core i9 & iMac untuk riset web, mobile apps, dan AI.",
    top: "35%",
    left: "28%"
  },
  {
    id: 2,
    name: "Cisco Networking Lab",
    description: "Fasilitas perakitan server, konfigurasi router Cisco Catalyst, serta latihan fiber splicing FTTH.",
    top: "55%",
    left: "52%"
  },
  {
    id: 3,
    name: "Smart Classroom",
    description: "Kelas interaktif modern yang dilengkapi dengan smart board digital, proyektor nirkabel, dan perangkat AC IoT.",
    top: "28%",
    left: "70%"
  },
  {
    id: 4,
    name: "Creative Co-Working Space",
    description: "Area kolaborasi terbuka siswa untuk inkubator startup, mentoring, presentasi proyek, dan brainstorming.",
    top: "72%",
    left: "22%"
  }
];

export default function VirtualTour() {
  const [activeSpot, setActiveSpot] = useState<number | null>(1);

  return (
    <section id="virtual-tour" className="bg-white py-28 px-4 sm:px-8 border-b border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-telkom-red/5 border border-telkom-red/10 px-4 py-1.5 rounded-full text-[10px] font-extrabold text-telkom-red uppercase tracking-widest">
            <Eye className="w-3.5 h-3.5" />
            VIRTUAL CAMPUS TOUR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Eksplorasi Fasilitas <br />
            Secara Interaktif
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed font-body">
            Rasakan atmosfer belajar premium di lingkungan kampus digital SMK Telkom Purwokerto langsung dari perangkat Anda.
          </p>
        </div>

        {/* 360 Tour Simulated Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left panel: simulated viewer */}
          <div className="lg:col-span-8 relative aspect-video w-full rounded-[2.5rem] overflow-hidden border border-[#E5E5EA] bg-zinc-900 shadow-xl">
            {/* Background image representing campus */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=675&q=80"
              alt="SMK Telkom Campus Virtual Viewer"
              className="w-full h-full object-cover opacity-75 select-none"
            />
            
            {/* Overlay indicators */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Hotspots Render */}
            {HOTSPOTS.map((spot) => {
              const isActive = activeSpot === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveSpot(spot.id)}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                >
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    {/* Ring Pulse */}
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isActive ? "bg-telkom-red" : "bg-white"
                    }`} />
                    {/* Inner Core */}
                    <span className={`relative inline-flex rounded-full h-4.5 w-4.5 items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "bg-telkom-red text-white" : "bg-white text-zinc-800"
                    }`}>
                      <MapPin className="w-2.5 h-2.5" />
                    </span>
                  </span>
                </button>
              );
            })}

            {/* Simulated navigation banner on bottom */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-[#E5E5EA] px-5 py-3 rounded-2xl flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-800 font-mono">
                  Live View // Stematel 360°
                </span>
              </div>
              <a
                href="https://virtualtour.smktelkom-pwt.sch.id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-telkom-red hover:bg-[#D11018] text-white px-4 py-1.5 rounded-lg text-[9px] font-extrabold uppercase tracking-widest transition-all"
              >
                Buka Full 360°
              </a>
            </div>

          </div>

          {/* Right panel: Information card */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-[10px] font-black text-zinc-400 tracking-[0.25em] uppercase font-mono block">
              Detail Fasilitas Terpilih
            </span>

            {HOTSPOTS.map((spot) => {
              const isActive = activeSpot === spot.id;
              return (
                <div
                  key={spot.id}
                  onClick={() => setActiveSpot(spot.id)}
                  className={`border rounded-2xl p-4.5 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#FFF1F2] border-telkom-red/35 shadow-md translate-x-1"
                      : "bg-[#FAF9F6] border-[#E5E5EA] hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-6.5 h-6.5 rounded-lg flex items-center justify-center text-xs font-bold font-mono ${
                      isActive ? "bg-telkom-red text-white" : "bg-zinc-200 text-zinc-600"
                    }`}>
                      {spot.id}
                    </div>
                    <h3 className="text-sm font-extrabold text-zinc-900">
                      {spot.name}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed font-body ml-9.5">
                    {spot.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
