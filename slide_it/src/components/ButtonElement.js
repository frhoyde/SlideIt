import styled from "styled-components";
import { Link } from "react-scroll";

export const MyButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#F47100' :  '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' :  '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' :  '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' :  '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    transition: all 0.2s ease-in-out;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' :  '#F47100')};
        
        
    }
`