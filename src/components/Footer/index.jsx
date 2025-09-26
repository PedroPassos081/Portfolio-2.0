// src/components/Footer/index.jsx
import styled from "styled-components";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

const FooterWrap = styled.footer`
  margin-top: 80px;
  padding: 40px 20px;
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  border-top: 2px solid transparent;
  border-image: linear-gradient(to right, #58a6ff, #d2a8ff);
  border-image-slice: 1;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 26px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.bp.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copy = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  font-size: 22px;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.25s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <Copy>© 2025 Pedro Passos. Todos os direitos reservados.</Copy>

        <Socials>
          <a
            href="mailto:pedro.passos081@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
          </a>
          <a
            href="https://linkedin.com/in/pedro-passos081"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
          <a
            href="https://github.com/PedroPassos081"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub />
          </a>
        </Socials>
      </Container>
    </FooterWrap>
  );
}
