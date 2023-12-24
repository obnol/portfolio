import './globals.css';
import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'longbo',
  description: 'Software engineer',
  icons: [],
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
      <link
        rel='icon'
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>"
      />
      <body className={GeistMono.className}>{children}</body>
    </html>
  );
}
