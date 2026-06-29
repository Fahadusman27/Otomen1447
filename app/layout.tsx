import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Otomen1447 — Drive Your Dream, Seamlessly",
  description:
    "Premium automotive agency offering new car promotions, certified used cars, trade-in assistance, and auto financing. Trusted by 2,400+ satisfied clients.",
  keywords: "automotive agency, car dealership, new cars, certified used cars, auto financing, trade-in",
  openGraph: {
    title: "Otomen1447 — Drive Your Dream, Seamlessly",
    description:
      "Premium automotive experiences crafted with integrity. From thrilling new models to certified pre-owned excellence.",
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
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen bg-slate-950 antialiased font-outfit">
        {children}
      </body>
    </html>
  );
}
