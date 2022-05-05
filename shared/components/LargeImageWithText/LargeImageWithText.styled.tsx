import styled from "styled-components";
import pic from '../../assets/images/verjahagsmuni.png';
import { MAIN_COLOR } from "../../styles.styled";

const Container = styled.div`
    display: flex;
`;
const ImageContainer = styled.div`
    width: 100%;
`;
const Image = styled.img``;
Image.defaultProps = {
    src: pic.src
}
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
const TextHeader = styled.h2`
    font-size: 5rem;
    padding-right: 20rem;
    color: ${MAIN_COLOR};
`;
const TextContent = styled.div`
    padding: 0rem 20rem 0rem 0rem;
`;
const TextDescription = styled.p`
    font-size: 1.8rem;
    line-height: 160%;
`;
const TextList = styled.ul``;
const TextItem = styled.li`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
`;


export {
    Container,
    ImageContainer,
    Image,
    TextContainer,
    TextContent,
    TextHeader,
    TextDescription,
    TextList,
    TextItem,
}