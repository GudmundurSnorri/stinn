import styled from 'styled-components'
import { device, NOT_MAX_WIDTH } from '../../styles.styled'

//
const Container = styled.section`
  ${NOT_MAX_WIDTH};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-height: 310px;
`
const ContainerCard = styled.div`
  margin-right: 5rem;
  max-width: 55rem;
`
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`

const AuglysingContainer = styled.div`
  padding: 0rem 5rem 0rem 5rem;
  @media ${device.laptop} {
    padding: 0rem;
  }

  @media ${device.tablet} {
  }
`
const AuglysingText = styled.h6`
  font-weight: 300;
  font-size: 1rem;
`

export {
  AuglysingContainer,
  AuglysingText,
  Container,
  FlexContainer,
  ContainerCard,
}
