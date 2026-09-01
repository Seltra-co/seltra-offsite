import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://offsite.seltra.co"),
  title: "Seltra Offsite 2026 — Emergence",
  description:
    "Building autonomous commerce for the next million merchants. Seltra Offsite 2026 · Emergence.",
  applicationName: "Seltra Offsite",
  keywords: [
    "Seltra",
    "Offsite",
    "Emergence",
    "Commerce",
    "Merchants",
    "2026",
  ],
  icons: {
    icon: "/ICON_large.png",
    shortcut: "/ICON_large.png",
    apple: "/ICON_large.png",
  },
  openGraph: {
    title: "Seltra Offsite 2026 — Emergence",
    description:
      "Building autonomous commerce for the next million merchants. Seltra Offsite 2026 · Emergence.",
    url: "https://offsite.seltra.co",
    siteName: "Seltra Offsite",
    images: [
      {
        url: "/offsite1.png",
        width: 1200,
        height: 1200,
        alt: "Seltra Offsite 2026 — Emergence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seltra Offsite 2026 — Emergence",
    description:
      "Building autonomous commerce for the next million merchants. Seltra Offsite 2026 · Emergence.",
    images: ["/offsite1.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
