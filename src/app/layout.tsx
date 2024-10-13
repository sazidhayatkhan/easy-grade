import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarUI from "@/views/appBars/Navbar";
import FooterUI from "@/views/appBars/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Easy Grade",
  description: "Product by Suravee Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarUI/>
        <div className="bg-gray-100 pt-[48px]">
          {children}
        </div>
        <FooterUI/>
      </body>
    </html>
  );
}
