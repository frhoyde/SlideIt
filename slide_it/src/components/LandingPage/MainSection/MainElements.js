import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const MainContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        /* background: linear-gradient(180deg, rgb(0,0,0,2) 0%,
        rgb(0,0,0,0.6) 100%), 
        linear-gradient(180deg, rgb(0,0,0,2) 0%, transparent 100%); */
        z-index: 2;
    }
`

export const MainBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
`

export const MainContent = styled.div`
    position: absolute;
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainH1 = styled.h1`
    color: #000;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
`

export const MainP = styled.p`
margin-top: 24px;
    color: #000;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
`

export const MainBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`