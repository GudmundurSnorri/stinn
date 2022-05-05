import styled from "styled-components";
import image from '../../assets/images/background.png';
import { MAIN_COLOR } from "../../styles.styled";

const HeroBackground = styled.div`
    position: relative;
    width: 100%;
    height: 1000px;
`;

const HeroImage = styled.img`
    width: 100%;
    overflow: hidden;
    object-fit: fit;
    position: absolute;
    height: 812px;
`;

HeroImage.defaultProps = {
    src: image.src
}

const HeroText = styled.h1`
    font-size: 80px;
    padding: 0px 20px;
    margin: 0px;
    background-color:  ${MAIN_COLOR};;
    color: white;
    width: fit-content;
    text-transform: uppercase;

    & > span {
        text-decoration: underline;
        text-underline-offset: 5px;
    }
`;
const HeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 124px 70px;
    position: absolute;
    z-index: 2;
    width: 40%;
`;

export {
    HeroBackground,
    HeroImage,
    HeroText,
    HeroTextContainer,
}