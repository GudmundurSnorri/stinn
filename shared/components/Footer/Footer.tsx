import Image from 'next/image'
import * as S from './Footer.styled'
import pic from '../../assets/images/footer/SIlogo.png'

const Footer = () => (
  <S.Container>
    <S.ContainerCard>
      <S.LogoContainer>
        <Image
          src={pic.src}
          width={74}
          height={69}
          alt="Logo stéttarfélags innbrotsþjófa"
        />
        <S.LogoText>Stéttarfélag Innbrotsþjófa</S.LogoText>
      </S.LogoContainer>
    </S.ContainerCard>
    <S.ContainerCard>
      <S.TextContainer>
        <S.TextSubtitle>Heimilisfang</S.TextSubtitle>
        <S.TextParagraph>
          Dropphólf Lindum Skógarlind 2, 201 Kópavogur
        </S.TextParagraph>
      </S.TextContainer>
    </S.ContainerCard>
    <S.ContainerCard>
      <S.TextContainer>
        <S.TextSubtitle>Netfang</S.TextSubtitle>
        <S.TextParagraph>
          stettarfelaginnbrotsthjofa@protonmail.com
        </S.TextParagraph>
      </S.TextContainer>
    </S.ContainerCard>
  </S.Container>
)

export default Footer
