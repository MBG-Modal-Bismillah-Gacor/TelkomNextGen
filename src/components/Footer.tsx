import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#050517] border-t border-white/5 pt-20 pb-8 text-zinc-300">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-telkom-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-telkom-navy/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* About & Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-telkom-red flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-telkom-red/35">
              T
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-sm md:text-base tracking-tight leading-none text-white flex items-center gap-1.5">
                SMK <span className="text-telkom-red">Telkom</span>
              </h2>
              <span className="text-[10px] text-zinc-400 tracking-wider font-mono">PURWOKERTO</span>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed font-body">
            SMK Telkom Purwokerto merupakan sekolah IT unggulan di Jawa Tengah yang berorientasi global, siap mencetak generasi digital teladan, inovatif, dan berdaya saing global.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-telkom-red hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-telkom-red hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-telkom-red hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Youtube">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-telkom-red hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white border-l-4 border-telkom-red pl-3">
            Navigasi Cepat
          </h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#hero" className="hover:text-telkom-red hover:translate-x-1 inline-block transition-all">Home</a></li>
            <li><a href="#jurusan" className="hover:text-telkom-red hover:translate-x-1 inline-block transition-all">Showcase Jurusan</a></li>
            <li><a href="#wall-of-fame" className="hover:text-telkom-red hover:translate-x-1 inline-block transition-all">Wall of Fame</a></li>
            <li><a href="#alumni" className="hover:text-telkom-red hover:translate-x-1 inline-block transition-all">Sebaran Alumni</a></li>
            <li><a href="#virtual-tour" className="hover:text-telkom-red hover:translate-x-1 inline-block transition-all">Virtual Campus Tour</a></li>
            <li><a href="#keterserapan" className="hover:text-telkom-red hover:translate-x-1 inline-block transition-all">Statistik Lulusan</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white border-l-4 border-telkom-red pl-3">
            Hubungi Kami
          </h3>
          <ul className="space-y-4 text-sm font-body">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-telkom-red shrink-0 mt-0.5" />
              <span className="text-zinc-400">Jl. Letjen Panjaitan No.119, Purwokerto Kidul, Purwokerto Selatan, Kab. Banyumas, Jawa Tengah 53147</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-telkom-red shrink-0" />
              <span className="text-zinc-400">(0281) 634908 / +62 813-9119-9119</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-telkom-red shrink-0" />
              <span className="text-zinc-400">info@smktelkom-pwt.sch.id</span>
            </li>
          </ul>
        </div>

        {/* Location Map Embed */}
        <div className="space-y-6">
          <h3 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white border-l-4 border-telkom-red pl-3">
            Lokasi Sekolah
          </h3>
          <div className="w-full h-44 rounded-2xl overflow-hidden border border-white/10 glass-effect relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m4!1s0x2e655c313ec60307:0xe4a13f0cb0e3630f!2sSMK+Telkom+Purwokerto!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            <a
              href="https://maps.app.goo.gl/tJ9c7g7J8g7g8g7g8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 bg-[#050517]/85 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-white flex items-center gap-1 hover:bg-telkom-red transition-all"
            >
              Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>
          © {new Date().getFullYear()} SMK Telkom Purwokerto. All Rights Reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-zinc-300">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-zinc-300">PPDB Portal</a>
        </div>
      </div>
    </footer>
  );
}
