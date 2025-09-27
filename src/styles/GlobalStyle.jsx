import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    /* informa ao navegador que há modo claro/escuro */
    color-scheme: ${({ theme }) =>
      theme.colors.bg === "#FFFFFF" ? "light" : "dark"};
  }

  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Roboto', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji', sans-serif;
    overflow-x: hidden;
    line-height: 1.5;

    /* transição suave ao alternar tema (leve, não incomoda) */
    transition: background-color .25s ease, color .25s ease;
  }

  a { color: inherit; text-decoration: none; }

  /* imagens e midias responsivas por padrão */
  img, svg, video, canvas {
    display: block;
    max-width: 100%;
  }

  /* botões e inputs com fonte herdada */
  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  /* foco visível acessível */
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* seleção de texto com a cor do tema */
  ::selection {
    background: ${({ theme }) => theme.colors.selection};
  }

  /* scrollbar opcional */
  ::-webkit-scrollbar {
    width: 10px;
    background: ${({ theme }) => theme.colors.panelDark};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 6px;
  }

  /* remove bullets padrão quando usar <ul> como menu */
  ul[role="list"], ol[role="list"] {
    list-style: none;
    padding-left: 0;
  }

  /* seções ancoradas não ficarem escondidas pelo header fixo */
  section[id] {
    scroll-margin-top: 80px; /* ajuste se seu header tiver outra altura */
  }

  /* respeita usuários que preferem menos animação */
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
