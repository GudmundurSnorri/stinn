import * as S from './ContentImage.styled'
import image1 from '../../assets/images/hallormsstadur.jpg'
import image2 from '../../assets/images/kjarnaskogur.jpg'
import image3 from '../../assets/images/midahusaskogur.jpg'
import image4 from '../../assets/images/fludir.jpg'

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
