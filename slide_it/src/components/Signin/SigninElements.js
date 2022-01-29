import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-height:  692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #fff;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  justify-content: center;
  @media screen and (max-width: 400px) {
      height: 80%;
  }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    @media screen and (max-width: 400px) {
        margin-left: 16px;
        margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 400px) {
      padding: 10px;
  }
`;

export const Form = styled.form`
  min-height:  692px;
  height: auto;
  width: 400px;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  background: #f47100;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
      padding: 32px 32px;
  }
`;
 
export const FromH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FromLabel = styled.label`
    margin-bottom: 8px;
    color: #fff;
    font-size: 14px;
`;



export const FormInput = styled.input`
  margin-bottom: 32px;
  border:none;
  border-radius: 4px;
  padding: 16px 16px;
  
`;

export const FormButton = styled.button`
  cursor: pointer;
  padding: 16px 0;
  background: #01bf71;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  
`;