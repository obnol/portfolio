import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Epilogue } from 'next/font/google';

const epilogue = Epilogue({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://obnol.com'),
  title: 'obnol',
  description: 'Software engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://obnol.com',
    title: 'obnol',
    description: 'Software engineer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: ['longbo', 'longbo qiu', 'obnol', 'software engineer', 'software developer', 'web developer', 'full stack developer'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-J4B9Q9N533' strategy='afterInteractive' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J4B9Q9N533');
          `}
      </Script>
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
