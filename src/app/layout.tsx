import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AsylumTech | Enterprise Infrastructure & Private AI",
  description: "We engineer and manage high-performance infrastructure and localized AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-300 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 relative overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
