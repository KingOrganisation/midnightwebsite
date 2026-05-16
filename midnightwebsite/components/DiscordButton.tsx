"use client";

import { signIn } from "next-auth/react";

export default function DiscordButton() {

  return (
    <button
      onClick={() => signIn("discord")}
    >
      Login Discord
    </button>
  );
}