import { useContext } from "react";
import styled from "styled-components";

//import { ReactComponent as FooterIcon } from "bootstrap-icons/icons/align-bottom.svg";
import { BiCog  as FooterIcon  } from "react-icons/bi";

import { SlidesContext } from "../../../../context/slides";

import StyledButton from "../StyledButton";
import { HistoryContext } from "../../../../context/history";

const Container = styled.div`
  display: inline-block;
`;

const Footer=() =>{
  const { currentSlide, addElement, removeElement } = useContext(SlidesContext);
  const { addAction } = useContext(HistoryContext);

  return (
    <Container>
      <StyledButton
        data-tooltip="Footer item"
        onClick={() => {
          const id = new Date().getTime();
          addAction(
            () =>
              addElement(currentSlide, {
                id,
                type: "footer",
                value: "Made with Slide it",
              }),
            () => removeElement(currentSlide, id)
          );
        }}
      >
        <FooterIcon />
      </StyledButton>
    </Container>
  );
}

export default Footer;
