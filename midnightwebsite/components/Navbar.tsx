"use client";

import Link from "next/link";

export default function Navbar() {

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">

      <div className="
        max-w-7xl
        mx-auto
        glass
        rounded-2xl
        px-8
        h-20
        flex
        items-center
        justify-between
      ">

        <Link
          href="/"
          className="
            text-3xl
            font-black
            tracking-tight
          "
        >
          MidNight
        </Link>

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/recensioni"
            className="text-white/70 hover:text-white transition"
          >
            Recensioni
          </Link>

          <Link
            href="/candidature"
            className="text-white/70 hover:text-white transition"
          >
            Candidature
          </Link>

          <Link
            href="/unban"
            className="text-white/70 hover:text-white transition"
          >
            Unban
          </Link>

          <Link
            href="/suggerimenti"
            className="text-white/70 hover:text-white transition"
          >
            Suggerimenti
          </Link>
        </nav>

      </div>
    </header>
  );
}