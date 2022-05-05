import * as S from './ContentImage.styled';
import image1 from '../../assets/images/Image-1.png'
import image2 from '../../assets/images/Image-2.png'
import image3 from '../../assets/images/Image.png'
import image4 from '../../assets/images/IMG.png'


const ContentImage = () => (
    <S.CIContainer>
        <S.ImageContainer>
            <S.ImageColumn2>
                <S.ImageAndTextContainer>
                    <S.Image src={image4.src} />
                    <S.ImageText>
                        Flúðir
                    </S.ImageText>
                </S.ImageAndTextContainer>
                <S.ImageAndTextContainer>
                    <S.Image src={image2.src} />
                    <S.ImageText>
                        Kjarnaskógur
                    </S.ImageText>
                </S.ImageAndTextContainer>
            </S.ImageColumn2>
            <S.ImageColumn>
                <S.ImageAndTextContainer>
                    <S.Image src={image3.src} />
                    <S.ImageText>
                        Miðhúsaskógur 
                    </S.ImageText>
                </S.ImageAndTextContainer>
                <S.ImageAndTextContainer>
                    <S.Image src={image1.src} />
                    <S.ImageText>
                        Hallormsstaður
                    </S.ImageText>
                </S.ImageAndTextContainer>
            </S.ImageColumn>
        </S.ImageContainer>
        <S.TextContainer>
            <S.TextHeader>
                Orlofshús
            </S.TextHeader>
            <S.TextPill>
                Laus um helgina!
            </S.TextPill>
            <S.TextDescription>
               Munið orlofshúsavefinn þar sem má finna bústaði og orlofshús sem eiga að vera auð, yfirgefin og aðgengileg öllum félagsmönnum. Fyrstur kemur fyrstur fær!
            </S.TextDescription>
            <S.TextButton href='https://www.orlof.is/vr/'>
                Nánar
            </S.TextButton>
        </S.TextContainer>
    </S.CIContainer>

)

export default ContentImage;