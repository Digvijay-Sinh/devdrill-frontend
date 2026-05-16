import type { Metadata } from "next";
import { Anybody, JetBrains_Mono, Space_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevDrill - Join Game",
  description: "Level up your coding skills. One boss battle at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${anybody.variable} ${jetbrainsMono.variable} ${spaceMono.variable} bg-background text-on-background font-body-md min-h-screen flex flex-col pixel-bg items-center justify-center p-gutter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
