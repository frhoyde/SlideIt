import styled from "styled-components";
import { useContext } from "react";
//import { ReactComponent as CodeblockIcon } from "bootstrap-icons/icons/code-slash.svg";
import { BsCodeSlash  as CodeblockIcon  } from "react-icons/bs";
import { SlidesContext } from "../../../../context/slides";
import { HistoryContext } from "../../../../context/history";

import StyledButton from "../StyledButton";

const Container = styled.div`
  display: inline-block;
`;

const Codeblock=()=> {
  const { currentSlide, addElement, removeElement } = useContext(SlidesContext);
  const { addAction } = useContext(HistoryContext);

  return (
    <Container>
      <StyledButton
        data-tooltip="Code block"
        title="Codeblock"
        onClick={() => {
          const id = new Date().getTime();
          addAction(
            () =>
              addElement(currentSlide, {
                id,
                type: "codeblock",
                value: "// insert code block here",
              }),
            () => removeElement(currentSlide, id)
          );
        }}
      >
        <CodeblockIcon />
      </StyledButton>
    </Container>
  );
}

export default Codeblock;
