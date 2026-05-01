import { Container } from "./styles";

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://github.com/jaiswal-sonal" className="logo">
        <span>{"<Sonal "}</span>
        <span>{" Jaiswal/>"}</span>
      </a>
      <p>
        Built with ❤️ by Sonal Jaiswal &nbsp;|&nbsp; Software Developer &nbsp;|&nbsp; Lucknow, UP
      </p>
      <p style={{ fontSize: "0.85rem", marginTop: "0.5rem", opacity: 0.7 }}>
        <a href="mailto:jaiswalsonal338@gmail.com" style={{ color: "inherit" }}>jaiswalsonal338@gmail.com</a>
        &nbsp;·&nbsp;
        <a href="https://www.linkedin.com/in/sonal-jaiswal-121565302/" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>LinkedIn</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/jaiswal-sonal" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>GitHub</a>
      </p>
    </Container>
  );
}
