import React from 'react'
import * as S from './Augl.styled'
import auglimg from '../../assets/images/Ads/efstaaugl.png'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { CAMPAIGN_LINK } from '../../styles.styled'

type AuglProps = {
  img: StaticImageData
}

const Augl = ({ img }: AuglProps) => {
  return (
    <S.AuglContainer>
      <S.AuglContent>
        <S.AuglText>Auglýsing</S.AuglText>
        <Link href={CAMPAIGN_LINK}>
          <S.AuglImage>
            <Image
              src={img.src}
              width={img.width}
              height={img.height}
              alt="Heimaöryggi fyrir alla með Nova"
            />
          </S.AuglImage>
        </Link>
      </S.AuglContent>
    </S.AuglContainer>
  )
}

export default Augl
