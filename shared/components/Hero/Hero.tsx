import * as S from './Hero.styled'
import image from '../../assets/images/background.png'

const Hero = () => {
  return (
    <S.HeroBackground>
      <S.HeroImage src={image.src} width={image.width} height={image.height} />
      <S.HeroTextContainer>
        <S.HeroText>
          Atvinnu<span>öryggi</span>
        </S.HeroText>
        <S.HeroText>fyrir alla</S.HeroText>
      </S.HeroTextContainer>
    </S.HeroBackground>
  )
}

export default Hero
