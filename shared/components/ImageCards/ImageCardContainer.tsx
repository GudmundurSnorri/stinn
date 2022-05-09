import { StaticImageData } from 'next/image'
import * as S from './ImageCards.styled'
import pic1 from '../../assets/images/Cards/card1.png'
import pic2 from '../../assets/images/Cards/card2.png'
import pic3 from '../../assets/images/Cards/card3.png'
import ImageCards from './ImageCards'

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
    {CardsArray.map((v) => (
      <ImageCards
        img={{
          src: v.img.src,
        }}
        title={v.title}
        description={v.description}
      />
    ))}
  </S.CardContainer>
)

export default ImageCardContainer
