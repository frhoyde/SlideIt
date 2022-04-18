import { useContext } from "react";

import styled from "styled-components";

import { DeckContext } from "../../context/deck";

const colours = [
  "#e3fafc",
  "#c5f6fa",
  "#99e9f2",
  "#66d9e8",
  "#3bc9db",
  "#22b8cf",
  "#15aabf",
  "#1098ad",
  "#0c8599",
  "#0b7285",
];

// const StyledLoadingBar = styled.div<{ loading: boolean }>`
//   flex: 1;
//   max-height: 2px;
//   height: 2px;
//   width: 100%;
//   ${({ loading }) =>
//     loading
//       ? `background-image: linear-gradient(to right, ${colours.join(",")})`
//       : "background: #e3fafc"};
//   animation: ${({ loading }) =>
//     loading ? "colorAnimation 0.7s infinite" : "none"};

//   @keyframes colorAnimation {
//     ${colours
//       .reduce(
//         (initial, _, index) => {
//           const current = initial[index];
//           const first = current.slice(0, -1);
//           const last = current.slice(-1);
//           return [...initial, [...last, ...first]];
//         },
//         [colours]
//       )
//       .map(
//         (item, index) => `
//     ${(100 * index) / colours.length}% {
//       background-image: linear-gradient(
//         to right,
//         ${item.join(",")}
//       );
//     }
//     `
//       )}
//   }
// `;

// function LoadingBar() {
//   const { loading } = useContext(DeckContext);
//   return <StyledLoadingBar loading={loading} />;
// }

var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var StyledLoadingBar = styled.div(
  __makeTemplateObject(
    [
      "\n  flex: 1;\n  max-height: 2px;\n  height: 2px;\n  width: 100%;\n  ",
      ";\n  animation: ",
      ";\n\n  @keyframes colorAnimation {\n    ",
      "\n  }\n",
    ],
    [
      "\n  flex: 1;\n  max-height: 2px;\n  height: 2px;\n  width: 100%;\n  ",
      ";\n  animation: ",
      ";\n\n  @keyframes colorAnimation {\n    ",
      "\n  }\n",
    ]
  ),
  function (_a) {
    var loading = _a.loading;
    return loading
      ? "background-image: linear-gradient(to right, ".concat(
          colours.join(","),
          ")"
        )
      : "background: #e3fafc";
  },
  function (_a) {
    var loading = _a.loading;
    return loading ? "colorAnimation 0.7s infinite" : "none";
  },
  colours
    .reduce(
      function (initial, _, index) {
        var current = initial[index];
        var first = current.slice(0, -1);
        var last = current.slice(-1);
        return __spreadArray(
          __spreadArray([], initial, true),
          [__spreadArray(__spreadArray([], last, true), first, true)],
          false
        );
      },
      [colours]
    )
    .map(function (item, index) {
      return "\n    "
        .concat(
          (100 * index) / colours.length,
          "% {\n      background-image: linear-gradient(\n        to right,\n        "
        )
        .concat(item.join(","), "\n      );\n    }\n    ");
    })
);

function LoadingBar() {
  const { loading } = useContext(DeckContext);
  return <StyledLoadingBar loading={loading} />;
}

export default LoadingBar;
