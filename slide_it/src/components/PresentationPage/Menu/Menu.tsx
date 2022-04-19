import styled from "styled-components";
import { useRef } from "react";
import { FileSystemHandle } from "browser-fs-access";
import { BsFillPlayFill as PlayIcon } from "react-icons/bs";

import StyledButton from "./StyledButton";
import Quote from "./Buttons/Quote";
import Codeblock from "./Buttons/Codeblock";
import Header from "./Buttons/Header";
import Footer from "./Buttons/Footer";
import List from "./Buttons/List";
import Image from "./Buttons/Image";
import Paragraph from "./Buttons/Paragraph";
import Save from "./Buttons/Save";
import Undo from "./Buttons/Undo";
import Redo from "./Buttons/Redo";
import Load from "./Buttons/Load";
import New from "./Buttons/New";
import Settings from "./Buttons/Settings";

const Container = styled.div`
  display: flex;
  
  flex-orientation: column;
  align-items: center;
  justify-content: center;
  padding: .5em 0.5em;
`;

const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
`;
const Right = styled.div`
  text-align: right;
  flex: 1;
`;


function Menu({ togglePresent }: { togglePresent: () => void }) {
  const fileHandle = useRef<FileSystemHandle | null>(null);

  return (
    <Container>
      <Left>
        <StyledButton
          onClick={() => {
            togglePresent();
          }}
          title="Present"
          style={{
            background: "#FFB300",
            color: "white",
            borderColor: "#FFB300",
          }}
          data-tooltip="Present"
        >
          <PlayIcon />
        </StyledButton>
        <New ref={fileHandle} />
        <Save ref={fileHandle} />
        <Load ref={fileHandle} />
        <Settings />
        
      </Left>
      <Center>
        <>
          <Header />
          <Paragraph />
          <Image />
          <List />
          <Quote />
          <Footer />
          <Codeblock />
        </>
      </Center>
      <Right>
      <Undo />
        <Redo />
      </Right>
    </Container>
  );
}

export default Menu;
