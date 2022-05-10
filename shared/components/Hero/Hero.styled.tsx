import styled from 'styled-components'

import { device, HEADING, MAIN_COLOR } from '../../styles.styled'

const HeroBackground = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
`

const HeroImage = styled.img`
  width: 100%;
  overflow: hidden;
  object-fit: fit;
  position: absolute;
  height: 812px;
  object-position: right;

  @media ${device.laptop} {
    height: 100%;
    object-fit: cover;
    object-position: 75% 25%;
  }
`

const HeroText = styled.h1`
  font-size: 8rem;
  padding: 0rem 2rem;
  margin: 0px;
  background-color: ${MAIN_COLOR};
  color: white;
  width: fit-content;
  text-transform: uppercase;
  ${HEADING};

  & > span {
    text-decoration: underline;
    text-underline-offset: 0.2rem;
  }

  @media ${device.laptop} {
    padding: 2rem 2rem;
    font-size: 8rem;
    object-fit: contain;
  }
`
const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12.4rem 7rem;
  position: absolute;
  z-index: 2;
  width: 40%;

  @media ${device.laptop} {
    width: 80%;
    margin: 10rem 4rem;
  }
`

export { HeroBackground, HeroImage, HeroText, HeroTextContainer }
