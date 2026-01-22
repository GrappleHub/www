import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrappleHub - Wrestling Tournament Tracking App',
  description: 'Track wrestling tournaments, matches, and athlete performance with GrappleHub. Record results and manage wrestler profiles.',
  keywords: 'wrestling, tournaments, app, tracking, sports, athlete management',
  openGraph: {
    title: 'GrappleHub - Wrestling Tournament Tracking App',
    description: 'Track wrestling tournaments, matches, and athlete performance',
    url: 'https://grapplehub.app',
    siteName: 'GrappleHub',
    images: [
      {
        url: 'https://grapplehub.app/logo.png',
        width: 1024,
        height: 1024,
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
