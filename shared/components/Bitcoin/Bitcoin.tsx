import * as S from './Bitcoin.styled'

const Bitcoin = () => (
  <S.Container id="bitcoin">
    <S.TextContainer>
      <S.TextContent>
        <S.TextHeader>Örugg Greiðsluleið!</S.TextHeader>
        <S.TextDescription>
          Nú getur þú greitt þín félagsgjöld með BitCoin eða Dogecoin.
          Nafnlaust, órekjanlegt og fullkomlega öruggt. Greiðsluseðill kominn í
          veski allra félagsmanna.
        </S.TextDescription>
      </S.TextContent>
    </S.TextContainer>
    <S.ImageContainer>
      <S.Image alt="Bitcoin Logo" />
    </S.ImageContainer>
  </S.Container>
)

export default Bitcoin
