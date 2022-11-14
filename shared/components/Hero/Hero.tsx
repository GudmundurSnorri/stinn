import * as S from './Hero.styled'
import image from '../../assets/images/HEROmynd_JOL_22_2.jpg'
import image1 from '../../assets/images/HEROmynd_JOL_22_mobile_noText.png'

const Hero = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=rAtLGVuZ9YY"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <S.HeroBackground>
        <picture>
          <source
            style={{ objectFit: 'none' }}
            srcSet={image1.src}
            media="(max-width: 768px)"
          />
          <S.HeroImage
            srcSet={image.src}
            alt="Frambjóðendur stéttarfélags innbrotsþjófa"
          />
        </picture>
        <S.HeroTextContainer>
          <S.HeroText>
            Á þínu <span>Heimili</span>
          </S.HeroText>
          <S.HeroText>um jólin</S.HeroText>
        </S.HeroTextContainer>
      </S.HeroBackground>
    </a>
  )
}

export default Hero
