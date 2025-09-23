import type React from "react";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { StructuredData } from "@/components/structured-data";
import { Suspense } from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jermanus - Fullstack Developer",
  description:
    "Portfolio of Jermanus, a passionate fullstack developer crafting modern web experiences with cutting-edge technologies.",
  keywords: [
    "Jermanus",
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Frontend",
    "Backend",
    "Software Engineer",
  ],
  authors: [{ name: "Jermanus" }],
  creator: "Jermanus",
  metadataBase: new URL("https://portfolio.uzika.me/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.uzika.me/",
    title: "Jermanus - Fullstack Developer",
    description:
      "Portfolio of Jermanus, a passionate fullstack developer crafting modern web experiences.",
    siteName: "Jermanus Portfolio",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Jermanus - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jermanus - Fullstack Developer",
    description:
      "Portfolio of Jermanus, a passionate fullstack developer crafting modern web experiences.",
    creator: "@jermanus",
    images: ["/apple-touch-icon.png"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  generator: "Next.js",
  applicationName: "FUTURE-TECH",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="ky44ivHxu3pDONWgPIDzlvAx294xPMSYCMn3r9DA0GQ" />
        <StructuredData />
      </head>
      <body
        className={`font-sans ${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors position="top-right" />
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
