import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMK Telkom Purwokerto | Window to Excellence",
  description: "Etalase Digital Premium Menampilkan Keunggulan, Prestasi, Kurikulum, dan Fasilitas Unggulan SMK Telkom Purwokerto.",
  keywords: ["SMK Telkom Purwokerto", "SMK Telkom", "Purwokerto", "RPL", "PG", "TKJ", "TJAT", "PPLG", "TJKT", "DKV", "Sekolah Vokasi", "Coding School"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans selection:bg-telkom-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
