import React from 'react';
import Icon1 from '../../../images/svg7.svg';
import Icon2 from '../../../images/svg2.svg';
import Icon3 from '../../../images/svg1.svg';
import { ServicesCard, ServicesContainer, ServicesIcon, ServicesWrapper, ServicesH2, ServicesP , ServicesH1} from './ServiceElements';

const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1> Our services </ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Themes</ServicesH2>
                        <ServicesP>customize themes and colour schemes to your need</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>collaborate with team</ServicesH2>
                        <ServicesP>real time collaborative editing with friends and colleagues</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Graph, chart and image</ServicesH2>
                        <ServicesP>add text, graph, chart, table, image, animation etc.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            
        </ServicesContainer>
            
        </>
    )
}

export default Services
