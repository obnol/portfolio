import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Epilogue } from 'next/font/google';

const epilogue = Epilogue({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://longbo.dev'),
  title: 'longbo',
  description: 'Software engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://longbo.dev',
    title: 'longbo',
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
  keywords: ['longbo', 'longbo qiu', 'qiu', 'software engineer', 'software developer', 'web developer', 'full stack developer'],
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
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
