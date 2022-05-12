import * as S from './Augl.styled'
import Augl1 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_oruggtheimili.png'
import Augl2 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_heimamunir.png'
import Augl3 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_skiptuutgamla.png'
import Skipti from '../../assets/images/Ads/Skipti.png'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const ListaAugl = () => (
  <S.ListContainer>
    <Link href={CAMPAIGN_LINK}>
      <S.ListImages src={Augl1.src} />
    </Link>
    <Link href={CAMPAIGN_LINK}>
      <S.ListImages src={Augl2.src} noPhone />
    </Link>
    <S.ListImages src={Skipti.src} notCursor />
    <Link href={CAMPAIGN_LINK}>
      <S.ListImages src={Augl3.src} />
    </Link>
  </S.ListContainer>
)

export default ListaAugl
