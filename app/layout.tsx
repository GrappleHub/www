import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrappleHub - Wrestling Tournament Tracking App',
  description: 'Track wrestling tournaments, matches, and athlete performance with GrappleHub. Record results, upload videos, and manage wrestler profiles.',
  keywords: 'wrestling, tournaments, app, tracking, sports, athlete management',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'GrappleHub - Wrestling Tournament Tracking App',
    description: 'Track wrestling tournaments, matches, and athlete performance',
    url: 'https://grapplehub.app',
    siteName: 'GrappleHub',
    images: [
      {
        url: 'https://grapplehub.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GrappleHub App',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrappleHub - Wrestling Tournament Tracking App',
    description: 'Track wrestling tournaments, matches, and athlete performance',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
