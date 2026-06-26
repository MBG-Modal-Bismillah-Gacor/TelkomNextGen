"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* Navbar Container */}
      <header className="w-full bg-white h-[76px] flex items-center justify-between px-6 md:px-12 select-none">
        
        {/* Logo (Left) */}
        <a href="#hero" className="flex-shrink-0 flex items-center">
          <img
            src="/Logo-SMK-Telkom-Purwokerto.png"
            alt="SMK Telkom Purwokerto Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Groups */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* Left Pill (Tentang, Jurusan, Unggulan) */}
          <div className="flex items-center border border-gray-300/80 rounded-[8px] px-6 py-2.5 bg-white">
            <div className="flex items-center gap-8">
              <a
                href="#hero"
                className="text-[11px] font-bold text-zinc-800 tracking-wider hover:text-red-600 transition-colors uppercase"
              >
                TENTANG
              </a>
              <a
                href="#jurusan"
                className="text-[11px] font-bold text-zinc-800 tracking-wider hover:text-red-600 transition-colors uppercase"
              >
                JURUSAN
              </a>
              <a
                href="#unggulan"
                className="text-[11px] font-bold text-zinc-800 tracking-wider hover:text-red-600 transition-colors uppercase"
              >
                UNGGULAN
              </a>
            </div>
          </div>

          {/* Right Pill (Alumni, Virtual Tour, Prestasi, Search) */}
          <div className="flex items-center border border-gray-300/80 rounded-[8px] bg-white overflow-hidden">
            {/* Alumni */}
            <div className="px-6 py-2.5 border-r border-gray-300/80">
              <a
                href="#alumni"
                className="text-[11px] font-bold text-zinc-800 tracking-wider hover:text-red-600 transition-colors uppercase"
              >
                ALUMNI
              </a>
            </div>

            {/* Virtual Tour */}
            <div className="px-6 py-2.5 border-r border-gray-300/80">
              <a
                href="#virtual-tour"
                className="text-[11px] font-bold text-zinc-800 tracking-wider hover:text-red-600 transition-colors uppercase"
              >
                VIRTUAL TOUR
              </a>
            </div>

            {/* Prestasi */}
            <div className="px-6 py-2.5 border-r border-gray-300/80">
              <a
                href="#wall-of-fame"
                className="text-[11px] font-bold text-zinc-800 tracking-wider hover:text-red-600 transition-colors capitalize"
              >
                Prestasi
              </a>
            </div>

            {/* Search Input and Icon */}
            <div className="flex items-center px-4 py-1.5 gap-2 bg-white min-w-[160px]">
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ..."
                className="text-[11.5px] text-zinc-700 bg-transparent outline-none w-full placeholder-zinc-400 font-medium"
              />
              <button
                className="w-8 h-8 rounded-[6px] bg-[#ED1C24] flex items-center justify-center flex-shrink-0 hover:bg-[#C8161D] transition-colors"
                onClick={() => searchRef.current?.focus()}
              >
                <Search className="w-4 h-4 text-white stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* PPDB Button (Far Right) */}
          <a
            href="#footer"
            className="bg-[#ED1C24] hover:bg-[#C8161D] text-white text-[12px] font-bold tracking-wider px-6 py-3 rounded-[6px] transition-all duration-200 hover:shadow-md active:scale-95 whitespace-nowrap uppercase"
          >
            PPDB
          </a>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[76px] bottom-0 bg-white/97 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 gap-4 transition-all duration-300 border-t border-gray-100 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            TENTANG
          </a>
          <a
            href="#jurusan"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            JURUSAN
          </a>
          <a
            href="#unggulan"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            UNGGULAN
          </a>
          <a
            href="#alumni"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            ALUMNI
          </a>
          <a
            href="#virtual-tour"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 uppercase hover:bg-gray-50 rounded-lg"
          >
            VIRTUAL TOUR
          </a>
          <a
            href="#wall-of-fame"
            onClick={() => setIsOpen(false)}
            className="py-3 px-4 border-b border-gray-100 text-sm font-bold text-zinc-800 capitalize hover:bg-gray-50 rounded-lg"
          >
            Prestasi
          </a>
        </div>
        <a
          href="#footer"
          onClick={() => setIsOpen(false)}
          className="mt-4 w-full text-center py-3.5 bg-[#ED1C24] hover:bg-[#C8161D] text-white rounded-lg text-sm font-bold tracking-wide transition-all uppercase"
        >
          PPDB
        </a>
      </div>
    </>
  );
}
