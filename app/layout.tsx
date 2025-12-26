import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'SciQus Platform',
    template: '%s | SciQus',
  },
  description: 'Modern analytics and management dashboard for SciQus Platform with real-time metrics and insights',
  keywords: ['dashboard', 'analytics', 'sciqus', 'management', 'platform', 'metrics'],
  authors: [{ name: 'SciQus Team' }],
  creator: 'SciQus',
  generator: 'Next.js',
  applicationName: 'SciQus Platform',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'SciQus Platform',
    description: 'Modern analytics and management dashboard for SciQus Platform',
    siteName: 'SciQus Platform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SciQus Platform',
    description: 'Modern analytics and management dashboard for SciQus Platform',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
