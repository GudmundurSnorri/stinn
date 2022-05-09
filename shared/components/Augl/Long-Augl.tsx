import React from 'react'
import * as S from './Augl.styled'
import auglimg from '../../assets/images/augl.png'
import smallerImg from '../../assets/images/Ads/smallerlongad.png'
import useWindowDimensions from '../../Hooks/useWindowDimensions'

const Augl = () => {
  const { width } = useWindowDimensions()
  return (
    <S.AuglContainer>
      <S.AuglContent>
        <S.AuglText>Auglýsing</S.AuglText>
        <S.AuglImage>
          <img src={width > 768 ? auglimg.src : smallerImg.src} />
        </S.AuglImage>
      </S.AuglContent>
    </S.AuglContainer>
  )
}

export default Augl
