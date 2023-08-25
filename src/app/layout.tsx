import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchInput from "./components/SearchInput"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'A weather app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-full pt-8 px-5"> 
        <SearchInput />
        {children}</div></body>
    </html>
  )
}
