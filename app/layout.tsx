import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { NavbarDemo } from '@/components/navBar'

const _roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Paulo Victor | Desenvolvedor Full-Stack',
  description: 'Desenvolvedor Full-Stack focado em criar experiencias digitais modernas, performaticas e escalaveis.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e202e',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <NavbarDemo/>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
