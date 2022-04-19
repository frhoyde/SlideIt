import { forwardRef, useContext } from "react";
//import { ReactComponent as NewIcon } from "bootstrap-icons/icons/file-earmark-plus.svg";
import { BsFileEarmarkPlus  as NewIcon  } from "react-icons/bs";
import { SlidesContext } from "../../../../context/slides";

import StyledButton from "../StyledButton";

//function New(_: any, ref: any) {
const New = (_, ref)=> {
  const { setCurrentSlide, setSlides } = useContext(SlidesContext);

  async function newFile() {
    if (window.confirm("Have you saved current work?")) {
      setCurrentSlide(0);
     ref.current = null;
      setSlides([{ state: "normal", elements: [] }]);
    }
  }

  return (
    <StyledButton onClick={newFile} data-tooltip="New">
      <NewIcon />
    </StyledButton>
  );
}

export default forwardRef(New);
