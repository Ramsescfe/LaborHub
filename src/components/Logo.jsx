import { Link } from 'react-router-dom'
import './Logo.css'

export function LogoMark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="9" height="9" rx="1.5" fill="var(--red)" />
      <rect x="13" y="2" width="9" height="9" rx="1.5" fill="var(--yellow)" />
      <rect x="2" y="13" width="9" height="9" rx="1.5" fill="var(--blue)" />
      <rect x="13" y="13" width="9" height="9" rx="1.5" fill="var(--navy)" />
    </svg>
  )
}

export default function Logo({ withMark = true, size = 'md' }) {
  return (
    <Link to="/" className={`logo logo--${size}`} aria-label="LaborHub - início">
      {withMark && <LogoMark size={size === 'lg' ? 32 : 24} />}
      <span>LaborHub</span>
    </Link>
  )
}
