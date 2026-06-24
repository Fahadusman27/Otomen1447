import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Otomen Automotive | Premium Car Dealership",
  description:
    "Otomen Automotive — your trusted premium car dealership. Explore our curated collection of luxury and performance vehicles with unmatched customer service.",
  keywords: ["car dealership", "luxury cars", "automotive", "premium vehicles", "otomen"],
  openGraph: {
    title: "Otomen Automotive | Premium Car Dealership",
    description: "Your trusted premium car dealership. Explore luxury and performance vehicles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
