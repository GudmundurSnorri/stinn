import React from 'react'
import * as S from './Augl.styled'
import auglimg from '../../assets/images/augl.png'
import Image from 'next/image'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

const Augl = () => {
  return (
    <S.AuglContainer>
      <S.AuglContent>
        <S.AuglText>Auglýsing</S.AuglText>
        <Link href={CAMPAIGN_LINK}>
          <S.AuglImage>
            <Image
              src={auglimg.src}
              width={auglimg.width}
              height={auglimg.height}
            />
          </S.AuglImage>
        </Link>
      </S.AuglContent>
    </S.AuglContainer>
  )
}

export default Augl
