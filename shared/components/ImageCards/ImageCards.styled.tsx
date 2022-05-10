import styled from 'styled-components'
import {
  device,
  MAIN_COLOR,
  MAIN_FONT,
  NOT_MAX_WIDTH,
  PARAGRAPH,
} from '../../styles.styled'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  ${NOT_MAX_WIDTH};

  @media ${device.tablet} {
    justify-content: flex-start;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  width: 45rem;

  margin-bottom: 10rem;
  @media ${device.laptop} {
    margin-right: 5rem;
  }
  @media ${device.mobile} {
    width: 100%;
    margin: 2rem 0rem;
  }
`

const CardImage = styled.img`
  display: flex;
  height: 45rem;
  width: 45rem;
  @media ${device.laptop} {
    width: 100%;
    object-fit: cover;
  }
`
const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  height: 100%;
  justify-content: space-evenly;
  @media ${device.laptop} {
    padding: 0rem;
  }
`
const CardTextHeader = styled.h2`
  color: ${MAIN_COLOR};
  font-size: 5.6rem;
  padding-left: 2rem;
  text-transform: uppercase;
  line-height: 100%;
  margin: 1rem 0rem 1rem 0rem;
  ${MAIN_FONT};
  letter-spacing: 0.2rem;

  @media ${device.laptop} {
    margin: 3rem 0rem 0rem 0rem;
    font-size: 4rem;
  }
`
const CardTextDescription = styled.p`
  ${PARAGRAPH};
  padding-left: 2rem;
  margin: 4rem 0rem;
  color: #000000;
  font-weight: 300;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`

// AAADS
const AdsWithTextContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0rem;

  @media ${device.mobile} {
    display: flex;
  }
`

const AdsWithTextDescription = styled.p``
const AdsWithTextImage = styled.img``

export {
  CardContainer,
  CardImage,
  CardTextContainer,
  CardTextDescription,
  CardTextHeader,
  Card,
  AdsWithTextContainer,
  AdsWithTextDescription,
  AdsWithTextImage,
}
