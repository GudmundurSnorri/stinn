import Link from "next/link";
import React from "react";
import ImageLogo from "../../assets/images/silogo.png";

import * as S from "./header.styled";

const Header = () => (
  <S.HeaderContainer>
    <S.Image>
      <img src={ImageLogo.src} style={{ height: "69px", width: "74px" }} />
      <S.Header>Stéttarfélag Innbrotsþjófa</S.Header>
    </S.Image>
    <S.ListHeading>
      <Link href="/">
        <S.ListItem title="hæ" href="/">
          Orlofshús
        </S.ListItem>
      </Link>
        <Link href="/">
        <S.ListItem title="hæ" href="/">
          Félagsgjöld
        </S.ListItem>
      </Link>
        <Link href="/">
        <S.ListItem title="hæ" href="/">
          Baráttan
        </S.ListItem>
      </Link>  
    </S.ListHeading>
  </S.HeaderContainer>
);

export default Header;
