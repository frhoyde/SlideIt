import React from 'react';
import { MyButton } from '../../ButtonElement';
import { InfoContainer, InfoRow, InfoWrapper,Column1,TextWrapper,TopLine,Heading,Subtittle,BtnWrap, Column2, Img, ImgWrap } from './InfoElements';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, buttonLabel, darkText, description, img, alt, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtittle darkText={darkText}>{description}</Subtittle>
                        <BtnWrap>
                            <MyButton to='home' 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1: 0}
                            dark={dark?1:0}
                            dark2={dark2 ?1:0}
                            >{buttonLabel}</MyButton>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection
