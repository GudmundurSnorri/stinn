import styled from 'styled-components'

import {
  device,
  MAIN_COLOR,
  MAIN_FONT,
  NOT_MAX_WIDTH,
  PARAGRAPH,
} from '../../styles.styled'

const Container = styled.div`
  display: flex;
  ${NOT_MAX_WIDTH}
  @media ${device.tablet} {
    flex-direction: column;
  }
`
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  place-items: center;
  justify-content: center;
`
const Image = styled.img`
  width: 100%;
`

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 5rem;

  @media ${device.tablet} {
    padding: 0rem;
  }
`
const TextHeader = styled.h2`
  font-size: 5rem;
  padding-right: 10rem;
  color: ${MAIN_COLOR};
  ${MAIN_FONT};
  text-transform: uppercase;

  @media ${device.laptop} {
    margin: 2rem 0rem;
    padding-right: 5rem;
    font-size: 7rem;
  }

  @media ${device.mobile} {
    margin: 2rem 0rem;
    padding-right: 0rem;
    font-size: 7rem;
  }
`
const TextContent = styled.div`
  padding: 0rem 10rem 0rem 0rem;

  @media ${device.laptopL} {
    padding: 0rem 10rem 0rem 0rem;
  }
`
const TextDescription = styled.p`
  ${PARAGRAPH};
  line-height: 160%;
`
const TextList = styled.ul`
  @media ${device.laptop} {
    padding: 0rem;
    margin: 0rem;
  }
`
const TextItem = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;

  @media ${device.laptop} {
    list-style: none;
    font-weight: 500;
    font-size: 2rem;
    padding: 1rem 0rem;
  }
`

export {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  TextContent,
  TextHeader,
  TextDescription,
  TextList,
  TextItem,
}
