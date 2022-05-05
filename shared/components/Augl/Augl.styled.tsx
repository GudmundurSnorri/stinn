import styled from "styled-components";
import pic from '../../assets/images/Ads/BigAugl.png';

const AuglContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    place-items:center;
    margin: 5rem 0rem;
`;

const AuglContent = styled.div``;
const AuglText = styled.div`
    margin-bottom: 1rem;
    font-weight: 100;
`;
const AuglImage = styled.div``;

//LIST Auglýsignar

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10rem 0rem;

`;
const ListImages = styled.img``;


// Big Augl
const BigAuglContainer = styled.div`
    display: flex;
    margin: 12rem 0rem;
    justify-content: center;
`;
const BigAuglImage = styled.img``;
BigAuglImage.defaultProps = {
    src: pic.src
}

export {
    AuglContainer, 
    AuglImage,
    AuglText,
    AuglContent,
    ListContainer,
    ListImages,
    BigAuglContainer,
    BigAuglImage,
}