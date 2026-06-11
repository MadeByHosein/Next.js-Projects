import type { Metadata } from "next";
import "./globals.css";
import BootstrapClient from "@/components/libraries/bootstrap";


export const metadata: Metadata = {
  title: "فروشگاه فست فود",
  description: "سفارش انواع غذاهای ایرانی و فست فودی با بهترین کیفیت و قیمت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {children}

        <BootstrapClient />
      </body>
    </html>
  );
}
