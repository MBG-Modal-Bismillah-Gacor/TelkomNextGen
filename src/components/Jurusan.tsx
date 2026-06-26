"use client";

import { 
  Terminal as TerminalIcon, 
  Gamepad2, 
  Network, 
  Radio, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Briefcase
} from "lucide-react";

interface MajorData {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  curriculum: string[];
  careers: string[];
  icon: React.ComponentType<any>;
  themeColor: string;
  iconGradientClass: string;
  activeBorderClass: string;
  glowClass: string;
  bgGlowClass: string;
  bulletClass: string;
  pillClass: string;
  pulseDotClass: string;
  tagClass: string;
  stats: string;
  statsLabel: string;
  gridClass: string;
}

const MAJORS: MajorData[] = [
  {
    id: "rpl",
    name: "Rekayasa Perangkat Lunak",
    shortName: "RPL",
    tagline: "Menguasai pembuatan website, aplikasi mobile, basis data, dan rekayasa perangkat lunak modern.",
    curriculum: [
      "Pemrograman Web Modern (React, Next.js, Node.js)",
      "Pengembangan Aplikasi Mobile (React Native, Flutter)",
      "Manajemen Basis Data & Integrasi API (PostgreSQL, Prisma)"
    ],
    careers: ["Fullstack Web Developer", "Mobile App Developer", "Software Engineer", "Database Administrator"],
    icon: TerminalIcon,
    themeColor: "text-amber-600 border-amber-200/60 bg-amber-50",
    iconGradientClass: "group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md",
    activeBorderClass: "hover:border-amber-500/40",
    glowClass: "hover:shadow-xl hover:shadow-amber-500/[0.04]",
    bgGlowClass: "from-amber-500/10 via-transparent to-transparent",
    bulletClass: "bg-amber-500",
    pillClass: "text-amber-700 bg-amber-500/10",
    pulseDotClass: "bg-amber-500",
    tagClass: "text-amber-700 bg-amber-50 border border-amber-200/40",
    stats: "94%",
    statsLabel: "Lulusan Bekerja & Melanjutkan Kuliah",
    gridClass: "col-span-12 lg:col-span-7"
  },
  {
    id: "pg",
    name: "Pengembangan Game",
    shortName: "PG",
    tagline: "Merancang dunia virtual, animasi 3D, game logic scripting, dan alur game production.",
    curriculum: [
      "Pemrograman Scripting Game Engine (Unity, C#)",
      "Pemodelan Aset 3D & Karakter Animasi (Blender)",
      "Game Design Document & Level Design Praktis"
    ],
    careers: ["Game Programmer", "3D Modeler / Artist", "Level Designer", "Game Animator"],
    icon: Gamepad2,
    themeColor: "text-violet-600 border-violet-200/60 bg-violet-50",
    iconGradientClass: "group-hover:from-violet-500 group-hover:to-violet-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md",
    activeBorderClass: "hover:border-violet-500/40",
    glowClass: "hover:shadow-xl hover:shadow-violet-500/[0.04]",
    bgGlowClass: "from-violet-500/10 via-transparent to-transparent",
    bulletClass: "bg-violet-500",
    pillClass: "text-violet-700 bg-violet-500/10",
    pulseDotClass: "bg-violet-500",
    tagClass: "text-violet-700 bg-violet-50 border border-violet-200/40",
    stats: "89%",
    statsLabel: "Bekerja di Game Studio & Wirausaha Kreatif",
    gridClass: "col-span-12 lg:col-span-5"
  },
  {
    id: "tkj",
    name: "Teknik Komputer & Jaringan",
    shortName: "TKJ",
    tagline: "Menguasai perancangan jaringan lokal/cloud, administrasi server Linux, dan pertahanan keamanan siber.",
    curriculum: [
      "Administrasi Jaringan & Protokol Routing (Cisco CCNA)",
      "Pengelolaan Sistem Operasi Server (Linux, Windows Server)",
      "Cybersecurity Defense & Komputasi Awan (AWS Cloud)"
    ],
    careers: ["Network Administrator", "System Administrator", "Cloud Specialist", "Cybersecurity Associate"],
    icon: Network,
    themeColor: "text-blue-600 border-blue-200/60 bg-blue-50",
    iconGradientClass: "group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md",
    activeBorderClass: "hover:border-blue-500/40",
    glowClass: "hover:shadow-xl hover:shadow-blue-500/[0.04]",
    bgGlowClass: "from-blue-500/10 via-transparent to-transparent",
    bulletClass: "bg-blue-500",
    pillClass: "text-blue-700 bg-blue-500/10",
    pulseDotClass: "bg-blue-500",
    tagClass: "text-blue-700 bg-blue-50 border border-blue-200/40",
    stats: "92%",
    statsLabel: "Lulusan Terserap sebagai Network & System Engineer",
    gridClass: "col-span-12 lg:col-span-5"
  },
  {
    id: "tjat",
    name: "Teknik Jaringan Akses Telekomunikasi",
    shortName: "TJAT",
    tagline: "Memasang transmisi serat optik FTTH, pemancar seluler nirkabel 5G, dan sensor IoT.",
    curriculum: [
      "Instalasi & Penyambungan Kabel Serat Optik (FTTH GPON)",
      "Konfigurasi Pemancar Komunikasi Seluler (5G/4G)",
      "Implementasi Internet of Things (IoT) & Telemetri Satelit"
    ],
    careers: ["Fiber Optic Engineer", "RF Radio Specialist", "IoT System Installer", "Telecom Technician"],
    icon: Radio,
    themeColor: "text-emerald-600 border-emerald-200/60 bg-emerald-50",
    iconGradientClass: "group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-md",
    activeBorderClass: "hover:border-emerald-500/40",
    glowClass: "hover:shadow-xl hover:shadow-emerald-500/[0.04]",
    bgGlowClass: "from-emerald-500/10 via-transparent to-transparent",
    bulletClass: "bg-emerald-500",
    pillClass: "text-emerald-700 bg-emerald-500/10",
    pulseDotClass: "bg-emerald-500",
    tagClass: "text-emerald-700 bg-emerald-50 border border-emerald-200/40",
    stats: "95%",
    statsLabel: "Bekerja di Operator Seluler & Telco Infrastructure",
    gridClass: "col-span-12 lg:col-span-7"
  }
];

