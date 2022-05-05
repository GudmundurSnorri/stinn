
import * as S from './Augl.styled';
import Augl1 from '../../assets/images/Ads/oruggtheimili.png';
import Augl2 from '../../assets/images/Ads/Verdutinaheimamuni.png';
import Augl3 from '../../assets/images/Ads/Skiptuutgamlakerfinu.png';
import Skipti from '../../assets/images/Ads/Skipti.png'


const ListaAugl = () => (
    <S.ListContainer>
        <S.ListImages src={Augl1.src} />
        <S.ListImages src={Augl2.src} />
        <S.ListImages src={Augl3.src} />
        <S.ListImages src={Skipti.src} />
    </S.ListContainer>
)

export default ListaAugl;