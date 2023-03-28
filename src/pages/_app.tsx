import '@/assets/styles/global.scss'
import MainTemplate from '@/components/MainTemplate'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  )
}
