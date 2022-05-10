import Link from 'next/link'
import * as S from './ContentImage.styled'
import * as C from '../ImageCards/ImageCards.styled'
import ImageContainer from './ImageContainer'
import ScrollableImageContainer from './ScrollableImageContainer'
import { CAMPAIGN_LINK } from '../../styles.styled'
import oryggi from '../../assets/images/Ads/oryggiibustad.png'

const ContentImage = () => {
  return (
    <S.CIContainer id="Orlofshus">
      <ImageContainer />
      <Link href={CAMPAIGN_LINK}>
        <C.AdsWithTextContainer>
          <C.AdsWithTextDescription>Auglýsing</C.AdsWithTextDescription>
          <C.AdsWithTextImage src={oryggi.src} />
        </C.AdsWithTextContainer>
      </Link>
      <ScrollableImageContainer />
      <S.TextContainer>
        <S.TextHeader>Orlofshús</S.TextHeader>
        <S.TextPill>Laus um helgina!</S.TextPill>
        <S.TextDescription>
          Munið orlofshúsavefinn þar sem má finna bústaði og orlofshús sem eiga
          að vera auð, yfirgefin og aðgengileg öllum félagsmönnum. Fyrstur kemur
          fyrstur fær!
        </S.TextDescription>
        <S.TextButton href="https://www.orlof.is/vr/">Nánar</S.TextButton>
      </S.TextContainer>
    </S.CIContainer>
  )
}
export default ContentImage
