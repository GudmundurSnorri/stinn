import styled from 'styled-components'
import pic from '../../assets/images/Crypto-IMG.png'
import { device, MAIN_COLOR, PARAGRAPH } from '../../styles.styled'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${MAIN_COLOR};
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
`
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  place-items: center;
  width: 100%;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  text-align: left;

  @media ${device.laptopL} {
    padding: 4rem 4rem;
    width: 100%;
  }
  @media ${device.laptop} {
    width: 100%;
    padding: 4rem 4rem;
  }
`

const TextHeader = styled.h2`
  font-size: 5.4rem;
  font-family: 'akkordeon';
  color: white;
  text-transform: uppercase;
  margin: 0px;

  @media ${device.laptop} {
    padding-right: 12rem;
  }
`
const TextDescription = styled.p`
  ${PARAGRAPH};
  line-height: 160%;
  padding: 0rem 1rem;
  font-weight: 300;
  color: white;
`
const ImageContainer = styled.div``
const Image = styled.img`
  width: 100%;
`

Image.defaultProps = {
  src: pic.src,
}

export {
  Container,
  TextContainer,
  TextHeader,
  TextDescription,
  Image,
  ImageContainer,
  TextContent,
}
