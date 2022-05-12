import Image from 'next/image'
import * as S from './Sumarfri.styled'
import fb_white from '../../../../assets/SVG/Facebook_white.svg'
import ig_white from '../../../../assets/SVG/Instagram_white.svg'
import twitter_white from '../../../../assets/SVG/Twitter.svg'
import Link from 'next/link'

const Sumarfri = () => (
  <S.SumarfriContainer>
    <S.SumarfriContent>
      <S.SumarfriHeader>HÚSEIGANDI ER Sumarfrí framundan?</S.SumarfriHeader>
      <S.SumarfriDescription>
        Láttu okkur vita á samfélagsmiðlum með mynd og dagssetningum
      </S.SumarfriDescription>
      <S.SumarfriButtonContainer>
        <S.SumarfriButtons>
          <Link href="https://twitter.com/innbrotsthjofar" target={'_blank'}>
            <Image src={ig_white} />
          </Link>
        </S.SumarfriButtons>
        <S.SumarfriButtons>
          <Link href="https://twitter.com/innbrotsthjofar" target={'_blank'}>
            <Image src={fb_white} />
          </Link>
        </S.SumarfriButtons>
        <S.SumarfriButtons>
          <Link href="https://twitter.com/innbrotsthjofar" target={'_blank'}>
            <Image src={twitter_white} />
          </Link>
        </S.SumarfriButtons>
      </S.SumarfriButtonContainer>
    </S.SumarfriContent>
  </S.SumarfriContainer>
)

export default Sumarfri
