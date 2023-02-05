import '@/styles/globals.css'
// import GlobalStyles from '../styles/GlobalStyles'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GlobalStyles /> */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://unpkg.com/tailwindcss@3.1.8/src/css/preflight.css"
      />
      <Component {...pageProps} />
    </>
  )
}
