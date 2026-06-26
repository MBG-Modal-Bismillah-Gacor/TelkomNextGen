"use client";

import React from "react";
import {
  BookOpen,
  Code,
  Smartphone,
  Lightbulb,
  Palette,
  Cpu,
  Database,
  Gamepad2,
  PenTool,
  Layers,
  Activity,
  Volume2,
  Network,
  Server,
  ShieldAlert,
  Wifi,
  Cloud,
  Radio,
  Signal,
  Wrench,
  Gauge,
  Globe,
  Shield,
  Monitor,
  Briefcase,
  Settings
} from "lucide-react";

// Map string icon names to Lucide icons
const IconMap: { [key: string]: React.ComponentType<any> } = {
  BookOpen,
  Code,
  Smartphone,
  Lightbulb,
  Palette,
  Cpu,
  Database,
  Gamepad2,
  PenTool,
  Layers,
  Activity,
  Volume2,
  Network,
  Server,
  ShieldAlert,
  Wifi,
  Cloud,
  Radio,
  Signal,
  Wrench,
  Gauge,
  Globe,
  Shield,
  Monitor,
  Briefcase,
  Settings
};

const JURUSAN_DATA = [
  {
    id: "rpl",
    shortName: "RPL",
    fullName: "Rekayasa Perangkat Lunak",
    description: "Mempelajari seluruh aspek produksi software seperti aplikasi web dan aplikasi mobile.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Mata Pelajaran Kejuruan", icon: "Settings" },
      { name: "Kewirausahaan", icon: "Lightbulb" },
      { name: "Desain Grafis", icon: "PenTool" },
      { name: "Pemrograman web", icon: "Code" },
      { name: "Pemrograman aplikasi android", icon: "Smartphone" },
      { name: "Manajemen Database", icon: "Database" }
    ],
    careers: [
      {
        title: "Web Dev",
        icon: "Globe",
        desc: "Siswa nantinya akan belajar dan dituntut untuk bisa membuat aplikasi berbasis web dengan teknologi pemrograman sesuai standar industri. Back-end menggunakan Node JS/Laravel, dan Front-end menggunakan React JS/Vue JS."
      },
      {
        title: "Mobile Dev",
        icon: "Smartphone",
        desc: "Mengembangkan aplikasi smartphone Android dan iOS menggunakan teknologi mutakhir seperti Flutter, React Native, atau native development."
      },
      {
        title: "Game Dev",
        icon: "Gamepad2",
        desc: "Merancang logika permainan, mekanika, serta interaksi game 2D dan 3D menggunakan game engine populer."
      }
    ],
    visualType: "code",
    themeColor: "text-[#ED1C24] border-[#ED1C24]/30 bg-[#ED1C24]/10",
    gradientColor: "from-[#ED1C24] to-[#f43f5e]"
  },
  {
    id: "pg",
    shortName: "PG",
    fullName: "Pengembangan Gim",
    description: "Mengembangkan keahlian dalam merancang cerita, visual art, animasi, dan pemrograman untuk industri game digital.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Pemrograman Game", icon: "Gamepad2" },
      { name: "Desain Level & Naratif", icon: "PenTool" },
      { name: "Desain Karakter 2D & 3D", icon: "Layers" },
      { name: "Animasi Game", icon: "Activity" },
      { name: "Rekayasa Audio Game", icon: "Volume2" },
      { name: "Kewirausahaan Digital", icon: "Lightbulb" }
    ],
    careers: [
      {
        title: "Game Programmer",
        icon: "Gamepad2",
        desc: "Menulis kode logika game, kecerdasan buatan (AI), fisika game, dan gameplay menggunakan Unity Engine atau Unreal Engine."
      },
      {
        title: "Game Designer",
        icon: "PenTool",
        desc: "Merancang mekanika permainan, aturan main, tantangan, alur level, dan pengalaman interaktif yang menyenangkan."
      },
      {
        title: "3D Game Artist",
        icon: "Layers",
        desc: "Membuat aset visual berupa model karakter 3D, lingkungan (environment), tekstur, dan pencahayaan game."
      }
    ],
    visualType: "game",
    themeColor: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
    gradientColor: "from-[#8B5CF6] to-[#a78bfa]"
  },
  {
    id: "tkj",
    shortName: "TKJ",
    fullName: "Teknik Komputer dan Jaringan",
    description: "Mempelajari perakitan komputer, instalasi sistem operasi, penanganan hardware, serta administrasi jaringan komputer.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Jaringan Komputer Dasar", icon: "Network" },
      { name: "Administrasi Infrastruktur Jaringan", icon: "Server" },
      { name: "Keamanan Jaringan", icon: "ShieldAlert" },
      { name: "Sistem Komunikasi Nirkabel", icon: "Wifi" },
      { name: "Teknologi Cloud Computing", icon: "Cloud" },
      { name: "Internet of Things (IoT)", icon: "Cpu" }
    ],
    careers: [
      {
        title: "Network Engineer",
        icon: "Network",
        desc: "Merancang, mengkonfigurasi, menguji, dan mengelola jaringan LAN/WAN perusahaan menggunakan perangkat Cisco atau MikroTik."
      },
      {
        title: "System Administrator",
        icon: "Server",
        desc: "Mengelola server fisik dan virtual, sistem operasi server (Linux/Windows Server), backup data, dan hak akses."
      },
      {
        title: "Cyber Security Specialist",
        icon: "Shield",
        desc: "Melindungi infrastruktur IT dari ancaman serangan siber, memantau keamanan, dan menganalisis celah siber."
      }
    ],
    visualType: "network",
    themeColor: "text-[#3B82F6] border-[#3B82F6]/30 bg-[#3B82F6]/10",
    gradientColor: "from-[#3B82F6] to-[#60a5fa]"
  },
  {
    id: "tja",
    shortName: "TJA",
    fullName: "Teknik Jaringan Akses Telekomunikasi",
    description: "Mempelajari instalasi, penyambungan, dan pengukuran jaringan serat optik (Fiber Optic) serta pemancar nirkabel.",
    subjects: [
      { name: "Mata Pelajaran Nasional", icon: "BookOpen" },
      { name: "Sistem Komunikasi Serat Optik", icon: "Radio" },
      { name: "Jaringan Nirkabel & Seluler", icon: "Signal" },
      { name: "Instalasi Perangkat Akses", icon: "Wrench" },
      { name: "Alat Ukur Fiber Optik (OTDR)", icon: "Gauge" },
      { name: "Sistem Transmisi Satelit", icon: "Globe" },
      { name: "K3 Spesialis Telekomunikasi", icon: "Shield" }
    ],
    careers: [
      {
        title: "Fiber Optic Engineer",
        icon: "Signal",
        desc: "Melakukan instalasi penarikan kabel fiber optik, penyambungan (fusion splicing), dan pengetesan redaman sinyal menggunakan OTDR."
      },
      {
        title: "RF Engineer",
        icon: "Radio",
        desc: "Merancang, mengukur, dan mengoptimalkan sinyal pemancar seluler (BTS) untuk menjamin kualitas sinyal 4G/5G."
      },
      {
        title: "Telecom Supervisor",
        icon: "Wrench",
        desc: "Mengawasi proyek penyediaan jaringan telekomunikasi kabel dan nirkabel untuk operator seluler atau ISP."
      }
    ],
    visualType: "telecom",
    themeColor: "text-[#F97316] border-[#F97316]/30 bg-[#F97316]/10",
    gradientColor: "from-[#F97316] to-[#fb923c]"
  }
];

