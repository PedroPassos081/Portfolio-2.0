// src/components/Header/index.jsx
import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { FaBars } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const HeaderWrap = styled.header`
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadow};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.z.header};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.a`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) =>
    theme.colors.text}; /* <- simples, funciona nos 2 temas */
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px; /* espaço com o toggle/burger */
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  a {
    position: relative;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 700;
    padding: 8px 12px;
    border-radius: ${({ theme }) => theme.radius.md};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: ${({ theme }) => theme.radius.md};
      opacity: 0;
      transition: opacity 0.3s, height 0.3s;
      background: ${({ theme }) => theme.colors.panelDark};
      height: 1px;
      z-index: -1;
    }
    &:hover::after {
      opacity: 1;
      height: 100%;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  /* Versão mobile */
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    position: absolute;
    top: 64px;
    right: ${({ $open }) => ($open ? "0" : "-220px")};
    flex-direction: column;
    background: ${({ theme }) => theme.colors.panel};
    padding: 20px;
    border-radius: 0 0 10px 10px;
    box-shadow: ${({ theme }) => theme.shadow};
    gap: 16px;
    transition: right 0.3s ease-in-out;
  }
`;

const Burger = styled(FaBars)`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: block;
    font-size: 26px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* Botão de alternância de tema */
const ThemeToggle = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 11px;
    padding: 6px 10px;
  }
`;

export default function Header({ onToggleTheme, currentMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const onNavClick = useCallback((e) => {
    if (e.target.closest("a")) setIsOpen(false);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <HeaderWrap id="inicio">
      <HeaderContainer>
        <Title href="#inicio">&lt; Pedro Passos /&gt;</Title>

        <Nav>
          <NavList $open={isOpen} onClick={onNavClick}>
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#sobre">Sobre Mim</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </NavList>

          {/* Toggle de tema */}
          <ThemeToggle onClick={onToggleTheme} aria-label="Alternar tema">
            {currentMode === "dark" ? <FaSun /> : <FaMoon />}
          </ThemeToggle>

          <Burger
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Abrir menu"
          />
        </Nav>
      </HeaderContainer>
    </HeaderWrap>
  );
}
