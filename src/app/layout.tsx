import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/sections/Header";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Startup Landing Page",
  description: "A landing page for an AI startup created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(jost.className, "bg-black text-white antialiased")}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
