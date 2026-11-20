import type { Metadata } from 'next';
import './globals.css';
import { personalInfo } from '@/data/portfolio';

export const metadata: Metadata = {
  title: `${personalInfo.shortName} — ${personalInfo.jobTitle}`,
  description: personalInfo.bio || "Software engineer specializing in distributed systems, cloud architecture, and modern reactive frontends.",
  authors: [{ name: personalInfo.name }],
  metadataBase: new URL('https://thatguycodes.github.io'),
  icons: {
    icon: '/favicon.svg',
  },
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
