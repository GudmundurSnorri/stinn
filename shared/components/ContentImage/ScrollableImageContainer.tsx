import * as S from './ContentImage.styled'
import image1 from '../../assets/images/Image-1.png'
import image2 from '../../assets/images/Image-2.png'
import image3 from '../../assets/images/Image.png'
import image4 from '../../assets/images/IMG.png'

const ScrollableImageContainer = () => (
  <S.ScrollableContainer>
    <S.ImageAndTextContainer>
      <S.Image src={image4.src} />
      <S.ImageText>Flúðir</S.ImageText>
    </S.ImageAndTextContainer>
    <S.ImageAndTextContainer>
      <S.Image src={image2.src} />
      <S.ImageText>Kjarnaskógur</S.ImageText>
    </S.ImageAndTextContainer>
    <S.ImageAndTextContainer>
      <S.Image src={image3.src} />
      <S.ImageText>Miðhúsaskógur</S.ImageText>
    </S.ImageAndTextContainer>
    <S.ImageAndTextContainer>
      <S.Image src={image1.src} />
      <S.ImageText>Hallormsstaður</S.ImageText>
    </S.ImageAndTextContainer>
  </S.ScrollableContainer>
)

export default ScrollableImageContainer
