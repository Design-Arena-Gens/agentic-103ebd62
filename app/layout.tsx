import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'H&H Fragrances | Luxury Perfume Experience',
  description:
    'Discover the signature scents of H&H Fragrances. A premium olfactory journey crafted with rare ingredients and timeless elegance.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
