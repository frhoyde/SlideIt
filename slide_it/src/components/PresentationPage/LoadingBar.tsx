import { useContext } from "react";

import styled from "styled-components";

import { DeckContext } from "../../context/deck";

const colours = [
  "#FFF8E1",
  "#FFECB3",
  "#FFE082",
  "#FFD54F",
  "#FFCA28",
  "#FFC107",
  "#FFB300",
  "#FFA000",
  "#FF8F00",
  "#FF6F00",
];

const StyledLoadingBar = styled.div<{ loading: boolean }>`
  flex: 1;
  max-height: 2px;
  height: 2px;
  width: 100%;
  ${({ loading }) =>
    loading
      ? `background-image: linear-gradient(to right, ${colours.join(",")})`
      : "background: #e3fafc"};
  animation: ${({ loading }) =>
    loading ? "colorAnimation 0.7s infinite" : "none"};

  @keyframes colorAnimation {
    ${colours
      .reduce(
        (initial, _, index) => {
          const current = initial[index];
          const first = current.slice(0, -1);
          const last = current.slice(-1);
          return [...initial, [...last, ...first]];
        },
        [colours]
      )
      .map(
        (item, index) => `
    ${(100 * index) / colours.length}% {
      background-image: linear-gradient(
        to right,
        ${item.join(",")}
      );
    }
    `
      )}
  }
`;

function LoadingBar() {
  const { loading } = useContext(DeckContext);
  return <StyledLoadingBar loading={loading} />;
}

export default LoadingBar;
