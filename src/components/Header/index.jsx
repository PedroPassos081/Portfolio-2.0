import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { FaBars } from "react-icons/fa";

const HeaderWrap = styled.header`
  padding: 24px 0;
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
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  a {
    position: relative;
    font-size: 12px;
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
`;

const Burger = styled(FaBars)`
  display: none;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: block;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default function Header() {
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
          <Burger
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Abrir menu"
          />
        </Nav>
      </HeaderContainer>
    </HeaderWrap>
  );
}
