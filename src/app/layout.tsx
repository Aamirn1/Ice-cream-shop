import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://icecreamshop.example.com";

export const metadata: Metadata = {
  title: {
    default: "Ice Cream Shop | Where Every Scoop Tells a Story",
    template: "%s | Ice Cream Shop",
  },
  description:
    "🍦 Experience the creamiest, dreamiest ice cream in town. From classic scoops to indulgent sundaes — every bite is pure bliss. Order now for delivery or visit our parlor.",
  keywords: [
    "Ice Cream Shop",
    "ice cream parlor",
    "ice cream delivery",
    "sundaes",
    "ice cream cones",
    "gelato",
    "sorbet",
    "milkshakes",
    "frozen desserts",
    "artisan ice cream",
    "waffle cones",
    "ice cream tubs",
  ],
  authors: [{ name: "Ice Cream Shop" }],
  creator: "Ice Cream Shop",
  publisher: "Ice Cream Shop",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Ice Cream Shop | Where Every Scoop Tells a Story 🍦",
    description:
      "Experience the creamiest, dreamiest ice cream in town. From classic scoops to indulgent sundaes — every bite is pure bliss. Order now!",
    url: siteUrl,
    siteName: "Ice Cream Shop",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ice Cream Shop | Where Every Scoop Tells a Story 🍦",
    description:
      "Experience the creamiest, dreamiest ice cream in town. Classic scoops, indulgent sundaes — every bite is pure bliss.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden" suppressHydrationWarning>
      <head>
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#EC4899" />
        {/* WhatsApp link preview color */}
        <meta name="msapplication-TileColor" content="#1A0F1F" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans overflow-x-hidden`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
