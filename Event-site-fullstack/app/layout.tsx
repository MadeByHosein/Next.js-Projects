import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted_grotesk",
  subsets: ["latin"],
});

const MartianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Event",
  description: "Best Hub for Every DevEvent you're looking for",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body  className={`${SchibstedGrotesk.variable} ${MartianMono.variable} min-h-screen antialiased`}>
        <Navbar/>
        <div className="absolute inset-0 z-[-1] bg-slate-800 ">
          
        </div>
        <main className=" bg-slate-800">    
          {children}
          
        </main>
        </body>
    </html>
  );
}
