import useWindowDimensions from '../../Hooks/useWindowDimensions'
import * as S from './Augl.styled'
import picSmall from '../../assets/images/Ads/BigAugl_small.png'
import pic from '../../assets/images/Ads/BigAugl.png'

const BigAugl = () => {
  const { width } = useWindowDimensions()
  return (
    <S.BigAuglContainer>
      <S.BigAuglImage src={width > 768 ? pic.src : picSmall.src} />
    </S.BigAuglContainer>
  )
}

export default BigAugl
