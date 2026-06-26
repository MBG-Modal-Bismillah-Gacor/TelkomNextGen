"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white px-6 pb-6 pt-2 select-none" style={{ height: "calc(100vh - 76px)", minHeight: "600px", maxHeight: "800px" }}>
      
      {/* Outer rounded card container */}
      <div className="relative w-full h-full rounded-[2.5rem] border border-gray-200 shadow-lg overflow-hidden bg-zinc-100">
        
        {/* Background Image */}
        <img
          src="/smktelkom.png"
          alt="Gedung SMK Telkom Purwokerto"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          loading="eager"
        />

        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        {/* ===== TOP: Massive "SMK TELKOM" Title ===== */}
        <div className="absolute top-8 inset-x-0 flex items-start justify-center pointer-events-none z-10">
          <h1
            className="font-black text-center uppercase tracking-tight select-none bg-gradient-to-b from-white/20 via-white/80 to-white bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
              lineHeight: "0.85",
              letterSpacing: "-0.01em",
            }}
          >
            SMK TELKOM
          </h1>
        </div>

        {/* ===== TOP LEFT: "1200+ Siswa" Badge ===== */}
        <div className="absolute top-10 left-10 z-10">
          <div className="border border-white/40 bg-white/10 backdrop-blur-md rounded-[4px] px-5 py-2">
            <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-wider">
              1200+ Siswa
            </span>
          </div>
        </div>

        {/* ===== TOP RIGHT: "4 Jurusan" Badge ===== */}
        <div className="absolute top-10 right-10 z-10">
          <div className="border border-white/40 bg-white/10 backdrop-blur-md rounded-[4px] px-5 py-2">
            <span className="text-[13px] sm:text-[14px] font-medium text-white tracking-wider">
              4 Jurusan
            </span>
          </div>
        </div>

        {/* ===== "2026" Text Overlay (placed above left wall area) ===== */}
        <div className="absolute left-[24%] top-[39%] z-10 pointer-events-none">
          <span className="text-zinc-800/80 font-bold text-xl sm:text-2xl tracking-wide font-mono">
            2026
          </span>
        </div>

        {/* ===== Left Wall Text Overlay & Cover (covering the red banner with a matching panel gradient) ===== */}
        <div 
          className="absolute left-[5.4%] bottom-[20.8%] w-[29.2%] h-[20.5%] bg-gradient-to-b from-[#E0E0E3] to-[#C8C8CB] flex flex-col justify-center px-6 select-none pointer-events-none"
          style={{
            transform: "skewY(-5.8deg)",
            borderLeft: "1px solid rgba(0,0,0,0.1)",
            borderRight: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {/* Subtle panel seam lines to blend into the building wall */}
          <div className="absolute inset-0 grid grid-cols-4 divider-x divide-black/5 opacity-15 pointer-events-none" />
          
          <p className="text-[#2C2C2E] font-black uppercase tracking-wider leading-none text-left" style={{ fontSize: "clamp(12px, 2vw, 24px)" }}>
            SMK TELKOM
          </p>
          <p className="text-[#2C2C2E] font-black uppercase tracking-wider leading-none text-left mt-1" style={{ fontSize: "clamp(12px, 2vw, 24px)" }}>
            PURWOKERTO
          </p>
        </div>

        {/* ===== Right Wall Text Overlay & Cover (covering the blue banner with a matching panel gradient) ===== */}
        <div 
          className="absolute right-[3.4%] bottom-[20%] w-[29.2%] h-[20.5%] bg-gradient-to-b from-[#E0E0E3] to-[#C8C8CB] flex flex-col justify-center px-6 select-none pointer-events-none"
          style={{
            transform: "skewY(5.8deg)",
            borderLeft: "1px solid rgba(0,0,0,0.1)",
            borderRight: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {/* Subtle panel seam lines to blend into the building wall */}
          <div className="absolute inset-0 grid grid-cols-4 divider-x divide-black/5 opacity-15 pointer-events-none" />
          
          <p className="text-[#2C2C2E] font-black uppercase tracking-wider leading-none text-left" style={{ fontSize: "clamp(12px, 2vw, 24px)" }}>
            SMK TELKOM
          </p>
          <p className="text-[#2C2C2E] font-black uppercase tracking-wider leading-none text-left mt-1" style={{ fontSize: "clamp(12px, 2vw, 24px)" }}>
            PURWOKERTO
          </p>
        </div>

        {/* ===== Bottom Red Canopy Area Buttons ===== */}
        <div className="absolute bottom-[13.5%] left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-full max-w-xl px-4">
          <div className="flex items-center gap-3 w-full justify-center">
            
            {/* Virtual Tour Button */}
            <a
              href="#virtual-tour"
              className="px-8 py-3.5 border border-white/30 bg-[#9C1D21]/90 hover:bg-[#85161A] text-white font-bold text-[13px] tracking-wide rounded-[4px] transition-all hover:brightness-110 active:scale-[0.98] shadow-md flex-1 text-center"
            >
              Virtual Tour
            </a>

            {/* PPDB Button */}
            <a
              href="#footer"
              className="px-8 py-3.5 border border-white/30 bg-[#9C1D21]/90 hover:bg-[#85161A] text-white font-bold text-[13px] tracking-wide rounded-[4px] transition-all hover:brightness-110 active:scale-[0.98] shadow-md flex-1 text-center flex items-center justify-center gap-1.5"
            >
              PPDB <span className="text-sm">→</span>
            </a>

          </div>
        </div>

        {/* ===== White Line Details stretching from PPDB button to the right ===== */}
        <div 
          className="absolute bottom-[16.5%] right-0 w-[31%] h-[1.5px] bg-white/60 z-10 hidden sm:block pointer-events-none"
        />

      </div>
    </section>
  );
}
