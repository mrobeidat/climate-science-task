import '../styles/globals.css'
import '../styles/scss/images.scss'

import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Frame13 from '../components/Frame13'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}


