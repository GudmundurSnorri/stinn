import styled from "styled-components";
import { MAIN_COLOR } from "../../styles.styled";

const HeaderContainer = styled.section`
  display: flex;
  width: 100%;
  height: 14.4rem;
  align-items: center;
  justify-content: space-between;

`;

const Image = styled.div`
  display: flex;
  place-items: center;
`;
const Header = styled.h1`
  width: 100px;
  padding-left: 2rem;
  font-weight: 700;
  line-height: 1.2;
  font-size: 2.6rem;
`;

const ListHeading = styled.ul`
  display: flex;
  list-style: none;
`;

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

`;

export { HeaderContainer, Image, Header, ListHeading, ListItem };
