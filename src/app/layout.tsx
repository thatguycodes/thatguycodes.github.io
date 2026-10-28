import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { personalInfo } from '@/data/portfolio';

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.tagline}`,
  description: personalInfo.bio,
  authors: [{ name: personalInfo.name }],
  metadataBase: new URL('https://thatguycodes.github.io'),
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.tagline}`,
    description: personalInfo.bio,
    url: 'https://thatguycodes.github.io',
    siteName: 'thatguycodes',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.tagline}`,
    description: personalInfo.bio,
    creator: '@thatguycodes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[var(--text-primary)] bg-[var(--bg-canvas)]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
