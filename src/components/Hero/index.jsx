// src/components/Hero/index.jsx
import { useEffect, useRef } from "react";
import styled from "styled-components";
import minhaFoto from "../../assets/images/minha_foto.png";

const Section = styled.section`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bg};
  padding: 160px 0 60px; /* espaço por causa do header fixo */

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    padding: 120px 0 40px;
  }
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Texts = styled.div`
  p {
    font-size: 24px;
    margin-bottom: 18px;

    @media (max-width: ${({ theme }) => theme.bp.md}) {
      font-size: 18px;
      line-height: 26px;
    }
  }
`;

const Typed = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  background-image: linear-gradient(to right, #58a6ff, #d2a8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 36px;
    white-space: normal;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;

  height: 42px;
  min-width: 200px;
  padding: 0 18px;

  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
  transition: background 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    min-width: 160px;
    height: 36px;
    font-size: 14px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    justify-content: center;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 520px;
    max-width: 100%;
    border-radius: 300px;
  }
`;

function Hero() {
  // dentro do Hero
  const typedRef = useRef(null);

  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;

    const text = "Desenvolvedor Full-Stack";
    let i = 0;
    let deleting = false;

    const tick = () => {
      if (!deleting) {
        // escrevendo
        el.textContent = text.slice(0, i + 1);
        i++;
        if (i === text.length) {
          deleting = true;
          setTimeout(tick, 1500); // pausa no final
          return;
        }
      } else {
        // apagando
        el.textContent = text.slice(0, i - 1);
        i--;
        if (i === 0) {
          deleting = false;
        }
      }
      setTimeout(tick, deleting ? 60 : 120); // velocidade de apagar x escrever
    };

    tick();
  }, []);

  return (
    <Section id="inicio">
      <Container>
        <Texts>
          <p>
            Olá!, Me chamo <b>Pedro Passos</b> e eu sou
          </p>
          <Typed ref={typedRef} />

          <ButtonsRow>
            <Button href="#projetos">Ver Projetos</Button>
            <Button
              href="/docs/Curriculo_Pedro_Passos.pdf"
              download="Pedro_Passos_Curriculo"
            >
              Download CV
            </Button>
          </ButtonsRow>
        </Texts>

        <ImageWrap data-aos="fade-left" data-aos-duration="1500">
          {/* ajuste o caminho se sua imagem estiver em outro lugar */}
          <img src={minhaFoto} alt="Pedro Passos" />
        </ImageWrap>
      </Container>
    </Section>
  );
}

export default Hero;
