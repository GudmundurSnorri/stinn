import * as S from './ImageCards.styled'

type ImageCardsProps = {
  img: {
    src: string
  }
  title: string
  description: string
}

const ImageCards = ({ img, title, description }: ImageCardsProps) => (
  <S.Card>
    <S.CardImage src={img.src} />
    <S.CardTextContainer>
      <S.CardTextHeader>{title}</S.CardTextHeader>
      <S.CardTextDescription>{description}</S.CardTextDescription>
    </S.CardTextContainer>
  </S.Card>
)

export default ImageCards
