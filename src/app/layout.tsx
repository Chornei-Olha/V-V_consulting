import React from 'react';
import '../styles/index.css';
import { Montserrat } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-main',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://trivista-consulting.com.ua'),
  icons: {
    icon: [{ url: '/favicon.webp' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={montserrat.variable}>
        {/* Google tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18143116631"
          strategy="afterInteractive"
        />

        <Script id="gtag" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-18143116631');
    `}
        </Script>
        {children}
        <Script
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbuddhasa1071back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
