import * as S from './Augl.styled'
import pic from '../../assets/images/Ads/BigAugl.png'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const BigAugl = () => {
  return (
    <S.BigAuglContainer>
      <Link href={CAMPAIGN_LINK}>
        <S.BigAuglImage src={pic.src} />
      </Link>
    </S.BigAuglContainer>
  )
}

export default BigAugl
