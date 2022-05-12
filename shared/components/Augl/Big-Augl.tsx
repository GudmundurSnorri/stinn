import * as S from './Augl.styled'
import pic from '../../assets/images/Ads/LargerThanLife/Ad_1018x360_Sjalfsvorn.webp'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const BigAugl = () => {
  return (
    <S.BigAuglContainer>
      <S.BigAuglContent>
        <S.BigAuglText>Auglýsing</S.BigAuglText>
        <Link href={CAMPAIGN_LINK}>
          <S.BigAuglImage
            src={pic.src}
            alt="Verðu heimilið þitt! Kíktu á Nova.is"
          />
        </Link>
      </S.BigAuglContent>
    </S.BigAuglContainer>
  )
}

export default BigAugl
