import * as S from './Hero.styled'
import image from '../../assets/images/background.jpg'
import image1 from '../../assets/images/HEROmynd_JOL_22_mobile.png'

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
            media="(max-width: 468px)"
          />
          <S.HeroImage
            srcSet={image.src}
            alt="Frambjóðendur stéttarfélags innbrotsþjófa"
          />
        </picture>
      </S.HeroBackground>
    </a>
  )
}

export default Hero
