import './styles/globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch, Inter } from 'next/font/google'
import { MockProvider } from '@/providers/MockProvider'
import QueryProvider from '@/providers/QueryProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'

const chakraPetch = Chakra_Petch({
  variable: '--font-chakra-petch',
  subsets: ['latin'],
  weight: ['700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'JLF Blog',
  description: 'Blog do João Luiz Fernandes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${chakraPetch.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <QueryProvider>
            <MockProvider>
              <AppLayout>{children}</AppLayout>
            </MockProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
