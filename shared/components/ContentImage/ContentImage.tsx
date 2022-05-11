import * as S from './ContentImage.styled'
import ImageContainer from './ImageContainer'
import ScrollableImageContainer from './ScrollableImageContainer'

const ContentImage = () => {
  return (
    <S.CIContainer id="Orlofshus">
      <ImageContainer />
      <ScrollableImageContainer />
      <S.TextContainer>
        <S.TextHeader>Orlofshús</S.TextHeader>
        <S.TextPill>Laus um helgina!</S.TextPill>
        <S.TextDescription>
          Munið orlofshúsavefinn þar sem má finna bústaði og orlofshús sem eiga
          að vera auð, yfirgefin og aðgengileg öllum félagsmönnum. Fyrstur kemur
          fyrstur fær!
        </S.TextDescription>
        <S.TextButton href="https://www.orlof.is/vr/" target={'_blank'}>
          Nánar
        </S.TextButton>
      </S.TextContainer>
    </S.CIContainer>
  )
}
export default ContentImage
