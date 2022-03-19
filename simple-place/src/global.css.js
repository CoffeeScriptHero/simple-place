import { createGlobalStyle } from "styled-components";

import QuicksandWoff700 from "./assets/fonts/Quicksand/Quicksand-Bold.woff";
import QuicksandWoff600 from "./assets/fonts/Quicksand/Quicksand-SemiBold.woff";
import QuicksandWoff500 from "./assets/fonts/Quicksand/Quicksand-Medium.woff";
import QuicksandWoff400 from "./assets/fonts/Quicksand/Quicksand-Regular.woff";

const GlobalCSS = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff700}) format("woff");
    font-weight: 700;
  }
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff600}) format("woff");
    font-weight: 600;
  }
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff500}) format("woff");
    font-weight: 500;
  }
  @font-face {
    font-family: "Quicksand";
    src: local("Quicksand"),
      url(${QuicksandWoff400}) format("woff");
    font-weight: normal;
  }  
`;

export default GlobalCSS;
