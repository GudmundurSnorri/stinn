import styled from 'styled-components'
import { device, MAIN_COLOR, PARAGRAPH } from '../../styles.styled'

const CIContainer = styled.div`
  position: relative;
  display: flex;
  place-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 20rem;

  @media ${device.tablet} {
    flex-direction: column-reverse;
    margin-bottom: 10rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }

  @media ${device.laptop} {
    flex-direction: row;
    overflow-y: scroll;
    margin: 0px;
    padding: 0px;
  }
`

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const ImageColumn2 = styled(ImageColumn)`
  transform: translateY(100px);

  @media ${device.laptop} {
    transform: translateY(0);
  }
`

const Image = styled.img`
  height: 34.4rem;
  width: 34.4rem;
  position: absolute;

  @media ${device.laptop} {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
`

const ImageText = styled.p`
  font-size: 1.6rem;
  padding: 0.8rem 3.2rem 0.8rem 2rem;
  background-color: ${MAIN_COLOR};
  position: absolute;
  color: white;
`

const ImageAndTextContainer = styled.div`
  position: relative;
  height: 34.4rem;
  min-width: 34.4rem;
  padding: 1.5rem;
  width: 100%;

  @media ${device.laptop} {
    margin: 0rem 2rem;
    padding: 0rem;
  }
`

const TextContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;

  @media ${device.laptop} {
    width: 100%;
    margin: 5rem 0rem;
    padding: 0rem 3rem;
  }
`
const TextHeader = styled.h2`
  font-weight: 600;
  font-size: 4.8rem;
  margin: 0px;
  padding: 0px;
  color: ${MAIN_COLOR};
  text-transform: uppercase;
  letter-spacing: -0.4rem;
`
const TextPill = styled.h5`
  font-weight: 200;
  font-size: 3.2rem;
  margin: 0px;
  padding: 1rem 0rem;
`
const TextDescription = styled.p`
  width: 90%;
  padding-bottom: 1rem;
  font-weight: 300;
  line-height: 168%;
  ${PARAGRAPH};

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`

const TextButton = styled.a`
  width: fit-content;
  border: none;
  background-color: ${MAIN_COLOR};
  color: white;
  font-weight: 400;
  padding: 0.8rem 1.6rem;
  border-radius: 0.1rem;
  font-size: 2.5rem;
  text-decoration: none;
`

const ScrollableContainer = styled.div`
  display: none;
  overflow-y: scroll;
  overflow-x: none;
  width: 100%;

  @media ${device.laptop} {
    display: flex;
  }
`
export {
  CIContainer,
  Image,
  TextContainer,
  TextHeader,
  TextPill,
  TextDescription,
  TextButton,
  ImageContainer,
  ImageColumn,
  ImageColumn2,
  ImageAndTextContainer,
  ImageText,
  ScrollableContainer,
}
