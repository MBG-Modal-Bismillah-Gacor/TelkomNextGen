"use client";

import { Trophy, Award, Medal, Star } from "lucide-react";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Juara 1 LKS Nasional Web Technologies",
    student: "Farel Bramasta",
    major: "RPL",
    description: "Menjuarai Lomba Kompetensi Siswa (LKS) tingkat nasional bidang keahlian perancangan website premium.",
    tag: "LKS Nasional",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    title: "Juara 1 Indonesia Game Hackathon",
    student: "Team Stematel Devs",
    major: "PG",
    description: "Memenangkan kompetisi pembuatan game indie 48-jam bertema pelestarian lingkungan hidup tingkat nasional.",
    tag: "Hackathon",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    title: "Sertifikasi CCNA Associate Terbaik",
    student: "Salma Nabila",
    major: "TKJ",
    description: "Meraih nilai sempurna 1000/1000 dalam ujian sertifikasi global jaringan profesional Cisco Systems.",
    tag: "Cisco Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function WallOfFame() {
  return (
    <section id="wall-of-fame" className="bg-white py-28 px-4 sm:px-8 border-b border-[#E5E5EA]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-telkom-red/5 border border-telkom-red/10 px-4 py-1.5 rounded-full text-[10px] font-extrabold text-telkom-red uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            WALL OF FAME
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Prestasi Tanpa Batas <br />
            Siswa Stematel Purwokerto
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed font-body">
            Dedikasi tinggi, kreativitas digital, dan kompetensi mumpuni membawa siswa kami meraih puncak penghargaan nasional.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="bg-[#FAF9F6] border border-[#E5E5EA] rounded-[2rem] p-6 relative flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Image and Badge */}
                <div className="flex items-center gap-4">
                  <img
                    src={ach.image}
                    alt={ach.student}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-telkom-red/20"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-zinc-900 leading-none">
                      {ach.student}
                    </h4>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider font-mono">
                      Major: {ach.major}
                    </span>
                  </div>
                  <div className="ml-auto bg-telkom-red/5 text-telkom-red border border-telkom-red/15 text-[9px] font-black uppercase px-2.5 py-1 rounded-md font-mono select-none">
                    {ach.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-extrabold tracking-tight text-zinc-900 leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-body">
                    {ach.description}
                  </p>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="pt-6 border-t border-[#E5E5EA] mt-6 flex items-center justify-between">
                <span className="text-[9px] font-extrabold tracking-widest text-zinc-400 uppercase font-mono flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-telkom-red" />
                  National Award
                </span>
                <span className="text-[9px] font-bold text-zinc-300">
                  2026 Edition
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Centered Achievement Stats summary banner */}
        <div className="mt-14 bg-zinc-50 border border-zinc-200/60 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-telkom-red/5 flex items-center justify-center text-telkom-red">
              <Medal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-zinc-900">Total Penghargaan Nasional & Regional</h4>
              <p className="text-[11px] text-zinc-400 font-body">Siswa aktif yang meraih medali kejuaraan IT dalam 3 tahun terakhir.</p>
            </div>
          </div>
          <div className="text-2xl font-black text-telkom-red tracking-tight text-right sm:pr-4">
            180+ Piala Juara
          </div>
        </div>

      </div>
    </section>
  );
}
