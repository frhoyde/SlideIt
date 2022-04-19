import React, { useState } from "react";
import Icon1 from "../../../images/creative1.png";
import Icon2 from "../../../images/creative2.png";
import Icon3 from "../../../images/creative3.png";
import Icon4 from "../../../images/creative4.png";
import Icon5 from "../../../images/creative5.png";
import Icon6 from "../../../images/presentation3.jpg";
import Icon7 from "../../../images/presentation4.jpg";
import Icon8 from "../../../images/presentation5.jpg";
import Icon9 from "../../../images/presentation6.jpg";
import Icon10 from "../../../images/creative6.png";
import Icon11 from "../../../images/presentation8.jpg";
import Icon12 from "../../../images/presentation9.jpg";

import {
  ServicesCard,
  ServicesContainer,
  ServicesIcon,
  ServicesWrapper,
  ServicesH2,
  ServicesButton,
  ServicesP,
  ServicesH1,
} from "./templateCardElement";

const Services = () => {
  const [style, setStyle] = useState({ display: "none" });
  return (
    <>
      <div>
        <ServicesContainer id="services">
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon7} />
              <ServicesButton>
                <ServicesH2>Basic Dark</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{
                    color: "#f47100",
                    marginLeft: "8rem",
                    marginBottom: "0px",
                  }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon8} />

              <ServicesButton>
                <ServicesH2>Astronomy</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon9} />

              <ServicesButton>
                <ServicesH2>Classic wedding</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
        <ServicesContainer id="services">
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon10} />

              <ServicesButton>
                <ServicesH2>Creative</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon11} />

              <ServicesButton>
                <ServicesH2>Royal</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon12} />

              <ServicesButton>
                <ServicesH2>Fun Doodle</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>

        <ServicesContainer id="services">
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon4} />

              <ServicesButton>
                <ServicesH2>Design plan</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon5} />

              <ServicesButton>
                <ServicesH2>Teach Kids</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon6} />

              <ServicesButton>
                <ServicesH2>Lights</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
        <ServicesContainer id="services">
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1} />

              <ServicesButton>
                <ServicesH2>Artistics effects</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2} />

              <ServicesButton>
                <ServicesH2>Employee Handbook</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3} />

              <ServicesButton>
                <ServicesH2>Company Meeting</ServicesH2>
                <button
                  type="button"
                  className="btn btn-sm fa fa-heart"
                  style={{ color: "#f47100", marginLeft: "8rem" }}
                  // icon={<FaRegHeart />}
                ></button>{" "}
              </ServicesButton>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>

        {/* <div class="artist-card">
  <h2 class="artist-card__title">St. Vincent</h2>
  <img class="artist-card__img" src="https://drive.google.com/uc?export=view&id=1u5BffcNc9U0DNGBgsrd-r833PSb0b3K1" alt="St. Vincent"></img>
</div> */}
      </div>
    </>
  );
};

export default Services;
