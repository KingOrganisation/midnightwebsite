"use client";

import { signIn } from "next-auth/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-5xl">

        <div className="glass inline-flex px-5 py-2 rounded-full mb-8">
          🌙 MidNight Official Community
        </div>

        <h1 className="text-7xl font-black leading-tight">
          MidNight
          <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Community Hub
          </span>
        </h1>

        <p className="mt-8 text-xl text-white/70">
          Community italiana dedicata a gaming,
          AI, supporto, eventi e partnership.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button
            onClick={() => signIn("discord")}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 rounded-2xl font-semibold"
          >
            Accedi con Discord
          </button>

          <a
            href="https://discord.gg/yourinvite"
            className="glass px-8 py-4 rounded-2xl"
          >
            Entra nel Discord
          </a>

        </div>
      </div>
    </section>
  );
}