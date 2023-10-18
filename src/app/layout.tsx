import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav/page'
import Footer from './components/Footer/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VercelNextjs',
  description: 'Create by me.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Nav/>
          {children}
        <Footer/>
        </body>
      
    </html>
  )
}
