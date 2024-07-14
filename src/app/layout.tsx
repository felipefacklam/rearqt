import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const lumin = localFont({src: '../fonts/LunarSans.otf'})

export const metadata: Metadata = {
  title: 'Rearqt',
  description: "Portifólio de Renata d'Avila",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={lumin.className}>{children}</body>
    </html>
  )
}