import styled from "styled-components";
import pic from '../../assets/images/Crypto-IMG.png';
import { MAIN_COLOR } from "../../styles.styled";

const Container = styled.div`
    display: flex;
    place-items: center;
    background-color: ${MAIN_COLOR};
`;
const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: red;
    width: 100%;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 600px;
    text-align: left;
`;


const TextHeader = styled.h2`
    font-size: 5.4rem;
    letter-spacing: -0.3rem;
    color: white;
    text-transform: uppercase;
    margin: 0px;
`;
const TextDescription = styled.p`
    font-size: 2rem;
    line-height: 160%;
    padding: 0rem 1rem;    

`;
const ImageContainer = styled.div``;
const Image = styled.img``;

Image.defaultProps = {
    src: pic.src
}

export {
    Container,
    TextContainer,
    TextHeader,
    TextDescription,
    Image,
    ImageContainer,
    TextContent
}