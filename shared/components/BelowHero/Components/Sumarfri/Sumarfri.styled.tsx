import styled from 'styled-components'
import vacay from '../../../../assets/images/Ads/LargerThanLife/skier-mature-man-on-40s-600w-63754225.webp'
import { HEADING, PARAGRAPH } from '../../../../styles.styled'

const SumarfriContainer = styled.div`
  background-color: aliceblue;
  width: 100%;
  background-image: url(${vacay.src});
  background-size: cover;
  height: 100%;
`
const SumarfriContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  color: white;
`
const SumarfriHeader = styled.h2`
  ${HEADING};
  text-shadow: 2px 2px 15px rgba(0,0,0,0.4);
  text-transform: uppercase;
  font-size: 4.8rem;
  line-height: 100%;
  margin: 0px;
`
const SumarfriDescription = styled.p`
  ${PARAGRAPH};
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 1);
  font-size: 2.4rem;
  line-height: 120%;
  padding: 2px;
`
const SumarfriButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
const SumarfriButtons = styled.div`
  margin: 0rem 0.5rem;
  cursor: pointer;
`

export {
  SumarfriButtonContainer,
  SumarfriButtons,
  SumarfriContainer,
  SumarfriContent,
  SumarfriDescription,
  SumarfriHeader,
}
