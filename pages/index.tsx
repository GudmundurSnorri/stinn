import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/Header'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import Augl, { BigAugl, ListaAugl, ListAugl } from '../shared/components/Augl'
import Hero from '../shared/components/Hero/Hero'
import ContentImage from '../shared/components/ContentImage'
import Bitcoin from '../shared/components/Bitcoin/Bitcoin'
import { createGlobalStyle } from 'styled-components'
import LargeImageWithText from '../shared/components/LargeImageWithText'
import ImageCardContainer from '../shared/components/ImageCards/'
import LowerImageCard from '../shared/components/LowerImageCard'
import Footer from '../shared/components/Footer'
import { device } from '../shared/styles.styled'
import BelowHero from '../shared/components/BelowHero'
import auglimg from '../shared/assets/images/Ads/LargerThanLife/Ad_728x90_heimaoryggi.webp'
import Hreyfi from '../shared/assets/images/Ads/LargerThanLife/Ad_728x90_hreyfiskynjari.webp'
import Sumarbustadur from '../shared/assets/images/Ads/LargerThanLife/Ad_728x90_sumarbustadur.webp'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Akkordeon";
  src: url("/Fonts/Akkordeon-Eleven.otf");
}

  html {
    font-size: 10px;
    scroll-behavior: smooth;
    @media ${device.laptopL} {
      font-size: 8px;
    }
    @media ${device.laptop} {
      font-size: 6px;
    }
  }
`

const Home: NextPage = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <Head>
        <link
          rel="preload"
          href="/fonts/Akkordeon-Eleven.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <title>Stéttarfélag Innbrotsþjófa</title>
        <meta
          name="description"
          content="Stéttarfélag Innbrotsþjófa. Stéttarfélag í þágu innbrotsþjófa. Við megum ekki gleymast!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Normalize />
      <GlobalStyle />
      <Main>
        <Header />
        <Augl img={auglimg} />
        <Hero />
        <BelowHero />
        <Augl img={Hreyfi} />
        <ContentImage />
        <Augl img={Sumarbustadur} />
        <Bitcoin />
        <ListaAugl />
        <LargeImageWithText />
        <BigAugl />
        <ImageCardContainer />
        <ListAugl />
        <LowerImageCard />
        <Footer />
      </Main>
    </div>
  )
}

export default Home

const Main = styled.main`
  position: relative;
  font-family: 'Poppins', sans-serif;
`
