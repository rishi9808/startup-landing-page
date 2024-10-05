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
  title: "AstraBiz",
  description: "AstraBiz is a web development company that helps businesses grow online.",
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
