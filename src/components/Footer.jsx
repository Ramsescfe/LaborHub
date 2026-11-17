import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">LaborHub</Link>
            <span className="footer__sep" />
            <p className="footer__tagline">
              Explore possibilidades
              <br />
              para sua carreira.
            </p>
          </div>
          <nav className="footer__links" aria-label="Rodapé">
            <a href="#sobre">Sobre</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
        <p className="footer__copy">© 2026 LaborHub</p>
      </div>
      <div className="footer__stripe" aria-hidden="true">
        <span style={{ background: 'var(--red)' }} />
        <span style={{ background: 'var(--yellow)' }} />
        <span style={{ background: 'var(--navy)' }} />
        <span style={{ background: 'var(--blue)' }} />
      </div>
    </footer>
  )
}
