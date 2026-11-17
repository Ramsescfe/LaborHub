import { NavLink, Link } from 'react-router-dom'
import { BellRing, User } from 'lucide-react'
import Logo from './Logo'
import './Header.css'

const links = [
  { to: '/propostas', label: 'Propostas' },
  { to: '/salarios', label: 'Salários' },
  { to: '/empresas', label: 'Empresas' },
  { to: '/global', label: 'Global' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <Logo />
        <nav className="header__nav" aria-label="Principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `header__link${isActive ? ' is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="header__actions">
          <NavLink
            to="/notificacoes"
            className={({ isActive }) => `header__icon header__bell${isActive ? ' is-active' : ''}`}
            aria-label="Notificações"
          >
            <BellRing size={18} />
          </NavLink>
          <span className="header__divider" />
          <Link to="/perfil" className="header__avatar" aria-label="Meu perfil">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  )
}
