import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Altitude Aerials | Drone Photography & Videography",
  description:
    "Professional drone photography and cinematic videography serving Central Alberta. Real estate, agriculture, commercial, construction, and promotional aerial media.",
  keywords: [
    "Drone Photography",
    "Drone Videography",
    "Central Alberta",
    "Real Estate Drone",
    "Commercial Drone",
    "Construction Drone",
    "Agriculture Drone",
    "Stettler",
    "Red Deer",
    "Alberta",
  ],
  authors: [{ name: "Altitude Aerials" }],

  openGraph: {
    title: "Altitude Aerials",
    description:
      "Professional drone photography and videography across Central Alberta.",
    url: "https://altitudeaerials.ca",
    siteName: "Altitude Aerials",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Altitude Aerials",
    description:
      "Professional drone photography and videography across Central Alberta.",
    images: ["/images/hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}