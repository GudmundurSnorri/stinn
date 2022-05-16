import styled from 'styled-components'
import { device, NOT_MAX_WIDTH } from '../../styles.styled'

//
const Container = styled.section`
  ${NOT_MAX_WIDTH};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${device.laptop} {
    max-height: 215px;
  }

  @media ${device.tablet} {
    max-height: unset;
    flex-direction: column;
    align-items: flex-start;
    padding: 0rem 5rem;
  }
`
const ContainerCard = styled.div`
  margin-right: 5rem;
  max-width: 55rem;

  @media ${device.mobile} {
    margin: 2rem 0rem;
  }
`
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;

  @media ${device.mobile} {
    flex-direction: column;
  }
`

const AuglysingContainer = styled.div`
  padding: 0rem 5rem 0rem 5rem;

  &:hover {
    cursor: pointer;
  }
  @media ${device.laptop} {
    padding: 0rem;
  }
`
const AuglysingImage = styled.img`
  height: 280px;
  @media ${device.laptop} {
    max-height: 215px;
  }
`

const AuglysingText = styled.h6`
  font-weight: 300;
  font-size: 1rem;
`

export {
  AuglysingContainer,
  AuglysingImage,
  AuglysingText,
  Container,
  FlexContainer,
  ContainerCard,
}
