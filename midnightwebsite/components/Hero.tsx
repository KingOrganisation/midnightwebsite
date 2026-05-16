"use client";

import { signIn } from "next-auth/react";

export default function Hero() {

  return (
    <section className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      grid-bg
      px-6
    ">

      <div className="
        absolute
        w-[700px]
        h-[700px]
        bg-purple-600/20
        blur-3xl
        rounded-full
        -top-60
        -left-60
      " />

      <div className="
        absolute
        w-[600px]
        h-[600px]
        bg-cyan-500/10
        blur-3xl
        rounded-full
        bottom-[-200px]
        right-[-200px]
      " />

      <div className="
        relative
        z-10
        text-center
        max-w-5xl
      ">

        <div className="
          inline-flex
          glass
          rounded-full
          px-5
          py-2
          text-sm
          mb-8
        ">
          🌙 MidNight Official Community
        </div>

        <h1 className="
          text-7xl
          md:text-9xl
          font-black
          leading-[0.95]
          tracking-tight
        ">

          MidNight

          <span className="
            block
            bg-gradient-to-r
            from-purple-400
            to-cyan-400
            bg-clip-text
            text-transparent
          ">
            Community
          </span>
        </h1>

        <p className="
          mt-10
          text-xl
          text-white/65
          max-w-2xl
          mx-auto
          leading-relaxed
        ">
          Una community moderna dedicata
          a supporto, AI, gaming,
          eventi e networking.
        </p>

        <div className="
          mt-12
          flex
          flex-col
          md:flex-row
          justify-center
          gap-5
        ">

          <button
            onClick={() => signIn("discord")}
            className="
              glow
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              px-8
              py-4
              rounded-2xl
              font-semibold
              text-lg
              hover:scale-105
              transition
            "
          >
            Accedi con Discord
          </button>

          <a
            href="https://discord.gg/yourinvite"
            className="
              glass
              px-8
              py-4
              rounded-2xl
              text-lg
              hover:bg-white/10
              transition
            "
          >
            Entra nel Server
          </a>

        </div>
      </div>
    </section>
  );
}