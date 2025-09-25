import styled from "styled-components";
import menuDigital from "../../assets/images/menu-digital.png";
import jogoMemoria from "../../assets/images/projeto_jogo_memoria.png";
import pomodoro from "../../assets/images/projeto_pomodoro.png";
import artigos from "../../assets/images/projeto_artigos.png";
import alphafit from "../../assets/images/projeto_alphafit.png";
import advocacia from "../../assets/images/projeto_advocacia.png";

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
    opacity: 0.9;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

/* Borda gradiente externa */
const CardOuter = styled.div`
  border-radius: 18px;
  padding: 2px;
  background: linear-gradient(to right, #58a6ff, #d2a8ff);
`;

/* Conteúdo */
const CardInner = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 8px; /* 🔹 cria espaço entre borda gradiente e conteúdo */

  img {
    width: 100%;
    display: block;
    height: 200px;
    object-fit: cover;
    border-radius: 12px; /* 🔹 arredonda imagem dentro do padding */
  }

  .body {
    padding: 16px;
    display: grid;
    gap: 10px;

    h4 {
      font-size: 18px;
      font-weight: 700;
    }

    button {
      cursor: pointer;
      width: 100%;
      height: 38px;
      border-radius: 999px;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.panel};
      color: ${({ theme }) => theme.colors.text};
      font-weight: 700;
      letter-spacing: 1px;
      transition: background 0.25s ease, color 0.25s ease,
        border-color 0.25s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
        border-color: ${({ theme }) => theme.colors.secondary};
        color: #fff;
      }
    }
  }
`;

/* Modal */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ $open }) => ($open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalOuter = styled.div`
  border-radius: 18px;
  padding: 2px;
  background: linear-gradient(to right, #58a6ff, #d2a8ff);
  max-width: 640px;
  width: 100%;
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 16px;
  padding: 22px;
  display: grid;
  gap: 14px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: start;

    h3 {
      font-size: 22px;
      background: linear-gradient(to right, #58a6ff, #d2a8ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-right: 10px;
    }

    .close {
      border: 0;
      background: transparent;
      color: ${({ theme }) => theme.colors.text};
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
    }
  }

  .preview {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
      max-height: 300px;
      object-fit: cover;
    }
  }

  .meta {
    font-size: 14px;
    opacity: 0.9;
    line-height: 1.6;
  }

  .links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

    a {
      flex: 1;
      min-width: 140px;
      text-align: center;
      padding: 10px 14px;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 700;

      border: 2px solid ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.panel};
      color: ${({ theme }) => theme.colors.text};
      transition: background 0.25s ease, color 0.25s ease, border 0.25s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
        border-color: ${({ theme }) => theme.colors.secondary};
        color: #fff;
      }
    }
  }
`;

import { useState } from "react";

/** Editar projetos aqui */
const projects = [
  {
    title: "Menu Digital",
    img: menuDigital,
    desc: "Site de menu para restaurante/lanchonete que envia pedidos direto para o WhatsApp.",
    techs: "Git, JavaScript, jQuery, Bootstrap, CSS3, HTML5",
    code: "https://github.com/PedroPassos081/menu_virtual",
    demo: "https://menu-virtual.vercel.app/",
  },
  {
    title: "Jogo da Memória - Hora de Aventura",
    img: jogoMemoria,
    desc: "Acesse após inserir um nickname (≥ 3 chars). Encontre os 10 pares para vencer.",
    techs: "Git, CSS3, JavaScript, HTML5",
    code: "https://github.com/PedroPassos081/jogo-da-memoria",
    demo: "https://jogo-da-memoria-psi-ashy.vercel.app/",
  },
  {
    title: "Projeto Pomodoro",
    img: pomodoro,
    desc: "Timer Pomodoro: 25 minutos de foco, 5 de pausa, com pausa longa a cada 4 ciclos.",
    techs: "Git, JavaScript, CSS3, HTML5",
    code: "https://github.com/PedroPassos081/pomodoro",
    demo: "https://pomodoro-tau-dusky.vercel.app/",
  },
  {
    title: "Página com artigos",
    img: artigos,
    desc: "Página criada para estudos com artigos de tecnologia e estrutura de blog.",
    techs: "React, JavaScript, Git",
    code: "https://github.com/PedroPassos081/ola-mundo",
    demo: "https://ola-mundo-phi-liard.vercel.app/",
  },
  {
    title: "Landing Page AlphaFit",
    img: alphafit,
    desc: "Quase um clone da Smart Fit, para praticar HTML & CSS com layout responsivo.",
    techs: "HTML5, CSS3",
    code: "https://github.com/PedroPassos081/Alpha-Fit",
    demo: "https://alpha-fit-pedropassos081s-projects.vercel.app/",
  },
  {
    title: "Landing Page Advocacia",
    img: advocacia,
    desc: "Landing page baseada em layout feito no Figma por mim.",
    techs: "Git, HTML5, CSS3",
    code: "https://github.com/PedroPassos081/site-escritorio-advocacia-",
    demo: "https://site-escritorio-advocacia.vercel.app/#",
  },
];
function Projects() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const onOpen = (p) => {
    setCurrent(p);
    setOpen(true);
  };

  return (
    <Section id="projetos">
      <Container>
        <TitleWrap>
          <h2>Projetos</h2>
          <h3>Prática & Determinação</h3>
        </TitleWrap>

        <Grid data-aos="flip-up" data-aos-duration="1200">
          {projects.map((p) => (
            <CardOuter key={p.title}>
              <CardInner>
                <img src={p.img} alt={p.title} />
                <div className="body">
                  <h4>{p.title}</h4>
                  <button onClick={() => onOpen(p)}>Saiba Mais</button>
                </div>
              </CardInner>
            </CardOuter>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      <Backdrop $open={open} onClick={() => setOpen(false)}>
        {current && (
          <ModalOuter onClick={(e) => e.stopPropagation()}>
            <Modal>
              <div className="header">
                <h3>{current.title}</h3>
                <button className="close" onClick={() => setOpen(false)}>
                  ×
                </button>
              </div>

              <div className="preview">
                <img src={current.img} alt={current.title} />
              </div>

              <div className="meta">
                <p>{current.desc}</p>
                <p>
                  <strong>Tecnologias:</strong> {current.techs}
                </p>
              </div>

              <div className="links">
                <a href={current.code} target="_blank" rel="noreferrer">
                  Code (GitHub)
                </a>
                <a href={current.demo} target="_blank" rel="noreferrer">
                  Deploy
                </a>
              </div>
            </Modal>
          </ModalOuter>
        )}
      </Backdrop>
    </Section>
  );
}
export default Projects;
