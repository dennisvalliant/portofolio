import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dennis Valliant — Portfolio",
  description:
    "Portfolio of Dennis Valliant, a Software Engineering student and full-stack developer at Bina Nusantara University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
          margin: 0,
          padding: 0,
        }}
      >
        <Navbar />
        <main style={{ paddingTop: "65px" }}>{children}</main>
      </body>
    </html>
  );
}
