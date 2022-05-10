import styled from 'styled-components'
import { device, HEADING, MAIN_COLOR } from '../../styles.styled'

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 50px 1fr;
  grid-template-rows: 1fr;
  background-color: ${MAIN_COLOR};
  grid-template-areas: 'Text nothing image';

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
  }
`
const TextContainer = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  grid-area: Text;
`
const TextContent = styled.div`
  padding: 0rem 5rem;
  margin: 0rem;
  color: white;
`
const TextSubtitles = styled.h6`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`
const TextHeader = styled.h1`
  font-size: 6.4rem;
  text-transform: uppercase;
  margin: 0rem 0rem 5rem 0rem;
  ${HEADING};

  padding-right: 15rem;
  letter-spacing: 0.2rem;
  @media ${device.laptop} {
    padding-right: 5rem;
  }
`
const TextDescription = styled.p`
  font-size: 2rem;
  line-height: 160%;
  font-weight: 200;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`
const ImageContainer = styled.div`
  padding: 2rem 0rem;
  grid-area: image;
  display: flex;
  justify-content: center;
`
const Image = styled.img`
  width: 100%;
`

export {
  Container,
  TextContainer,
  TextContent,
  TextSubtitles,
  TextHeader,
  TextDescription,
  ImageContainer,
  Image,
}
