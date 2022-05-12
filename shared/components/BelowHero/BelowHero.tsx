import styled from 'styled-components'
import * as S from './BelowHero.styled'
import Hreyfiskynjari from './Components/Hreyfiskynjari'
import Sumarfri from './Components/Sumarfri'
import pic from '../../assets/images/Ads/LargerThanLife/Ad_336x280_fri.webp'

const BelowHero = () => (
  <S.Container>
    <S.FlexContainer>
      <S.ContainerCard>
        <Hreyfiskynjari />
      </S.ContainerCard>
      <S.ContainerCard>
        <Sumarfri />
      </S.ContainerCard>
    </S.FlexContainer>
    <S.AuglysingContainer>
      <S.AuglysingText>Auglýsing</S.AuglysingText>
      <S.AuglysingImage src={pic.src} alt="Áhyggjulaus í fríið með Nova" />
    </S.AuglysingContainer>
  </S.Container>
)

export default BelowHero
