import styled from 'styled-components';

export const InfoContainer = styled.div`
   color: #fff;
   background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

   @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    z-index: 1;
    width: 100%;
    height:  860px;
    max-width: 1100px;
    padding: 0 24px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    justify-content: center;

`;

export const InfoRow = styled.div`
    display: grid;
    align-items: center;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    padding-bottom: 60px;
    max-width: 540px;
    padding-top: 0;
`;
export const TopLine = styled.p`
    color: #F47100;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f78f1' : '#010606')};
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtittle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
    font-size: 18px;
    line-height: 24px;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    height: 100%;
    max-width: 555px;
    
`;
export const Img = styled.img`
    width: 100%;
   margin: 0 0 10px 0;
   padding-right: 0;
    
`;