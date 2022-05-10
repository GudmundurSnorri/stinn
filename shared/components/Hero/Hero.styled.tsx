import styled from 'styled-components'

import { device, HEADING, MAIN_COLOR, NOT_MAX_WIDTH } from '../../styles.styled'

const HeroBackground = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${NOT_MAX_WIDTH}

  @media ${device.tablet} {
    align-items: flex-start;
  }
`

const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 812px;
  object-position: 75%;

  @media ${device.tablet} {
    height: 100%;
    object-position: center;
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

const HeroText = styled.h1`
  font-size: 12rem;
  padding: 3rem 2rem;
  margin: 0rem;
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
    padding: 3rem 2rem;
    font-size: 12rem;
  }

  @media ${device.mobile} {
    padding: 3rem 2rem;
    font-size: 8rem;
  }
`

export { HeroBackground, HeroImage, HeroText, HeroTextContainer }
