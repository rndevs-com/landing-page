import '@/assets/styles/global.scss'
import MainTemplate from '@/components/MainTemplate'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainTemplate>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-TPS9VSG"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </MainTemplate>
  )
}
