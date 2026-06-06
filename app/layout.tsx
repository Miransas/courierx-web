import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/provider/theme-provider";

import { Header } from "../components/shared/header";
import Footer from "../components/shared/footer";


// Ana font: Modern, keskin ve pro bir SaaS havası için IBM Plex Sans
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

// Kod/Sistem fontu: Loglar ve API anahtarları için en okunaklı monospaced font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://courierx.io"),
  title: {
    default: "CourierX — Self-hosted email API for developers",
    template: "%s · CourierX",
  },
  description:
    "Send transactional emails from your own infrastructure. Open source, Resend-compatible API with a Postgres-backed queue and a worker you can self-host.",
  applicationName: "CourierX",
  authors: [{ name: "Sardor Azimov", url: "https://miransas.com" }],
  creator: "Sardor Azimov",
  publisher: "Miransas",
  keywords: [
    "email API",
    "transactional email",
    "self-hosted email",
    "open source email",
    "Resend alternative",
    "SES alternative",
    "developer email service",
    "email infrastructure",
    "CourierX",
    "Miransas",
  ],
  category: "developer tools",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://courierx.io",
    siteName: "CourierX",
    title: "CourierX — Self-hosted email API for developers",
    description:
      "Send transactional emails from your own infrastructure. Open source, Resend-compatible API.",
  },

  twitter: {
    card: "summary_large_image",
    title: "CourierX — Self-hosted email API for developers",
    description:
      "Open source email API. Drop-in Resend-compatible. Postgres-backed queue. Self-host in 5 minutes.",
    creator: "@sardorazimov",
    site: "@miransas",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon/icon.png",
    apple: "/favicon/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://courierx.io",
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
      className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="h-full flex flex-col font-sans bg-black text-gray-100 selection:bg-brand/20 selection:text-brand">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          forcedTheme="dark"   
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}