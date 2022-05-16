import Link from 'next/link'
import React from 'react'
import ImageLogo from '../../assets/SVG/SI_logo-header-new.svg'

import * as S from './header.styled'

const Header = () => (
  <S.HeaderContainer>
    <S.Image>
      <img
        src={ImageLogo.src}
        width={300}
        height={200}
        alt="Logo stéttarfélags innbrotsþjófa"
      />
    </S.Image>
    <S.ListHeading>
      <Link href="#Orlofshus" scroll={true}>
        <S.ListItem title="hæ" href="/">
          Orlofshús
        </S.ListItem>
      </Link>
      <Link href="/#bitcoin">
        <S.ListItem title="hæ" href="/">
          Félagsgjöld
        </S.ListItem>
      </Link>
      <Link href="/#hagsmunir">
        <S.ListItem title="hæ" href="/">
          Baráttan
        </S.ListItem>
      </Link>
    </S.ListHeading>
  </S.HeaderContainer>
)

export default Header
