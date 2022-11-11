import * as S from './ContentImage.styled'
import image1 from '../../assets/images/hus/shutterstock_1005728008.jpeg'
import image2 from '../../assets/images/hus/shutterstock_552451486.jpeg'
import image3 from '../../assets/images/hus/shutterstock_602516111.jpeg'
import image4 from '../../assets/images/hus/shutterstock_793432102.jpeg'

const ImageContainer = () => (
  <S.ImageContainer>
    <S.ImageColumn2>
      <S.ImageAndTextContainer>
        <S.Image src={image4.src} alt="Orlofshús Flúðir" />
        <S.ImageText>Flúðir</S.ImageText>
      </S.ImageAndTextContainer>
      <S.ImageAndTextContainer>
        <S.Image src={image2.src} alt="Orlofshús Kjarnaskógur" />
        <S.ImageText>Kjarnaskógur</S.ImageText>
      </S.ImageAndTextContainer>
    </S.ImageColumn2>
    <S.ImageColumn>
      <S.ImageAndTextContainer>
        <S.Image src={image3.src} alt="Orlofshús Miðhúsaskógur" />
        <S.ImageText>Miðhúsaskógur</S.ImageText>
      </S.ImageAndTextContainer>
      <S.ImageAndTextContainer>
        <S.Image src={image1.src} alt="Orlofshús Hallormsstaður" />
        <S.ImageText>Hallormsstaður</S.ImageText>
      </S.ImageAndTextContainer>
    </S.ImageColumn>
  </S.ImageContainer>
)

export default ImageContainer
