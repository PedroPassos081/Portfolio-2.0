// src/components/About/index.jsx
import styled from "styled-components";
import fotoPerfil from "../../assets/images/minha_foto.png";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  padding: 100px 0;
`;

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TitleWrap = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    background: linear-gradient(to right, #58a6ff, #d2a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    display: inline-block;
    padding-bottom: 6px;
    border-radius: 6px;
  }
  h3 {
    margin-top: 10px;
    font-weight: 400;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }

`;

/* Borda gradiente externa */
const CardOuter = styled.div`
  border-radius: 20px;
  padding: 2px; /* espessura da borda */
  background: linear-gradient(to right, #58a6ff, #d2a8ff);
`;

/* Conteúdo interno sólido */
const CardInner = styled.div`
  background: ${({ theme }) => theme.colors.panel};
  border-radius: 18px;
  padding: 40px;

  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 3px; /* espessura da borda */
  background: linear-gradient(to right, #58a6ff, #d2a8ff);

  img {
    width: 320px;
    max-width: 100%;
    border-radius: 15px; /* menor que o pai */
    background: ${({ theme }) => theme.colors.bg};
    padding: 6px; /* respiro entre borda e foto */
    object-fit: cover;
  }
`;

const Text = styled.div`
  p {
    font-size: 20px;
    line-height: 30px;
    margin: 55px 0;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default function About() {
    return (
        <Section id="sobre">
            <Container>
                <TitleWrap>
                    <h2>Sobre Mim</h2>
                    <h3>Apresentação Pessoal</h3>
                </TitleWrap>

                <CardOuter data-aos="flip-up" data-aos-duration="1500">
                    <CardInner>
                        <Photo>
                            <img src={fotoPerfil} alt="Pedro Passos" />
                        </Photo>

                        <Text>
                            <p>
                                Sou formado em Análise e Desenvolvimento de Sistemas (UNIFG) e
                                pós-graduando em Desenvolvimento Fullstack (FIAP).
                            </p>
                            <p>
                                Construí uma base sólida em algoritmos e lógica de programação,
                                que me dá segurança para trabalhar em diferentes cenários de
                                desenvolvimento. Hoje, meu foco está em React, Next.js, Node.js
                                e TypeScript, tecnologias que aplico em projetos para criar
                                soluções escaláveis, bem estruturadas e alinhadas às melhores
                                práticas do mercado.
                            </p>
                            <p>
                                Sou apaixonado por tecnologia e busco constantemente evoluir
                                como desenvolvedor, unindo aprendizado contínuo e prática em
                                cada projeto que realizo.
                            </p>
                        </Text>
                    </CardInner>
                </CardOuter>
            </Container>
        </Section>
    );
}
