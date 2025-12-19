import React from 'react';
import '../styles/index.css';
import { Quattrocento } from 'next/font/google';

const quattrocento = Quattrocento({
  subsets: ['latin'],
  weight: ['400', '700'], // обычный и жирный
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'V&V consulting',
  description: 'V&V consulting',
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
    <html lang="ua">
      <body className={quattrocento.className}>
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbuddhasa1071back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}
