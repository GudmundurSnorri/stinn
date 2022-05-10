import * as S from './Augl.styled'
import Sokkabuxur from '../../assets/images/Ads/sokkabuxur.png'
import Augl2 from '../../assets/images/Ads/Verdutinaheimamuni.png'
import Augl3 from '../../assets/images/Ads/Skiptuutgamlakerfinu.png'
import Skipti from '../../assets/images/Ads/Skipti.png'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const ListaAugl = () => (
  <S.ListContainer>
    <S.ListImages src={Sokkabuxur.src} notCursor />
    <Link href={CAMPAIGN_LINK}>
      <S.ListImages src={Augl2.src} />
    </Link>
    <Link href={CAMPAIGN_LINK}>
      <S.ListImages src={Augl3.src} />
    </Link>
    <S.ListImages src={Skipti.src} notCursor />
  </S.ListContainer>
)

export default ListaAugl
