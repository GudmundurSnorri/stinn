import * as S from './LargeImageWithText.styled'
import pic from '../../assets/images/verjahagsmuni.png'
import pic_small from '../../assets/images/verjahagsmunismall.png'

const LargeImageWithText = () => (
  <S.Container id="hagsmunir">
    <S.ImageContainer>
      <S.Image src={pic.src} srcSet={`${pic_small.src} 768w`} />
    </S.ImageContainer>
    <S.TextContainer>
      <S.TextHeader>Verjum okkar hagsmuni!</S.TextHeader>
      <S.TextContent>
        <S.TextDescription>
          Oft var þörf en nú er nauðsyn. Þegar íslenskt fyrirtæki ógnar
          lífsviðurværi okkar fólks með snjöllum hágæða heimakerfum er tími
          fyrir SI – Stéttarfélag innbrotsþjófa að láta í sér heyra.
        </S.TextDescription>
        <S.TextList>
          <S.TextItem>Við berjumst gegn ódýrum hágæða heimakerfum</S.TextItem>
          <S.TextItem>Við styðjum okkar félagsmenn í þýfi og starfi</S.TextItem>
          <S.TextItem>Við vekjum athygli á glæpafordómum</S.TextItem>
          <S.TextItem>Við viljum afglæpavæða glæpi</S.TextItem>
        </S.TextList>
      </S.TextContent>
    </S.TextContainer>
  </S.Container>
)

export default LargeImageWithText
