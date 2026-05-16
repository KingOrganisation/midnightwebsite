import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "MidNight",
  description: "MidNight Community"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}