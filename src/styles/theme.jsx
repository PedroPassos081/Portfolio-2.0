const common = {
  bp: { sm: "480px", md: "768px" },
  radius: { sm: "6px", md: "10px", lg: "20px", pill: "999px" },
  z: { header: 1000, modal: 1100 },
  // espaços opcionais (se quiser usar spacing scale)
  space: [0, 4, 8, 12, 16, 20, 24, 32, 40],
};

const darkTheme = {
  ...common,
  colors: {
    bg: "#0D1117", // fundo principal (GitHub dark vibe)
    panel: "#161B22", // painéis/cards
    panelDark: "#0A0F16", // mais profundo
    text: "#E6EDF3", // texto principal
    textMuted: "#8B949E", // texto secundário

    primary: "#58A6FF", // azul neon (links, highlights)
    secondary: "#D2A8FF", // roxo neon suave
    accent: "#1F6FEB", // azul mais forte

    border: "#30363D", // bordas

    success: "#3FB950", // verde sucesso
    warning: "#D29922", // dourado alerta
    danger: "#F85149", // vermelho erro

    selection: "rgba(88,166,255,0.25)", // highlight de seleção
  },
  shadow: "0 7px 18px rgba(0,0,0,0.4)",
  gradientHero: "linear-gradient(90deg, #58A6FF 0%, #D2A8FF 100%)",
};
const lightTheme = {
  ...common,
  colors: {
    bg: "#FFFFFF",
    panel: "#F5F7FB",
    panelDark: "#E9EDF5",
    text: "#121212",
    textMuted: "#4B5563",

    primary: "#0284C7", // ciano mais escuro pra contraste no claro
    secondary: "#7C3AED",

    success: "#16A34A",
    warning: "#D97706",
    danger: "#DC2626",

    border: "#D8DFEB",

    accent: "#0284C7",
    selection: "rgba(2,132,199,0.18)",
  },
  shadow: "0 7px 18px rgba(0,0,0,0.08)",
  gradientHero: "linear-gradient(90deg, #0284C7 0%, #7C3AED 100%)",
};

export default darkTheme;
export { lightTheme, common };
