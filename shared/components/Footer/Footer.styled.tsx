import styled from 'styled-components'
import { device, LOGOSTYLES } from '../../styles.styled'

const Container = styled.div`
  position: relative;
  background-color: #000;
  display: flex;
  justify-content: flex-start;
  padding: 5.8rem 6.4rem 6.2rem 6.4rem;

  @media ${device.laptop} {
    padding: 5.8rem 0rem;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`
const ContainerCard = styled.div`
  width: 28rem;
  margin-left: 5rem;
  margin-right: 2rem;
`
const LogoContainer = styled.div`
  display: flex;
  place-items: center;
`
const LogoText = styled.h1`
  ${LOGOSTYLES};
  color: white;
`
const TextContainer = styled.div`
  font-size: 1.8rem;
  padding: 0.5rem;
`
const TextSubtitle = styled.h6`
  font-weight: bold;
  color: white;
  margin: 0.5rem 0rem 0rem 0rem;
`
const TextParagraph = styled.p`
  color: white;
  padding-right: 2rem;
  font-weight: 200;
  line-height: 160%;
  margin: 1rem 0rem;
`

export {
  Container,
  ContainerCard,
  LogoContainer,
  TextContainer,
  TextParagraph,
  TextSubtitle,
  LogoText,
}
