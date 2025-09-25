import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiSass,
  SiNextdotjs,
} from "react-icons/si";

const Section = styled.section`
  background: ${({ theme }) => theme.colors.bg};
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
    font-weight: 700;
    background: linear-gradient(to right, #58a6ff, #d2a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
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
  gap: 22px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

/** Borda gradiente externa do card */
const CardOuter = styled.div`
  border-radius: 16px;
  padding: 2px; /* espessura da borda gradiente */
  background: linear-gradient(to right, #58a6ff, #d2a8ff);
`;

/** Conteúdo interno sólido */
const CardInner = styled.div`
  background: ${({ theme }) => theme.colors.panel};
  border-radius: 14px;
  padding: 18px 14px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  transition: transform 0.15s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }
`;

const IconWrap = styled.div`
  font-size: 34px;
  line-height: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const Label = styled.span`
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.95;
`;

const skills = [
  { label: "HTML5", icon: SiHtml5 },
  { label: "CSS3", icon: SiCss3 },
  { label: "Sass", icon: SiSass },
  { label: "JavaScript", icon: SiJavascript },
  { label: "TypeScript", icon: SiTypescript },
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Git", icon: SiGit },
  { label: "GitHub", icon: SiGithub },
];

export default function Skills() {
  return (
    <Section id="habilidades">
      <Container>
        <TitleWrap>
          <h2>Habilidades</h2>
          <h3>Conhecimentos Técnicos</h3>
        </TitleWrap>

        <Grid data-aos="flip-up" data-aos-duration="1200">
          {skills.map((skill) => (
            <CardOuter key={skill.label}>
              <CardInner>
                <IconWrap>
                  <skill.icon aria-hidden="true" />
                </IconWrap>
                <Label>{skill.label}</Label>
              </CardInner>
            </CardOuter>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
