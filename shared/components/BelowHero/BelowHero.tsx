import Link from 'next/link'
import * as S from './BelowHero.styled'
import Hreyfiskynjari from './Components/Hreyfiskynjari'
import Sumarfri from './Components/Sumarfri'
import pic from '../../assets/images/Ads/LargerThanLife/Ad_336x280_fri.webp'
import { CAMPAIGN_LINK } from '../../styles.styled'

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
    <Link href={CAMPAIGN_LINK}>
      <S.AuglysingContainer>
        <S.AuglysingText>Auglýsing</S.AuglysingText>
        <S.AuglysingImage src={pic.src} alt="Áhyggjulaus í fríið með Nova" />
      </S.AuglysingContainer>
    </Link>
  </S.Container>
)

export default BelowHero
