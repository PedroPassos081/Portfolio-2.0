import styled from "styled-components";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const HeaderWrap = styled.header`
  padding: 24px 0;
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 7px 11px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    padding: 20px 30px;
    position: relative;
  }
  @media (min-width: ${({ theme }) => theme.bp.sm}) and (max-width: ${({ theme }) => theme.bp.md}) {
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
`;

const Title = styled.a`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Header montado!");
  }, []);

  return (
    <HeaderWrap>
      <HeaderContainer>
        <Title href="#inicio">&lt; Pedro Passos /&gt;</Title>
        <FaBars
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer" }}
        />
      </HeaderContainer>
    </HeaderWrap>
  );
}
