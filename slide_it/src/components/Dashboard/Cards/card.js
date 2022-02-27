import React from "react";
import Icon1 from "../../../images/svg7.svg";
import Icon2 from "../../../images/svg8.svg";
import Icon3 from "../../../images/svg10.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesIcon,
  ServicesWrapper,
  ServicesH2,
  ServicesP,
  ServicesH1,
} from "./cardElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>
          Hello, You're ready to start your first presentation{" "}
        </ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Use a Template</ServicesH2>
            <ServicesP>Use any template </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Blank Presentation</ServicesH2>
            <ServicesP>Create your own slides </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Redesign a presentation</ServicesH2>
            <ServicesP>Edit any existing presentation  </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
