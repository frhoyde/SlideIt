import React, {useState} from 'react';
import Video from '../../../videos/video3.mp4';
import { MainContainer, MainBg, VideoBg, MainContent, MainBtnWrapper, MainH1, MainP,ArrowForward, ArrowRight, ImageBg } from './MainElements';
import { MyButton, MyButton2 } from '../../ButtonElement';
import logo from '../../../videos/video.gif';

const MainSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <MainContainer>
            <MainBg>
                <ImageBg src={logo} alt="loading..."/>
               
                {/* <VideoBg autoplay loop muted src={Video} type='video/mp4'/> */}
                
            </MainBg>
            <MainContent>
                <MainH1>
                    Create exciting presentations online
                </MainH1>
                <MainP>
                A web application to make your slide making experience quick and easy
                </MainP>
                <MainBtnWrapper>
                    <MyButton2 to='signup' onMouseEnter={onHover} onMouseLeave={onHover}  >
                        Get started 
                         {/* {(hover ? <ArrowForward /> : ArrowRight />)}; */}
                    </MyButton2>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    )
}

export default MainSection
