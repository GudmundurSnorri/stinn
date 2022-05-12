import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2XM5E92JM2`}
        id="TagManager"
      />
      <Script strategy="lazyOnload" id="TagManagerscript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2XM5E92JM2'); 
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
