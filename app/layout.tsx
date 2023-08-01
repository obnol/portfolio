import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'longbo',
  description: 'Software engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font-mono'>{children}</body>
    </html>
  );
}
