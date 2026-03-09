import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Italian Fluency',
  description: 'Professional Italian language learning platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-900 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
