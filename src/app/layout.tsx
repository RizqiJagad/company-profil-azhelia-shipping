import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://azheliashipping.com'),
  title: {
    default: 'AZHELIA SHIPPING - Maritime Recruitment & Crew Management',
    template: '%s | AZHELIA SHIPPING',
  },
  description:
    'Professional maritime recruitment and crew management company connecting skilled seafarers with international shipowners.',
  keywords: [
    'maritime recruitment indonesia',
    'crew management jakarta',
    'seafarer jobs',
    'shipping company',
    'crew recruitment',
    'STCW seafarers',
  ],
  authors: [{ name: 'AZHELIA SHIPPING' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azheliashipping.com',
    siteName: 'AZHELIA SHIPPING',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AZHELIA SHIPPING',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZHELIA SHIPPING',
    description: 'Professional maritime recruitment and crew management',
    images: ['/twitter-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
