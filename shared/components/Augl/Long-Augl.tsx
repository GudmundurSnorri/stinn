import React from 'react'
import * as S from './Augl.styled'
import auglimg from '../../assets/images/augl.png'
import Image from 'next/image'

const Augl = () => {
  return (
    <S.AuglContainer>
      <S.AuglContent>
        <S.AuglText>Auglýsing</S.AuglText>
        <S.AuglImage>
          <Image
            src={auglimg.src}
            width={auglimg.width}
            height={auglimg.height}
          />
        </S.AuglImage>
      </S.AuglContent>
    </S.AuglContainer>
  )
}

export default Augl
