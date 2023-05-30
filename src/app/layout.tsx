import { Metadata } from 'next'
import { ReduxProvider } from './store/provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/widgets'
import { Container } from '@/shared'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ETV-blog',
  description: 'This full stack application developed for the learn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          <main>
            <Container>{children}</Container>
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
