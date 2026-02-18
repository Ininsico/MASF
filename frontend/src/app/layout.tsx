import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://masfpakistan.org"),
  title: {
    default: "MASF - Medical & Social Family",
    template: "%s | MASF",
  },
  description: "Official website of Medical & Social Family (MASF). Dedicated to serving humanity through healthcare, education, and social welfare initiatives across Pakistan.",
  keywords: ["MASF", "Medical & Social Family", "Non-Profit Organization", "Charity Pakistan", "Free Medical Camps", "Education Scholarships", "Social Welfare", "Ramadan Ration", "Thrift Drive"],
  authors: [{ name: "Medical & Social Family", url: "https://masfpakistan.org" }],
  creator: "MASF Tech Team",
  publisher: "Medical & Social Family",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masfpakistan.org",
    title: "MASF - Medical & Social Family",
    description: "Empowering communities through healthcare, education, and social welfare. Join us in making a difference.",
    siteName: "Medical & Social Family",
    images: [
      {
        url: "/bgmasf.png", // Using main logo/background as default OG image
        width: 1200,
        height: 630,
        alt: "MASF - Medical & Social Family Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MASF - Medical & Social Family",
    description: "Serving humanity through healthcare, education, and social welfare across Pakistan.",
    images: ["/bgmasf.png"],
    creator: "@masfpk",
  },
  icons: {
    icon: "/fav512.png",
    shortcut: "/fav512.png",
    apple: "/fav512.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/fav512.png",
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${jakartaSans.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
