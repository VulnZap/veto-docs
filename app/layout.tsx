import { RootProvider } from 'fumadocs-ui/provider/next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import './global.css';

const siteUrl = 'https://docs.runveto.com';
const description =
  'Open-source authorization layer for AI agents. Intercept, validate, and control every tool call before execution.';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Veto Docs',
    template: '%s | Veto Docs',
  },
  description,
  icons: {
    icon: '/veto-darkmode-icon.png',
    apple: '/veto-darkmode-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Veto Docs',
    title: 'Veto Docs — Authorization for AI Agents',
    description,
    url: siteUrl,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Veto — Control your AI agents' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veto Docs — Authorization for AI Agents',
    description,
    images: ['/og.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    other: {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION,
    },
  }),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Veto',
                  url: 'https://runveto.com',
                  logo: `${siteUrl}/veto-darkmode-icon.png`,
                  sameAs: ['https://github.com/VulnZap/veto-sdk'],
                },
                {
                  '@type': 'WebSite',
                  name: 'Veto Docs',
                  url: siteUrl,
                  description,
                  publisher: { '@type': 'Organization', name: 'Veto' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: `${siteUrl}/docs?q={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  name: 'Veto SDK',
                  applicationCategory: 'DeveloperApplication',
                  operatingSystem: 'Cross-platform',
                  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                  url: 'https://www.npmjs.com/package/veto-sdk',
                },
              ],
            }),
          }}
        />
        {process.env.NODE_ENV === 'development' && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
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
