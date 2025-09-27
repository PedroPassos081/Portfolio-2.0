import { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme, { lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches;

  const [mode, setMode] = useState(
    () => localStorage.getItem("theme-mode") || (prefersDark ? "dark" : "light")
  );

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const theme = useMemo(
    () => (mode === "dark" ? darkTheme : lightTheme),
    [mode]
  );
  const toggleTheme = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onToggleTheme={toggleTheme} currentMode={mode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
