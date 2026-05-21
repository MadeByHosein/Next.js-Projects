import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "@/component/HOC/Provider";
import ResponsiveNav from "@/component/Home/Navbar/ResponsiveNav";



const font = Rubik({
  weight:['300','400','500','600','700','800','900']
})
export const metadata: Metadata = {
  title: "Web Agency | Next.js + TailwindCss",
  description: "A modern web agency designed by next.js and tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider >
          <ResponsiveNav />
          {children}        
        </Provider>
        </body>
    </html>
  );
}
