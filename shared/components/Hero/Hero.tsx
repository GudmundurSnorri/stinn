import * as S from './Hero.styled'
import image from '../../assets/images/background.jpg'
import image1 from '../../assets/images/smallHero.png'

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
          <source srcSet={image1.src} media="(max-width: 768px)" />
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
