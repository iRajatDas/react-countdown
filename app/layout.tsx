import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Simple Coundown Timer",
  description: "A simple countdown timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
