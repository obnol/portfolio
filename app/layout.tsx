import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.obnol.com"),
  title: {
    default: "obnol.com",
    template: "%s | obnol.com",
  },
  description: "software engineer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.obnol.com",
    title: "obnol",
    description: "software engineer",
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
  keywords: ["obnol", "longbo", "longbo qiu", "software engineer", "software developer", "web developer", "full stack developer"],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistMono.className}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-J4B9Q9N533" strategy="afterInteractive" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J4B9Q9N533');
          `}
      </Script>
      <body className="antialiased tracking-tight">
        <div className="flex flex-col min-h-screen p-8 md:pt-16">
          <main className="max-w-2xl mx-auto w-full space-y-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
