import * as S from './Hero.styled'
import image from '../../assets/images/background.png'
import image1 from '../../assets/images/heroSmall.png'

const Hero = () => {
  return (
    <S.HeroBackground>
      <picture>
        <source srcSet={image1.src} media="(max-width: 768px)" />
        <S.HeroImage srcSet={image.src} alt="" />
      </picture>
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
