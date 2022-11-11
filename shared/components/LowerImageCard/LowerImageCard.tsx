import * as S from './LowerImageCard.styled'
import pic from '../../assets/images/NOVA_JOL_22_6.jpg'

const LowerImageCard = () => (
  <a
    href="https://www.youtube.com/watch?v=4OGvNCaaqj8"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <S.Container>
      <S.TextContainer>
        <S.TextContent>
          <S.TextSubtitles>Göngum í hús um helgina</S.TextSubtitles>
          <S.TextHeader>Takið EKKI á móti okkar fólki!</S.TextHeader>
          <S.TextDescription>
            Stéttarfélags innbrotsþjófa ganga í hús í Laugardal og Grafarholti
            um helgina. Þið hjálpið okkur best með því að taka ekki á móti okkar
            fólki. Farið frekar í frí til Tenerife. Við sjáum um rest.
          </S.TextDescription>
        </S.TextContent>
      </S.TextContainer>
      <S.ImageContainer>
        <S.Image
          src={pic.src}
          alt="Mynd af stjórn Stéttarfélags Innbrotsþjófa á stigagangi"
        />
      </S.ImageContainer>
    </S.Container>
  </a>
)

export default LowerImageCard
