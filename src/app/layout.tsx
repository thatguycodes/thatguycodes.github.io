import type { Metadata } from 'next';
import './globals.css';
import { personalInfo } from '@/data/portfolio';

export const metadata: Metadata = {
  title: `${personalInfo.shortName} — ${personalInfo.jobTitle}`,
  description: personalInfo.bio || "Software engineer specializing in distributed systems, cloud architecture, and modern reactive frontends.",
  authors: [{ name: personalInfo.name }],
  metadataBase: new URL('https://thatguycodes.github.io'),
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: `${personalInfo.shortName} — ${personalInfo.jobTitle}`,
    description: "Software engineer specializing in distributed systems, cloud architecture, and modern reactive frontends.",
    url: 'https://thatguycodes.github.io',
    siteName: personalInfo.handle,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.shortName} — ${personalInfo.jobTitle}`,
    description: "Software engineer specializing in distributed systems, cloud architecture, and modern reactive frontends.",
    creator: `@${personalInfo.handle}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icon-192.png?v=2" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[var(--color-accent-blue)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
