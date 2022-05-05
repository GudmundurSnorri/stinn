import * as S from './Hero.styled';

const Hero = () => (
    <S.HeroBackground>
        <S.HeroImage />
        <S.HeroTextContainer>
            <S.HeroText>
                Atvinnu<span>öryggi</span>
            </S.HeroText>
            <S.HeroText>
                fyrir alla
            </S.HeroText>
        </S.HeroTextContainer>
    </S.HeroBackground>
)

export default Hero;
