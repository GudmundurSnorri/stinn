import * as S from './ImageCards.styled'

type ImageCardsProps = {
  img: {
    src: string
    alt: string
  }
  title: string
  link: string
  description: string
}

const ImageCards = ({ img, title, description, link }: ImageCardsProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <S.Card>
      <S.CardImage src={img.src} alt={img.alt} />
      <S.CardTextContainer>
        <S.CardTextHeader>{title}</S.CardTextHeader>
        <S.CardTextDescription>{description}</S.CardTextDescription>
      </S.CardTextContainer>
    </S.Card>
  </a>
)

export default ImageCards
