import styled from "styled-components";
import { MAIN_COLOR } from "../../styles.styled";


const CIContainer = styled.div`
    position: relative;
    display: flex;
    place-items: center;
    width: 100%;
    height: fit-content;
    margin-bottom: 20rem;
`;
const ImageContainer = styled.div`
    display: flex;
    width: 100%;

`;

const ImageColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageColumn2 = styled(ImageColumn)`
    transform: translateY(100px);
`;

const Image = styled.img`
    height: 34.4rem;
    width: 34.4rem;
    position: absolute;
`;

const ImageText = styled.p`
    font-size: 1.6rem;
    padding: .8rem 3.2rem .8rem 2rem;
    background-color: ${MAIN_COLOR};
    position: absolute;
    color: white;
`;

const ImageAndTextContainer = styled.div`
    position: relative;
    height: 34.4rem;
    width: 34.4rem;
    padding: 1.5rem;
`;

const TextContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
`;
const TextHeader = styled.h2`
    font-weight: 600;
    font-size: 4.8rem;
    margin: 0px;
    padding: 0px;
    color: ${MAIN_COLOR};
    text-transform: uppercase;
    letter-spacing: -.4rem;
`;
const TextPill = styled.h5`
    font-weight: 200;
    font-size: 3.2rem;
    margin: 0px;
    padding: 1rem 0rem;
`;
const TextDescription = styled.p`
    width: 90%;
    padding-bottom: 1rem;
    font-weight: 300;
    line-height: 168%;
    font-size: 2rem;
`;

const TextButton = styled.a`
    width: fit-content;
    border: none;
    background-color: ${MAIN_COLOR};
    color: white;
    font-weight: 400;
    padding: .8rem 1.6rem;
    border-radius: 0.1rem;
    font-size: 1.6rem;
    text-decoration: none;
`;

export {
    CIContainer,
    Image,
    TextContainer,
    TextHeader,
    TextPill,
    TextDescription,
    TextButton,
    ImageContainer,
    ImageColumn,
    ImageColumn2,
    ImageAndTextContainer,
    ImageText
}