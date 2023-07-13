import './globals.scss'
import { Ubuntu } from 'next/font/google'
import Layout from '../components/Layout.component'
import React, { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

const ubuntu = Ubuntu({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Portfolio',
  description: 'Personal web developer portfolio',
  icon: './favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body className={ubuntu.className}>
          <Layout>
            {children}
          </Layout>
          <Analytics />
      </body>
    </html>
  )
}
