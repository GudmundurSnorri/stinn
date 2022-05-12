import styled from "styled-components"
import { HEADING, MAIN_COLOR, PARAGRAPH } from "../../../../styles.styled"

// Hreyfiskynjari
const HreyfiskynjariContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${MAIN_COLOR};
  height: 100%;
`
const HreyfiskynjariContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  color: white;
  height: 100%;
`
const HreyfiskynjariHeader = styled.h2`
  ${HEADING};
  text-transform: uppercase;
  font-size: 4.8rem;
  line-height: 100%;
  margin: 0px;
`
const HreyfiskynjariDescription = styled.p`
  ${PARAGRAPH};
  padding: 2px;
`
const HreyfiskynjariButton = styled.a`
  background-color: white;
  width: fit-content;
  padding: .8rem 1.6rem;
  line-height: 160%;
  color: ${MAIN_COLOR};
  text-decoration: none;
  font-family: 'Poppins';
  font-size: 2rem;
`

export {
  HreyfiskynjariButton,
  HreyfiskynjariContainer,
  HreyfiskynjariContent,
  HreyfiskynjariDescription,
  HreyfiskynjariHeader,
}