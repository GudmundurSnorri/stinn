import * as S from './Augl.styled'
import Sokkabuxur from '../../assets/images/Ads/sokkabuxur.webp'
import Augl2 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_odyrtheimakerfi.webp'
import Augl3 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_styttrividbragdstimi.webp'
import Skipti from '../../assets/images/Ads/LargerThanLife/Ad_336x280_hreyfiskynjari.webp'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const ListaAugl = () => (
  <S.ListContainer>
    <S.ListContentCard>
      <S.ListContentText hiddenText>Auglýsing</S.ListContentText>
      <a
        href="https://www.youtube.com/watch?v=C5U5m4ayE58"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
      >
        <S.ListImages
          src={Sokkabuxur.src}
          notCursor
          alt="Afnemum virðisaukaskattinn af sokkabuxum!"
        />
      </a>
    </S.ListContentCard>
    <Link href={CAMPAIGN_LINK}>
      <S.ListContentCard noPhone>
        <S.ListContentText>Auglýsing</S.ListContentText>
        <S.ListImages
          src={Augl2.src}
          noPhone
          alt="Ódýrt hágæða heimakerfi frá Nova!"
        />
      </S.ListContentCard>
    </Link>
    <Link href={CAMPAIGN_LINK}>
      <S.ListContentCard noPhone>
        <S.ListContentText>Auglýsing</S.ListContentText>
        <S.ListImages
          src={Augl3.src}
          noPhone
          alt="Styttri viðbragðstími með öryggiskerfum Nova!"
        />
      </S.ListContentCard>
    </Link>
    <Link href={CAMPAIGN_LINK}>
      <S.ListContentCard noPhone>
        <S.ListContentText>Auglýsing</S.ListContentText>
        <S.ListImages
          src={Skipti.src}
          noPhone
          alt="Hreyfiskynjari með myndavél hjá Nova"
        />
      </S.ListContentCard>
    </Link>
  </S.ListContainer>
)

export default ListaAugl