export default function Jurusan() {
  return (
    <section id="jurusan" className="relative bg-white py-12 px-3 sm:px-4 md:px-5 select-none">
      {/* Outer wrapper matching Hero card constraints */}
      <div className="max-w-[1500px] mx-auto w-full relative">
        
        {/* Rounded Card Container matching the Hero's rounded-[2.5rem] shape and gradient */}
        <div className="relative w-full rounded-[2.5rem] border border-[#E5E5EA] bg-gradient-to-b from-[#FFECEC]/45 via-[#FFF5F5]/45 to-white px-6 sm:px-12 lg:px-16 py-16 sm:py-24 shadow-sm overflow-hidden">
          
          {/* Clipped Background Pattern Layer matching the Hero's tech-grid layout */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Soft Ambient Glow Orbs */}
            <div className="absolute rounded-full blur-[100px] w-[350px] h-[350px] top-[10%] -left-[10%] bg-telkom-red/5 animate-pulse" style={{ animationDuration: "6s" }} />
            <div className="absolute rounded-full blur-[120px] w-[400px] h-[400px] bottom-[25%] -right-[10%] bg-telkom-red/3 animate-pulse" style={{ animationDuration: "8s" }} />

            {/* Core Tech Grid Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.75]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="grid-fade-jurusan" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="grid-mask-jurusan">
                  <rect width="100%" height="100%" fill="url(#grid-fade-jurusan)" />
                </mask>
                <pattern id="tech-grid-jurusan" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D1D5DB" strokeWidth="0.65" />
                  <circle cx="50" cy="50" r="1.5" fill="#9CA3AF" />
                  <circle cx="0" cy="0" r="1.5" fill="#9CA3AF" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tech-grid-jurusan)" mask="url(#grid-mask-jurusan)" />
            </svg>

            {/* Glowing Tech Curves & Angled PCB Traces (fully unified with Hero) */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.22] translate-y-16" viewBox="0 0 1440 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              {/* Radar Waves */}
              <circle cx="1400" cy="120" r="70" fill="none" stroke="#ED1C24" strokeWidth="0.75" opacity="0.15" strokeDasharray="3 5" />
              <circle cx="60" cy="620" r="90" fill="none" stroke="#9CA3AF" strokeWidth="0.75" opacity="0.12" strokeDasharray="4 6" />
              
              {/* PCB Traces */}
              <path
                d="M -50,600 L 220,600 L 270,550 L 480,550 L 510,580 L 750,580"
                fill="none"
                stroke="#ED1C24"
                strokeWidth="1"
              />
              <path
                d="M 1540,280 L 1250,280 L 1200,330 L 1050,330 L 1010,290 L 850,290"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="0.8"
              />
              {/* Node Pads */}
              <circle cx="270" cy="550" r="3" fill="#ED1C24" opacity="0.4" />
              <circle cx="480" cy="550" r="3" fill="#ED1C24" opacity="0.4" />
              <circle cx="1200" cy="330" r="3.5" fill="#9CA3AF" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
              <div className="inline-flex items-center gap-2 border border-telkom-red/10 bg-telkom-red/5 px-4 py-1.5 rounded-full text-[10px] font-bold text-telkom-red uppercase tracking-widest">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-telkom-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-telkom-red"></span>
                </span>
                PROGRAM KEAHLIAN
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold tracking-tight text-zinc-955 leading-[1.15] max-w-2xl w-full">
                Program Studi{" "}
                <span className="relative inline-block pb-1">
                  <span className="bg-gradient-to-r from-telkom-red to-[#B31217] bg-clip-text text-transparent font-semibold">Unggulan.</span>
                  <svg className="absolute left-0 -bottom-1 sm:-bottom-1.5 w-[96%] h-2 sm:h-2.5 text-telkom-red pointer-events-none" viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none" style={{ filter: "drop-shadow(0px 1px 2px rgba(237, 28, 36, 0.25))" }}>
                    <path d="M 2,3 C 35,7 65,3 98,4" />
                    <path d="M 6,7 C 40,10 70,6 94,6" strokeWidth="1.5" opacity="0.8" />
                  </svg>
                  <span className="absolute -top-1.5 -right-3.5 text-telkom-red text-[10px] sm:text-xs font-bold animate-pulse">✨</span>
                </span>
              </h2>
              <p className="font-body text-zinc-600 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
                Kurikulum kejuruan kami dirancang selaras dengan kompetensi dunia industri digital. Pilih peminatanmu, kuasai keahlian praktis, dan kembangkan portofolio nyata.
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-12 gap-6">
              {MAJORS.map((major) => {
                const Icon = major.icon;
                return (
                  <div
                    key={major.id}
                    className={`bg-white/80 border border-[#E5E5EA] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-1.5 transition-all duration-500 group relative min-h-[460px] ${major.activeBorderClass} ${major.glowClass} ${major.gridClass}`}
                  >
                    {/* Subtle Dot Matrix Texture inside each card to remove the plain look */}
                    <div className="absolute inset-0 bg-[radial-gradient(#E5E5EA_1px,transparent_1px)] bg-[size:16px_16px] opacity-35 pointer-events-none z-0" />

                    {/* Soft ambient themed glow spot in the corner */}
                    <div className={`absolute top-0 right-0 w-36 h-36 rounded-full bg-gradient-to-br ${major.bgGlowClass} blur-2xl pointer-events-none z-0`} />

                    {/* Major-Specific Background SVG Watermark Motif */}
                    {major.id === "rpl" && <RplMotif />}
                    {major.id === "pg" && <PgMotif />}
                    {major.id === "tkj" && <TkjMotif />}
                    {major.id === "tjat" && <TjatMotif />}

                    <div className="relative z-10">
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between">
                        <div className={`w-9 h-9 rounded-lg border flex items-center justify-center bg-white shadow-sm border-zinc-200/80 transition-all duration-500 ${major.themeColor} ${major.iconGradientClass}`}>
                          <Icon className="w-5 h-5 transition-colors duration-500" />
                        </div>
                        <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300 ${major.tagClass}`}>
                          {major.shortName}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-semibold text-lg sm:text-xl tracking-tight text-zinc-900 mt-5">
                        {major.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 font-body leading-relaxed mt-2 max-w-xl">
                        {major.tagline}
                      </p>
                    </div>

                    {/* Standard Company Profile Layout Core Subjects & Careers */}
                    <div className="relative my-6 z-10 w-full rounded-2xl border border-zinc-200/60 bg-white/70 backdrop-blur-sm p-5 space-y-4 flex-grow flex flex-col justify-center transition-all duration-500 group-hover:bg-white/90 group-hover:border-zinc-300/85 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                      
                      {/* Kurikulum Utama */}
                      <div className="space-y-1.5">
                        <span className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                          <BookOpen className="w-3.5 h-3.5 text-zinc-400" /> Kurikulum Utama
                        </span>
                        <ul className="space-y-1">
                          {major.curriculum.map((item, idx) => (
                            <li key={idx} className="text-xs text-zinc-650 leading-relaxed font-body flex items-start gap-1.5">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-transform group-hover:scale-110 duration-300 ${major.bulletClass}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prospek Karir */}
                      <div className="space-y-2 border-t border-zinc-200/40 pt-3">
                        <span className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                          <Briefcase className="w-3.5 h-3.5 text-zinc-400" /> Prospek Karir Lulusan
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {major.careers.map((career, idx) => (
                            <span 
                              key={idx}
                              className="bg-zinc-100/60 border border-zinc-200 text-zinc-650 px-2.5 py-0.5 rounded-md text-[9px] font-semibold font-body shadow-sm hover:bg-zinc-200/50 hover:text-zinc-900 hover:border-zinc-300 transition-all duration-300 cursor-default"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Stats pill & Arrow CTA button */}
                    <div className="flex items-center justify-between pt-2 border-t border-zinc-100/50 relative z-10">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md inline-flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] ${major.pillClass}`}>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${major.pulseDotClass}`}></span>
                          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${major.pulseDotClass}`}></span>
                        </span>
                        {major.stats} Keterserapan Kerja
                      </span>
                      <a
                        href="#footer"
                        className="text-zinc-400 group-hover:text-telkom-red transition-all duration-300 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider"
                      >
                        Detail
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* Background Watermark SVG Motifs (Quiet Luxury, Low Opacity) */

function RplMotif() {
  return (
    <div className="absolute right-6 top-16 w-36 h-36 opacity-[0.06] pointer-events-none z-0 text-amber-500 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:opacity-[0.14] group-hover:rotate-[3deg]">
      <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1">
        {/* Flowchart/Logic Node Diagram */}
        <rect x="35" y="10" width="30" height="15" rx="2" />
        <rect x="15" y="45" width="25" height="15" rx="2" />
        <rect x="60" y="45" width="25" height="15" rx="2" />
        <path d="M 50,25 L 50,35 M 50,35 L 27,35 L 27,45 M 50,35 L 72,35 L 72,45 M 27,60 L 27,70 L 50,70 L 50,85" />
        <circle cx="50" cy="88" r="2.5" fill="currentColor" />
      </svg>
    </div>
  );
}

function PgMotif() {
  return (
    <div className="absolute right-6 top-16 w-36 h-36 opacity-[0.06] pointer-events-none z-0 text-violet-500 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:opacity-[0.14] group-hover:rotate-[3deg]">
      <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1">
        {/* Isometric 3D Space Grid wireframe */}
        <polygon points="50,15 85,33 50,51 15,33" />
        <polygon points="15,33 50,51 50,85 15,67" />
        <polygon points="85,33 50,51 50,85 85,67" />
        <line x1="50" y1="51" x2="50" y2="2" />
        <line x1="15" y1="33" x2="85" y2="67" />
      </svg>
    </div>
  );
}

function TkjMotif() {
  return (
    <div className="absolute right-6 top-16 w-36 h-36 opacity-[0.06] pointer-events-none z-0 text-blue-500 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:opacity-[0.14] group-hover:rotate-[3deg]">
      <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1">
        {/* Network Servers Node connections */}
        <circle cx="50" cy="20" r="4.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="20" cy="50" r="4.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="80" cy="50" r="4.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="35" cy="80" r="4.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="65" cy="80" r="4.5" fill="currentColor" fillOpacity="0.2" />
        <line x1="50" y1="20" x2="20" y2="50" />
        <line x1="50" y1="20" x2="80" y2="50" />
        <line x1="20" y1="50" x2="35" y2="80" />
        <line x1="80" y1="50" x2="65" y2="80" />
        <line x1="35" y1="80" x2="65" y2="80" />
        <line x1="20" y1="50" x2="65" y2="80" />
      </svg>
    </div>
  );
}

function TjatMotif() {
  return (
    <div className="absolute right-6 top-16 w-36 h-36 opacity-[0.06] pointer-events-none z-0 text-emerald-500 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:opacity-[0.14] group-hover:rotate-[3deg]">
      <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="1">
        {/* Antennas Transmission signals / circular ripples */}
        <circle cx="50" cy="85" r="4" fill="currentColor" />
        <path d="M 50,85 M 50,70 A 15,15 0 0,1 50,100" strokeDasharray="2 2" />
        <path d="M 35,70 A 21.2,21.2 0 0,1 65,70" />
        <path d="M 25,60 A 35.3,35.3 0 0,1 75,60" strokeDasharray="1 1" />
        <path d="M 15,50 A 49.5,49.5 0 0,1 85,50" />
      </svg>
    </div>
  );
}
