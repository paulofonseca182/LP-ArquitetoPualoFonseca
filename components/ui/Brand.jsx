export function Brand({ footer = false }) {
  return (
    <a
      className={footer ? "brand footer-brand" : "brand"}
      href="#hero"
      aria-label="Paulo Fonseca Arquitetura e Urbanismo - início"
    >
      <span className="brand-mark" aria-hidden="true">
        <img src="/assets/images/marca-paulo-fonseca.png" alt="" />
      </span>
      <span className="brand-text">
        <strong>Paulo Fonseca</strong>
        <small>Arquitetura e Urbanismo</small>
      </span>
    </a>
  );
}
