import styled from "styled-components";

export const TemplateContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 17%;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const templateWrapper = styled.div`
  margin: 0 auto;
  max-width: 3000px;
  padding: 0 50px;
  align-items: center;
  grid-gap: 50px;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const templateCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    background: #fff;
    width: 24em;
    max-width:20rem;
    border-radius: 0.6em;
    margin: 1em;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
    transition: all ease 200ms;
    &:hover {
        transform: scale(1.03);
        box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
      }
  }
`;

export const templateIcon = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const ServicesH1 = styled.h1`
  margin-bottom: 44px;
  padding-right: 30%;
  font-size: 2rem;
  color: #0d0d0d;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const templateH2 = styled.h2`
  color: #222;
  margin-top: -0.2em;
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  transition: all ease-in 100ms;
`;

export const templateH5 = styled.h2`
  color: #bbb;
  font-weight: 700;
  font-size: 0.7em;
  letter-spacing: 0.04em;
  margin: 1.4em 0 0 0;
  text-transform: uppercase;
`;

export const templateP = styled.p`
  text-align: center;
  font-size: 1rem;
`;
