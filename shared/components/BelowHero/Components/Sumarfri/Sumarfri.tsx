import Image from 'next/image'
import * as S from './Sumarfri.styled'
import fb_white from '../../../../assets/SVG/Facebook_white.svg'
import ig_white from '../../../../assets/SVG/Instagram_white.svg'

const Sumarfri = () => (
  <S.SumarfriContainer>
    <S.SumarfriContent>
      <S.SumarfriHeader>HÚSEIGANDI ER Sumarfrí framundan?</S.SumarfriHeader>
      <S.SumarfriDescription>
        Láttu okkur vita á samfélagsmiðlum með mynd og dagssetningum
      </S.SumarfriDescription>
      <S.SumarfriButtonContainer>
        <S.SumarfriButtons>
          <Image src={fb_white} />
        </S.SumarfriButtons>
        <S.SumarfriButtons>
          <Image src={ig_white} />
        </S.SumarfriButtons>
        <S.SumarfriButtons>
          <Image src={fb_white} />
        </S.SumarfriButtons>
      </S.SumarfriButtonContainer>
    </S.SumarfriContent>
  </S.SumarfriContainer>
)

export default Sumarfri
