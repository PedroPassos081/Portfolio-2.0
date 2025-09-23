import styled from "styled-components";
import { useEffect, useState, useCallback } from "react";
import { FaBars } from "react-icons/fa";

/* helper: evita 2 interpolations no @media */
const betweenSmMd = (p) =>
  `(min-width: ${p.theme.bp.sm}) and (max-width: ${p.theme.bp.md})`;

const HeaderWrap = styled.header`
  padding: 24px 0;
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadow};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: ${(p) => p.theme.bp.sm}) {
    padding: 20px 30px;
    position: relative;
  }

  @media ${betweenSmMd} {
    padding: 25px 30px;
    position: relative;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.a`
  font-size: 32px;
  font-weight: bold;
  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  list-style: none;

  a {
    position: relative;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 700;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    z-index: 1;
    overflow: hidden;

    /* fundo preto com borda arredondada que “desce” no hover */
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: ${({ theme }) => theme.colors.panelDark};
      border-radius: 8px;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.28s ease;
      z-index: -1;
    }
    &:hover::after,
    &:focus-visible::after {
      transform: scaleY(1);
    }
  }

  /* drawer até sm */
  @media (max-width: ${(p) => p.theme.bp.sm}) {
    position: absolute;
    top: 66px;
    right: ${({ $open }) => ($open ? "0" : "-160px")};
    background: ${({ theme }) => theme.colors.panel};
    display: grid;
    width: 148px;
    padding: 15px;
    border-radius: 0 0 5px 5px;
    box-shadow: ${({ theme }) => theme.shadow};
    gap: 24px;
    transition: right 0.35s ease-in-out;
  }

  /* drawer entre sm e md (1 interpolação só!) */
  @media ${betweenSmMd} {
    position: absolute;
    top: 80px;
    right: ${({ $open }) => ($open ? "0" : "-180px")};
    background: ${({ theme }) => theme.colors.panel};
    display: grid;
    width: 178px;
    padding: 15px;
    border-radius: 0 0 5px 5px;
    box-shadow: ${({ theme }) => theme.shadow};
    gap: 32px;
    transition: right 0.35s ease-in-out;
  }
`;

const Burger = styled(FaBars)`
  display: none;
  cursor: pointer;
  @media (max-width: ${(p) => p.theme.bp.md}) {
    display: block;
    font-size: 24px;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onNavClick = useCallback((e) => {
    const a = e.target.closest("a");
    if (a) setIsOpen(false);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    console.log("Header montado!");
  }, []);

  return (
    <HeaderWrap id="inicio">
      <HeaderContainer>
        <Title href="#inicio">
          <span>&lt; Pedro Passos /&gt;</span>
        </Title>
        <Nav>
          <NavList
            $open={isOpen}
            onClick={onNavClick}
            className="primary-navgation"
          >
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
