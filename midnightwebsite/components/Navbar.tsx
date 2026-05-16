"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="font-black text-3xl"
        >
          MidNight
        </Link>

        <div className="flex items-center gap-8 text-sm text-white/80">
          <Link href="/recensioni">Recensioni</Link>
          <Link href="/candidature">Candidature</Link>
          <Link href="/unban">Unban</Link>
          <Link href="/suggerimenti">Suggerimenti</Link>
        </div>
      </div>
    </nav>
  );
}