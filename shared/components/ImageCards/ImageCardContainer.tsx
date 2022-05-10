import { StaticImageData } from 'next/image'
import * as S from './ImageCards.styled'
import pic1 from '../../assets/images/Cards/card1.png'
import pic2 from '../../assets/images/Cards/card2.png'
import pic3 from '../../assets/images/Cards/card3.png'
import ImageCards from './ImageCards'
import Ads1Small from '../../assets/images/Ads/oryggiskerfi_small.png'
import Ads2Small from '../../assets/images/Ads/vidbragd_small.png'
import Ads3Small from '../../assets/images/Ads/Hreyfiskynjari.png'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

type CardsProps = {
  title: string
  img: StaticImageData
  description: string
}[]

const CardsArray = [
  {
    title: 'Varist hágæða heimakerfi!',
    description: 'Við erum er alfarið á móti stafrænum snjöllum öryggiskerfum.',
    img: pic1,
  },
  {
    title: 'Lengjum vinnuvikuna aftur!',
    description:
      'Við þurfum tíma til að vinna okkar verk. Stytting vinnuvikunnar styttir okkar tíma.',
    img: pic2,
  },
  {
    title: 'Ekki mynda okkur í vinnunni',
    description:
      'Almenningur hefur ekki leyfi til að mynda félagsmenn í vinnunni!',
    img: pic3,
  },
] as CardsProps

const ImageCardContainer = () => (
  <S.CardContainer>
    <ImageCards
      img={{
        src: CardsArray[0].img.src,
      }}
      title={CardsArray[0].title}
      description={CardsArray[0].description}
    />
    <Link href={CAMPAIGN_LINK}>
      <S.AdsWithTextContainer>
        <S.AdsWithTextDescription>Auglýsing</S.AdsWithTextDescription>
        <S.AdsWithTextImage src={Ads1Small.src} />
      </S.AdsWithTextContainer>
    </Link>
    <ImageCards
      img={{
        src: CardsArray[1].img.src,
      }}
      title={CardsArray[1].title}
      description={CardsArray[1].description}
    />
    <Link href={CAMPAIGN_LINK}>
      <S.AdsWithTextContainer>
        <S.AdsWithTextDescription>Auglýsing</S.AdsWithTextDescription>
        <S.AdsWithTextImage src={Ads2Small.src} />
      </S.AdsWithTextContainer>
    </Link>
    <ImageCards
      img={{
        src: CardsArray[2].img.src,
      }}
      title={CardsArray[2].title}
      description={CardsArray[2].description}
    />
    <Link href={CAMPAIGN_LINK}>
      <S.AdsWithTextContainer>
        <S.AdsWithTextDescription>Auglýsing</S.AdsWithTextDescription>
        <S.AdsWithTextImage src={Ads3Small.src} />
      </S.AdsWithTextContainer>
    </Link>
  </S.CardContainer>
)

export default ImageCardContainer
