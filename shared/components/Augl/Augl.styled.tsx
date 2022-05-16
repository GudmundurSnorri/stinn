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
  width: 728px;

  @media ${device.tablet} {
    width: unset;
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

  ${NOT_MAX_WIDTH};

  @media ${device.laptop} {
    justify-content: space-around;
    padding: 5rem 0rem;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`

const ListContentCard = styled.div<ListImageProps>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media ${device.mobile} {
    display: ${(p) => (p.noPhone ? 'none' : 'flex')};
    object-fit: contain;
    align-items: center;
  }
`

const ListContentText = styled.p<ListContentTextProps>`
  margin-bottom: 1rem;
  font-weight: 100;
  width: 100%;
  color: ${(p) => (p.hiddenText ? 'transparent' : '#000')};

  @media ${device.mobile} {
    padding-left: 2rem;
    width: auto;
  }
`

type ListContentTextProps = {
  hiddenText?: boolean
}

const ListImages = styled.img<ListImageProps>`
  margin-right: 2rem;
  margin-bottom: 5rem;

  height: 280px;

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
  flex-direction: column;
  align-items: center;
`
const BigAuglContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 65%;

  &:hover {
    cursor: pointer;
  }

  @media ${device.laptop} {
    align-items: center;
    padding: 0px;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

const BigAuglImage = styled.img`
  ${NOT_MAX_WIDTH};
  margin-top: 0px;
  width: 100%;
  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.tablet} {
    padding: 0px;
  }
`

const BigAuglText = styled.p`
  font-weight: 100;
  margin-left: 2rem;

  @media ${device.laptop} {
    width: 90%;
    margin-left: unset;
  }
  @media ${device.tablet} {
    padding: 0px;
  }
`

export {
  AuglContainer,
  AuglImage,
  AuglText,
  AuglContent,
  ListContentCard,
  ListContentText,
  ListContainer,
  ListImages,
  BigAuglContainer,
  BigAuglImage,
  BigAuglText,
  BigAuglContent,
}
