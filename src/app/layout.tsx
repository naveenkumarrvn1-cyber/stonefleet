import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stonebook",
  description: "Stonebook Notes App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 🔥 Row Layout */}
        <div className="flex h-screen">

          {/* Sidebar */}
          <Sidebar />

          {/* Right Side */}
          <div className="flex-1 flex flex-col">

            {/* Header (Now side la varum) */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 bg-zinc-50 dark:bg-black">
              {children}
            </main>

          </div>

        </div>
      </body>
    </html>
  );
}
