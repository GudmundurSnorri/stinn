import * as S from './LargeImageWithText.styled'
import pic from '../../assets/images/verjahagsmuni.jpg'

const LargeImageWithText = () => (
  <a
    href="https://www.youtube.com/watch?v=VxS6oxAhYxw"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <S.Container id="hagsmunir">
      <S.ImageContainer>
        <S.Image
          src={pic.src}
          alt="Mynd af stjórn Stéttarfélags Innbrotsþjófa fyrir utan heimili"
        />
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
            <S.TextItem>
              Við styðjum okkar félagsmenn í þýfi og starfi
            </S.TextItem>
            <S.TextItem>Við vekjum athygli á glæpafordómum</S.TextItem>
            <S.TextItem>Við viljum afglæpavæða glæpi</S.TextItem>
          </S.TextList>
        </S.TextContent>
      </S.TextContainer>
    </S.Container>
  </a>
)

export default LargeImageWithText
