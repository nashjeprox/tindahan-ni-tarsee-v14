import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tindahan ni Tarsee | Daily Tribune",
  description: "MSME empowerment initiative - Real stalls, real sales, zero middlemen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}