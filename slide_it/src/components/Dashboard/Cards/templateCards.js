import React from "react";

import {
  // templateCard,
  // templateIcon,
  // templateWrapper,
  // ServicesH1,
  TemplateContainer,
} from "./templateCardElement";

import "./templateCard.css";

const TemplateCard = (props) => {
  return (
    <>
      <TemplateContainer id="templates" className="container">
        {/* <ServicesH1>
          Here are some recommended templates to start up{" "}
        </ServicesH1> */}
        <templateWrapper>
          <div className="card" style={{ maxWidth: "20rem" }}>
            <img src={props.img} alt="template" />
            <div className="card-body">
              <h2>{props.title}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <h5>{props.author}</h5>
            </div>
          </div>
        </templateWrapper>
      </TemplateContainer>
    </>
  );
};

export default TemplateCard;
