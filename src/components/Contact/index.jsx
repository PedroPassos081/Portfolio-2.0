import { useState } from "react";
import styled from "styled-components";

// ====== SEUS LINKS/EMAIL ======
const EMAIL = "pedro.passos081@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/pedro-passos081/";
const GITHUB = "https://github.com/PedroPassos081";

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

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr;
  }
`;

const GradientBorder = styled.div`
  border-radius: 18px;
  padding: 2px;
  background: linear-gradient(to right, #58a6ff, #d2a8ff);
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.panel};
  border-radius: 16px;
  padding: 24px;
`;

const Form = styled.form`
  display: grid;
  gap: 16px;
`;

const Field = styled.div`
  display: grid;
  gap: 8px;

  label {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 700;
    opacity: 0.9;
  }

  input,
  textarea {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    border: 2px solid ${({ theme }) => theme.colors.panelDark || "#1a1a1a"};
    border-radius: 10px;
    padding: 12px 14px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
    }
  }

  textarea {
    resize: none;
    min-height: 120px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Submit = styled.button`
  margin-top: 6px;
  height: 42px;
  border-radius: 999px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 800;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Notice = styled.p`
  font-size: 14px;
  margin-top: 6px;
  opacity: 0.95;

  &.ok {
    color: #39d353;
  }
  &.err {
    color: #ff6b6b;
  }
`;

const Cards = styled.div`
  display: grid;
  gap: 16px;
`;

const ContactItem = styled.a`
  display: grid;
  gap: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  h4 {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  p {
    opacity: 0.95;
    word-break: break-word;
  }

  &:hover ${Card} {
    box-shadow: 0 8px 26px rgba(0, 0, 0, 0.25);
    transform: translateY(-1px);
    transition: 0.2s ease;
  }
`;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg({ type: "", text: "" });

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam: campo escondido; se preenchido, descarta
    if (data.get("website")) {
      setMsg({ type: "err", text: "Falha no envio." });
      return;
    }

    // Validações simples
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    if (!name || !email || !message) {
      setMsg({ type: "err", text: "Preencha todos os campos." });
      return;
    }

    setLoading(true);
    try {
      // Endpoint AJAX do FormSubmit
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!res.ok) throw new Error("Erro no envio");
      const json = await res.json();
      if (json.success === "true") {
        setMsg({ type: "ok", text: "Mensagem enviada com sucesso! 👌" });
        form.reset();
      } else {
        throw new Error("Resposta inesperada");
      }
    } catch {
      setMsg({
        type: "err",
        text: "Não foi possível enviar. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contato">
      <Container>
        <TitleWrap>
          <h2>Contato</h2>
          <h3>Gostou do meu trabalho? Vamos conversar!</h3>
        </TitleWrap>

        <Wrap>
          {/* FORM */}
          <GradientBorder data-aos="fade-right" data-aos-duration="1000">
            <Card>
              <Form onSubmit={handleSubmit}>
                {/* Config extras do FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input
                  type="hidden"
                  name="_subject"
                  value="Novo contato pelo portfólio"
                />
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Row>
                  <Field>
                    <label htmlFor="nome">Nome</label>
                    <input
                      id="nome"
                      name="name"
                      type="text"
                      placeholder="Digite seu nome"
                    />
                  </Field>
                  <Field>
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                    />
                  </Field>
                </Row>

                <Field>
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="message"
                    placeholder="Digite sua mensagem"
                  />
                </Field>

                <Submit type="submit" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar"}
                </Submit>

                {msg.text && (
                  <Notice className={msg.type === "ok" ? "ok" : "err"}>
                    {msg.text}
                  </Notice>
                )}
              </Form>
            </Card>
          </GradientBorder>

          {/* LINKS */}
          <Cards>
            <GradientBorder data-aos="fade-left" data-aos-duration="900">
              <Card>
                <ContactItem
                  href={`mailto:${EMAIL}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>E-mail</h4>
                  <p>{EMAIL}</p>
                </ContactItem>
              </Card>
            </GradientBorder>

            <GradientBorder data-aos="fade-left" data-aos-duration="1100">
              <Card>
                <ContactItem href={LINKEDIN} target="_blank" rel="noreferrer">
                  <h4>LinkedIn</h4>
                  <p>Pedro Passos</p>
                </ContactItem>
              </Card>
            </GradientBorder>

            <GradientBorder data-aos="fade-left" data-aos-duration="1200">
              <Card>
                <ContactItem href={GITHUB} target="_blank" rel="noreferrer">
                  <h4>GitHub</h4>
                  <p>PedroPassos081</p>
                </ContactItem>
              </Card>
            </GradientBorder>
          </Cards>
        </Wrap>
      </Container>
    </Section>
  );
}
