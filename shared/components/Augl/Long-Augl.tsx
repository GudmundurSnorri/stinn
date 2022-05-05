import React from 'react';
import * as S from './Augl.styled';
import auglimg from '../../assets/images/augl.png';


const Augl = () => (
    <S.AuglContainer>
        <S.AuglContent>
            <S.AuglText>
                Auglýsing
            </S.AuglText>
            <S.AuglImage>
                <img src={auglimg.src} />
            </S.AuglImage>
        </S.AuglContent>
    </S.AuglContainer>

)

export default Augl;
