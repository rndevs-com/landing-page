import Head from 'next/head'
import { Inter } from '@next/font/google'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

const inter = Inter({
  weight: ['300', '400', '800'],
  subsets: ['latin'],
  display: 'swap',
})

interface MainTemplateProps {
  children: ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Head>
        <title>Odwrócony job board dla React Native Developerów</title>
        <meta
          name="description"
          content="Otrzymuj spersonalizowane oferty dopasowane do Twojego profilu, które spełnią Twoje oczekiwania, decyduj o podjęciu współpracy i znajdź idealną pracę w 
React Native w krótkim czasie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#61DAFB" />
        <meta name="msapplication-TileColor" content="#61DAFB" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className={`${inter.className} font-sans`}>{children}</main>
      <Footer />
    </>
  )
}

export default MainTemplate
