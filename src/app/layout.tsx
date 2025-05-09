import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './tailwind.css'
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "design book",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hidden-scrollbar">
      <body>
        <Sidebar />
        <main className="flex justify-center bg-gray-50 h-full ml-0 xs:ml-[60px] lg:ml-[140px] overflow-scroll hidden-scrollbar">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
