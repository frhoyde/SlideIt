import { useContext } from "react";
import styled from "styled-components";

import { SlidesContext } from "../../../context/slides";

import { BsChevronCompactLeft as LeftIcon } from "react-icons/bs";
import { BsChevronCompactRight as RightIcon } from "react-icons/bs";

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const LeftContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -50px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
const RightContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

function ArraysWrapper() {
  const { currentSlide, setCurrentSlide, slides } = useContext(SlidesContext);

  return (
    <>
      <InnerContainer>
        <LeftContainer>
          {currentSlide !== 0 && (
            <LeftIcon onClick={() => setCurrentSlide(currentSlide - 1)} />
          )}
        </LeftContainer>
        <RightContainer>
          {currentSlide !== slides.length - 1 && (
            <RightIcon onClick={() => setCurrentSlide(currentSlide + 1)} />
          )}
        </RightContainer>
      </InnerContainer>
    </>
  );
}

export default ArraysWrapper;
