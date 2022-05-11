import styled from 'styled-components'
import {
  LOGOSTYLES,
  MAIN_COLOR,
  device,
  NOT_MAX_WIDTH,
} from '../../styles.styled'

const HeaderContainer = styled.section`
  display: flex;
  width: 100%;
  height: 14.4rem;
  align-items: center;
  justify-content: space-between;
  ${NOT_MAX_WIDTH}
  @media ${device.laptop} {
    width: auto;
  }
`

const Image = styled.div`
  display: flex;
  place-items: center;
`
const Header = styled.h1`
  ${LOGOSTYLES};
  font-size: 4rem;
`

const ListHeading = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.laptop} {
    display: none;
  }
`

const ListItem = styled.a`
  margin: 0px 3rem;
  font-size: 2.4rem;
  font-weight: 500;
  text-decoration: none;

  &:hover,
  &:active,
  &:visited {
    color: black;
  }
`

export { HeaderContainer, Image, Header, ListHeading, ListItem }
