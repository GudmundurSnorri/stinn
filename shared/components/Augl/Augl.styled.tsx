import styled from 'styled-components'
import { device, NOT_MAX_WIDTH } from '../../styles.styled'

const AuglContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5rem 0rem;

  @media ${device.laptop} {
    justify-content: center;
  }
  @media ${device.mobile} {
    width: auto;
    padding: 0rem 2rem;
  }
`

const AuglContent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AuglText = styled.div`
  margin-bottom: 1rem;
  font-weight: 100;
  width: 100%;
`
const AuglImage = styled.div`
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

//LIST Auglýsignar
const ListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10rem 0rem;
  width: 100%;
  flex-wrap: wrap;

  ${NOT_MAX_WIDTH};

  @media ${device.laptop} {
    justify-content: space-around;
    padding: 5rem 0rem;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`
const ListImages = styled.img<ListImageProps>`
  margin-right: 2rem;
  margin-bottom: 5rem;

  &:hover {
    cursor: ${(p) => (p.notCursor ? 'auto' : 'pointer')};
  }
  @media ${device.laptop} {
    margin-right: 1rem;
  }

  @media ${device.mobile} {
    display: ${(p) => (p.noPhone ? 'none' : 'block')};
    padding: 1rem 0rem;
    margin: 2rem;
    object-fit: contain;
  }
`

type ListImageProps = {
  notCursor?: boolean
  noPhone?: boolean
}
// Big Augl
const BigAuglContainer = styled.div`
  display: flex;
  margin: 12rem 0rem;
  justify-content: center;
  width: 100%;
`
const BigAuglImage = styled.img`
  ${NOT_MAX_WIDTH};
  width: 90%;

  @media ${device.tablet} {
    padding: 0px;
  }
  @media ${device.tablet} {
  }
`

export {
  AuglContainer,
  AuglImage,
  AuglText,
  AuglContent,
  ListContainer,
  ListImages,
  BigAuglContainer,
  BigAuglImage,
}
