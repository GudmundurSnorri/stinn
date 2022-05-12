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
import auglimg from '../shared/assets/images/Ads/efstaaugl.png'
import Hreyfi from '../shared/assets/images/Ads/Hreyfiskynjarar_long.png'
import Sumarbustadur from '../shared/assets/images/Ads/sumarbustadur.png'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Akkordeon';
    src: url('/Fonts/Akkordeon-Eleven.otf');
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
      <link
        href="../shared/assets/fonts/Akkordeon-Eleven.otf"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <Head>
        <title>Stéttarfélag Innbrotsþjófa</title>
        <meta name="description" content="Stéttarfélag í þágu Innbrotsfjófa" />
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
