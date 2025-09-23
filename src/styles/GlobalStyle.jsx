import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { overflow-x: hidden; scroll-behavior: smooth; }
  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Roboto', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji', sans-serif;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }

  /* scrollbar opcional */
  ::-webkit-scrollbar { width: 10px; background: ${({ theme }) =>
    theme.colors.panelDark}; }
  ::-webkit-scrollbar-thumb { background: ${({ theme }) =>
    theme.colors.accent}; border-radius: 6px; }
`;
