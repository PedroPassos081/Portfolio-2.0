import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html, body {
    background: ${({ theme }) => theme.colors.bg};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  html::-webkit-scrollbar {
    width: 10px;
    background-color: ${({ theme }) => theme.colors.dark};
  }

  html::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 6px;
  }
`;
