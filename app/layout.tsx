import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import './global.css';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.runveto.com'),
  title: {
    default: 'Veto Docs',
    template: '%s | Veto Docs',
  },
  description: 'The permission layer for AI agents. Intercept, validate, and control every tool call.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Veto Docs',
    title: 'Veto Docs',
    description: 'The permission layer for AI agents. Intercept, validate, and control every tool call.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            attribute: 'class',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
