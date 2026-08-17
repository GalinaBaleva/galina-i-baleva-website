import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://galina-baleva.com"),
  title: "Galina Baleva - Full-Stack Developer · AI Integrator · SEO/GEO Specialist",
  description: "Full-Stack Developer, AI Integrator & SEO/GEO Specialist based in Vienna. Building scalable web apps, integrating AI solutions, optimising for search.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Galina Baleva",
    title: "Galina Baleva - Full-Stack Developer · AI Integrator · SEO/GEO Specialist",
    description: "Full-Stack Developer, AI Integrator & SEO/GEO Specialist based in Vienna.",
    images: [{ url: "/galina.jpg", width: 800, height: 800, alt: "Galina Baleva" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galina Baleva - Full-Stack Developer · AI Integrator",
    description: "Full-Stack Developer, AI Integrator & SEO/GEO Specialist based in Vienna.",
    images: ["/galina.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EVEBQJCBHG" strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EVEBQJCBHG');
        `}</Script>
      </body>
    </html>
  );
}
