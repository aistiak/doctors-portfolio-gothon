import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Md. Tuhin Talukder | General & Hepatobiliary Surgeon",
  description:
    "Portfolio of Dr. Md. Tuhin Talukder — Consultant General & Hepatobiliary Surgeon at SHIP International Hospital, Uttara, Dhaka. Book an appointment online.",
  keywords: [
    "Dr Tuhin Talukder",
    "Hepatobiliary Surgeon",
    "General Surgeon",
    "Dhaka",
    "Uttara",
    "SHIP International Hospital",
    "Liver Surgery",
  ],
  openGraph: {
    title: "Dr. Md. Tuhin Talukder | Hepatobiliary Surgeon",
    description:
      "Expert general and hepatobiliary surgeon with 18+ years of experience. Book your appointment at SHIP International Hospital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
