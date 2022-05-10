import styled from 'styled-components'
import { device } from '../../styles.styled'

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
`

const AuglContent = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
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

  @media ${device.laptop} {
    justify-content: space-around;
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

  @media ${device.mobile} {
    padding: 2rem 0rem;
  }
`

type ListImageProps = {
  notCursor?: boolean
}
// Big Augl
const BigAuglContainer = styled.div`
  display: flex;
  margin: 12rem 0rem;
  justify-content: center;
`
const BigAuglImage = styled.img`
  width: 100%;
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