function CardVisual({ type }: { type: string }) {
  if (type === "code") {
    return (
      <div className="w-full h-full flex flex-col bg-zinc-950 font-mono text-[9px] p-4 text-zinc-300">
        {/* IDE Topbar */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[9px] text-zinc-500">App.tsx</span>
          <div className="w-4 h-4" />
        </div>
        
        {/* Code Content */}
        <div className="flex-grow space-y-1.5 leading-relaxed overflow-hidden">
          <div><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-emerald-400">"react"</span>;</div>
          <div><span className="text-purple-400">const</span> <span className="text-blue-400">App</span> = () =&gt; &#123;</div>
          <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> (</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;</span><span className="text-red-400">div</span> <span className="text-yellow-400">className</span>=<span className="text-emerald-400">"rpl-dev"</span><span className="text-blue-400">&gt;</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;</span><span className="text-red-400">h1</span><span className="text-blue-400">&gt;</span><span className="text-zinc-100 font-bold">SMK Telkom</span><span className="text-blue-400">&lt;/</span><span className="text-red-400">h1</span><span className="text-blue-400">&gt;</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;</span><span className="text-red-400">Button</span> <span className="text-yellow-400">variant</span>=<span className="text-emerald-400">"primary"</span><span className="text-blue-400">&gt;</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deploy App</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/</span><span className="text-red-400">Button</span><span className="text-blue-400">&gt;</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/</span><span className="text-red-400">div</span><span className="text-blue-400">&gt;</span></div>
          <div>&nbsp;&nbsp;);</div>
          <div>&#125;;</div>
        </div>

        {/* Floating Success Indicator */}
        <div className="absolute bottom-4 right-4 bg-emerald-500/10 border border-emerald-500/30 rounded-[6px] px-2 py-0.5 text-[8px] font-bold text-emerald-400 flex items-center gap-1 shadow-md shadow-emerald-500/5 animate-pulse">
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          SUCCESS
        </div>
      </div>
    );
  }

  if (type === "game") {
    return (
      <div className="w-full h-full flex flex-col bg-slate-900 overflow-hidden relative p-4 font-mono text-[9px] text-zinc-300">
        {/* Game HUD */}
        <div className="flex justify-between items-center text-white select-none z-10">
          <div className="flex items-center gap-0.5">
            <span className="text-rose-500 font-bold">♥</span>
            <span>x3</span>
          </div>
          <div className="bg-purple-500/20 border border-purple-500/30 rounded-full px-1.5 py-0.5 text-purple-300 font-bold tracking-wider">
            LVL 02
          </div>
          <div className="font-bold text-amber-400">SCORE: 18,400</div>
        </div>

        {/* Game Background Graphics */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] opacity-40 pointer-events-none" />
        
        {/* Ground */}
        <div className="absolute inset-x-0 bottom-0 h-14 bg-zinc-950 border-t-2 border-purple-600 flex items-center justify-around">
          <div className="w-3 h-3 bg-purple-950/40 rounded-sm" />
          <div className="w-5 h-2 bg-purple-950/40 rounded-sm" />
        </div>

        {/* Jumping Hero character */}
        <div className="absolute bottom-14 left-10 w-6 h-6 flex items-center justify-center">
          <div className="w-5 h-5 bg-purple-500 border border-purple-400 rounded shadow-md shadow-purple-500/40 relative animate-bounce">
            <div className="absolute top-1 right-1 flex gap-0.5">
              <span className="w-0.5 h-0.5 bg-white rounded-full" />
              <span className="w-0.5 h-0.5 bg-white rounded-full" />
            </div>
            <div className="absolute -top-1.5 -left-1.5 w-1 h-3 bg-amber-400 border border-amber-300 rounded rotate-45" />
          </div>
        </div>

        {/* Collectible Star */}
        <div className="absolute top-24 left-28 w-3 h-3 bg-amber-400 rounded-full animate-bounce flex items-center justify-center text-[7px] font-bold text-amber-950 border border-amber-300 shadow-md">
          ★
        </div>

        {/* Gamepad Floating Tag */}
        <div className="absolute bottom-4 right-4 bg-purple-500/10 border border-purple-500/30 rounded-[6px] px-2 py-0.5 text-[8px] font-bold text-purple-400 flex items-center gap-1 shadow-md shadow-purple-500/5 select-none">
          GAME ENGINE READY
        </div>
      </div>
    );
  }

  if (type === "network") {
    return (
      <div className="w-full h-full flex flex-col bg-[#020617] overflow-hidden relative p-4 font-mono text-[9px] text-zinc-300">
        {/* Top title */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2 text-zinc-500 select-none">
          <span>NET_MONITOR v1.4</span>
          <span className="text-[#3B82F6] font-bold">SYS: SECURE</span>
        </div>

        {/* Network Topology Graph */}
        <div className="flex-grow relative flex items-center justify-center my-1 select-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Connection Lines */}
            <line x1="50" y1="25" x2="20" y2="65" stroke="#1e3a8a" strokeWidth="0.75" />
            <line x1="50" y1="25" x2="50" y2="65" stroke="#1e3a8a" strokeWidth="0.75" />
            <line x1="50" y1="25" x2="80" y2="65" stroke="#1e3a8a" strokeWidth="0.75" />
            
            {/* Center Node */}
            <circle cx="50" cy="25" r="7" fill="#3b82f6" className="animate-pulse" />
            <text x="50" y="27" fill="white" fontSize="5" fontWeight="bold" textAnchor="middle">SVR</text>

            {/* Client Nodes */}
            <circle cx="20" cy="65" r="5" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.75" />
            <text x="20" y="67" fill="#93c5fd" fontSize="4.5" textAnchor="middle">PC1</text>

            <circle cx="50" cy="65" r="5" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.75" />
            <text x="50" y="67" fill="#93c5fd" fontSize="4.5" textAnchor="middle">PC2</text>

            <circle cx="80" cy="65" r="5" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.75" />
            <text x="80" y="67" fill="#93c5fd" fontSize="4.5" textAnchor="middle">PC3</text>
          </svg>
        </div>

        {/* Live Terminal Output */}
        <div className="bg-black/60 border border-zinc-900 rounded-[8px] p-2 text-zinc-400 space-y-1 text-[8px] leading-tight select-none">
          <div><span className="text-zinc-600">$</span> ping 8.8.8.8</div>
          <div className="text-blue-400">Reply from 8.8.8.8: bytes=32 time=10ms</div>
          <div className="text-emerald-400">Packets: Sent = 4, Received = 4, Loss = 0%</div>
        </div>
      </div>
    );
  }

  if (type === "telecom") {
    return (
      <div className="w-full h-full flex flex-col bg-[#0c0602] overflow-hidden relative p-4 font-mono text-[9px] text-zinc-300">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2 text-zinc-500 select-none">
          <span>TX_STATION v2.0</span>
          <span className="text-[#F97316] font-bold">LINK: ACTIVE</span>
        </div>

        {/* Fiber Optic Cross Section / Telecom Antenna Graph */}
        <div className="flex-grow flex items-center justify-around py-1 select-none">
          {/* Fiber Optic Cable */}
          <div className="relative w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-dashed border-orange-500/40 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }} />
            <span className="w-2 h-2 rounded-full bg-orange-500 absolute top-3 left-4 shadow-md shadow-orange-500" />
            <span className="w-2 h-2 rounded-full bg-cyan-500 absolute bottom-3 left-3 shadow-md shadow-cyan-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-white absolute shadow-md shadow-white" />
          </div>

          {/* Telecom Transmission Waves */}
          <div className="flex flex-col gap-1 w-14 items-center justify-center">
            <svg className="w-10 h-10" viewBox="0 0 50 50">
              <line x1="25" y1="40" x2="25" y2="18" stroke="#f97316" strokeWidth="1.5" />
              <circle cx="25" cy="18" r="2.5" fill="#f97316" className="animate-pulse" />
              <path d="M 20 14 A 8 8 0 0 1 30 14" fill="none" stroke="#f97316" strokeWidth="0.75" className="animate-ping" style={{ animationDuration: '2s' }} />
            </svg>
          </div>
        </div>

        {/* Signal Stats */}
        <div className="bg-black/60 border border-zinc-900 rounded-[8px] p-2 text-zinc-400 space-y-1 text-[8px] leading-tight select-none">
          <div className="flex justify-between">
            <span>SIG:</span>
            <span className="text-emerald-400 font-bold">-62 dBm</span>
          </div>
          <div className="flex justify-between">
            <span>LOSS:</span>
            <span className="text-emerald-400 font-bold">0.18 dB/km</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function Jurusan() {
  return (
    <section id="jurusan" className="relative w-full bg-white py-24 px-6 select-none border-t border-gray-100 overflow-visible">
      
      {/* Centered vertical lines running from top to bottom of section */}
      <div className="absolute inset-y-0 left-6 right-6 max-w-[1240px] mx-auto pointer-events-none hidden xl:block z-0">
        {/* Left vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-200/60" />
        
        {/* Middle vertical line */}
        <div className="absolute left-[124px] top-0 bottom-0 w-[1px] bg-gray-200/60" />
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* 1. Static Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 w-full">
          <div className="flex flex-col">
            <span className="text-zinc-400 text-[11.5px] font-bold uppercase tracking-widest block mb-4">
              Jurusan
            </span>
            <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-black text-zinc-900 leading-tight tracking-tight uppercase max-w-2xl">
              Kenali Lebih Dekat Pilihan Jurusanmu
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Monitor Card Frame */}
            <div className="border border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[14px] p-4 bg-white flex items-center justify-center w-[92px] h-[92px]">
              <svg className="w-12 h-12 text-[#ED1C24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <polyline points="10 8 8 10 10 12" />
                <polyline points="14 8 16 10 14 12" />
              </svg>
            </div>
          </div>
        </div>

        {/* 2. Scrolling Stacked Cards Container */}
        <div className="relative flex flex-col gap-12 pb-24 md:pb-36 overflow-visible">
          {JURUSAN_DATA.map((major, index) => {
            return (
              <div
                key={major.id}
                className="sticky w-full bg-white border border-zinc-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] rounded-[32px] p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-300"
                style={{
                  top: "110px", // Sticks below the floating navbar, allowing the bottom card to slide over and cover the top card
                  zIndex: 10 + index,
                }}
              >
                
                {/* LEFT COLUMN: Subjects Learned (Grid Span: 5) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <h3 className="text-zinc-900 text-[17px] font-extrabold tracking-tight">
                    Apa saja yang di <span className="text-[#ED1C24]">pelajari</span>?
                  </h3>
                  
                  {/* Subject Pills Grid (3 Columns on larger screen to match mockup) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                    {major.subjects.map((subj, idx) => {
                      const IconComponent = IconMap[subj.icon] || BookOpen;
                      return (
                        <div
                          key={idx}
                          className="border border-[#ED1C24]/30 rounded-[8px] bg-white px-3.5 py-3 flex items-center gap-3 transition-all duration-300 hover:border-[#ED1C24]/70 hover:shadow-[0_4px_12px_rgba(237,28,36,0.04)]"
                        >
                          <div className="flex items-center justify-center w-7.5 h-7.5 rounded-[6px] bg-red-50 text-[#ED1C24] flex-shrink-0">
                            <IconComponent className="w-4 h-4 stroke-[2]" />
                          </div>
                          <span className="text-[11.5px] font-bold text-zinc-800 leading-tight">
                            {subj.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CENTER COLUMN: Phone Mockup Frame (Grid Span: 3) */}
                <div className="lg:col-span-3 flex justify-center items-center">
                  <div className="w-[210px] h-[360px] bg-zinc-950 border-[8px] border-zinc-900 rounded-[30px] shadow-2xl relative overflow-hidden flex flex-col flex-shrink-0">
                    <CardVisual type={major.visualType} />
                  </div>
                </div>

                {/* RIGHT COLUMN: Major details and Career list (Grid Span: 4) */}
                <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-4">
                  
                  {/* Header & Description */}
                  <div className="space-y-3">
                    <h3 className="text-[32px] sm:text-[36px] font-black text-zinc-900 tracking-tight leading-none uppercase">
                      {major.shortName}
                    </h3>
                    <span className="text-zinc-500 text-[13px] font-bold block">
                      ({major.fullName})
                    </span>
                    <p className="text-zinc-600 text-[13px] sm:text-[13.5px] leading-relaxed font-medium">
                      {major.description}
                    </p>
                  </div>

                  {/* Career Prospects */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-zinc-950 text-xs sm:text-[13px] font-extrabold tracking-wider uppercase">
                      Prospek <span className="text-[#ED1C24]">kerja</span>
                    </h4>
                    
                    <div className="flex flex-col gap-4">
                      {major.careers.map((career, idx) => {
                        const CareerIcon = IconMap[career.icon] || Briefcase;
                        return (
                          <div key={idx} className="flex gap-3.5 items-start">
                            <div className="flex items-center justify-center w-7.5 h-7.5 rounded-[6px] bg-zinc-50 border border-zinc-150 text-zinc-600 flex-shrink-0">
                              <CareerIcon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[12.5px] font-black text-zinc-900 leading-tight">
                                {career.title}
                              </span>
                              {idx === 0 && (
                                <p className="text-zinc-500 text-[11px] leading-relaxed mt-1 font-medium max-w-sm">
                                  {career.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
