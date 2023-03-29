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
React Native w krótkim czasie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${inter.className} font-sans`}>{children}</main>
      <Footer />
    </>
  )
}

export default MainTemplate
