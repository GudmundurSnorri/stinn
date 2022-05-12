import * as S from './Augl.styled'
import Sokkabuxur from '../../assets/images/Ads/sokkabuxur.png'
import Augl2 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_odyrtheimakerfi.png'
import Augl3 from '../../assets/images/Ads/LargerThanLife/Ad_336x280_styttrividbragdstimi.png'
import Skipti from '../../assets/images/Ads/LargerThanLife/Ad_336x280_hreyfiskynjari.png'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const ListaAugl = () => (
  <S.ListContainer>
    <S.ListContentCard>
      <S.ListContentText hiddenText>Auglýsing</S.ListContentText>
      <S.ListImages
        src={Sokkabuxur.src}
        notCursor
        alt="Afnemum virðisaukaskattinn af sokkabuxum!"
      />
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
