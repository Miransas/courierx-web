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
  title: "CourierX — Self-hosted email API",
  description:
    "Send transactional emails from your own infrastructure. Open source, Resend-compatible API.",
  // Public klasöründeki ikonlarını buraya bağladık
  icons: {
    icon: "/favicon.ico", // Standart tarayıcı ikonu
    shortcut: "/favicon/icon.png", // Hızlı erişim ikonu
    apple: "/favicon/apple-touch-icon.png", // iOS için ikon
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