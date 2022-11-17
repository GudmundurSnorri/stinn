import * as S from './Augl.styled'
import Augl1 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_oruggtheimili.webp'
import Augl2 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_heimamunir.webp'
import Augl3 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_skiptuutgamla.webp'
import Skipti from '../../assets/images/Ads/SKIPTIMARKADUR-01.jpg'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const ListaAugl = () => (
  <S.ListContainer>
    <Link href={CAMPAIGN_LINK}>
      <S.ListContentCard>
        <S.ListContentText>Auglýsing</S.ListContentText>
        <S.ListImages src={Augl1.src} alt="Öruggt heimili með Nova" />
      </S.ListContentCard>
    </Link>
    <Link href={CAMPAIGN_LINK}>
      <S.ListContentCard noPhone>
        <S.ListContentText>Auglýsing</S.ListContentText>
        <S.ListImages
          src={Augl2.src}
          noPhone
          alt="Styttri viðbragðstími með öryggiskerfum nova!"
        />
      </S.ListContentCard>
    </Link>
    <Link href="https://www.bland.is">
      <S.ListContentCard>
        <S.ListContentText hiddenText>Auglýsing</S.ListContentText>
        <S.ListImages
          src={Skipti.src}
          notCursor
          alt="Skiptimarkaður félagsmanna er á Facebook og Bland.is"
        />
      </S.ListContentCard>
    </Link>
    <Link href={CAMPAIGN_LINK}>
      <S.ListContentCard>
        <S.ListContentText>Auglýsing</S.ListContentText>
        <S.ListImages
          src={Augl3.src}
          alt="Skipti út gamla öryggiskerfinu með Nova"
        />
      </S.ListContentCard>
    </Link>
  </S.ListContainer>
)

export default ListaAugl
