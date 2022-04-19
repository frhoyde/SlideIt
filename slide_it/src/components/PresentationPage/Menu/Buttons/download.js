import { forwardRef, useContext } from "react";
import { fileSave } from "browser-fs-access";
//import { ReactComponent as SaveIcon } from "bootstrap-icons/icons/save.svg";
import { BsDownload  as SaveIcon  } from "react-icons/bs";
import { SlidesContext } from "../../../../context/slides";
import { DeckContext } from "../../../../context/deck";

import StyledButton from "../StyledButton";

//function Save(_: any, ref: any) {
  const Download = (ref)=> {

  const { slides } = useContext(SlidesContext);
  const { setLoading, size, colours } = useContext(DeckContext);

  async function download() {
    setLoading(true);
    const obj = { version: 1, slides, size, colours };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });
    try {
      ref.current = await fileSave(
        blob,
        {
          fileName: "presentation.prt",
          extensions: [".prt"],
        },
        ref.current
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <StyledButton 
    onClick={download}
     data-tooltip="Download">
      <SaveIcon /> <b>{ref.current && ref.current.name}</b>
    </StyledButton>
  );
}

export default forwardRef(Download);
