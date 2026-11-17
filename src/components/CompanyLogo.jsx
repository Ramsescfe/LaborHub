import './CompanyLogo.css'

// Logos das empresas fictícias do protótipo, redesenhados em SVG.
// Cada um: cor de fundo + símbolo em viewBox 0 0 48 48.
const LOGOS = {
  // Nexa digital — "N" branco no azul-marinho
  nexa: {
    bg: '#232a72',
    svg: (
      <path
        d="M13 37V11h6.2l10 15.6V11H35v26h-6.1L19 21.5V37z"
        fill="#fff"
      />
    ),
  },
  // Artemis Tech — chevron vermelho tipo "A" sem barra
  artemis: {
    bg: '#f4d3ce',
    svg: (
      <path
        d="M9 35 24 12l15 23"
        fill="none"
        stroke="#b8281c"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  // Lumen Labs — folha amarela
  lumen: {
    bg: '#fbf5cc',
    svg: (
      <g fill="none" stroke="#e3cb4f" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 36c-1-11 6-21 22-22 1 13-6 22-17 22-2 0-4 0-5 0z" />
        <path d="M14 36c4-7 9-11 15-14" />
      </g>
    ),
  },
  // Vértice — duas cápsulas sobrepostas na diagonal
  vertice: {
    bg: '#dfe6fd',
    svg: (
      <g transform="rotate(-45 24 24)">
        <rect x="8" y="17" width="20" height="14" rx="7" fill="#4a7bf7" />
        <rect x="20" y="17" width="20" height="14" rx="7" fill="#2f4fc9" opacity="0.9" />
        <rect x="20" y="17" width="8" height="14" fill="#fff" opacity="0.35" />
      </g>
    ),
  },
  // Plana Consultoria — "P" branco no lilás
  plana: {
    bg: '#c7a5f3',
    svg: (
      <path
        d="M15 37V11h11c5.6 0 9 3.3 9 8.3S31.6 28 26 28h-4.6v9zm6.4-14.6h4.2c2 0 3.2-1.2 3.2-3.1s-1.2-3-3.2-3h-4.2z"
        fill="#fff"
      />
    ),
  },
  // Nômade Tech — duas barras inclinadas
  nomade: {
    bg: '#141b5c',
    svg: (
      <g fill="#fff">
        <path d="M10 34 19.5 14H26L16.5 34z" />
        <path d="M22 34 31.5 14H38L28.5 34z" />
      </g>
    ),
  },
  // Lume Digital — flor de 4 pétalas
  lume: {
    bg: '#4a7bf7',
    svg: (
      <g fill="#fff" transform="rotate(45 24 24)">
        <ellipse cx="24" cy="14.5" rx="6" ry="8.5" />
        <ellipse cx="24" cy="33.5" rx="6" ry="8.5" />
        <ellipse cx="14.5" cy="24" rx="8.5" ry="6" />
        <ellipse cx="33.5" cy="24" rx="8.5" ry="6" />
        <circle cx="24" cy="24" r="3" fill="#4a7bf7" />
      </g>
    ),
  },
  // Estúdio Soma — camadas empilhadas
  soma: {
    bg: '#c0291c',
    svg: (
      <g fill="none" stroke="#fff" strokeWidth="2.8" strokeLinejoin="round">
        <path d="M24 9 39 17l-15 8-15-8z" />
        <path d="m9 24 15 8 15-8" />
        <path d="m9 31 15 8 15-8" />
      </g>
    ),
  },
}

export default function CompanyLogo({ logo, size = 76, radius = 12, className = '' }) {
  const l = LOGOS[logo]
  if (!l) return null
  return (
    <span
      className={`company-logo ${className}`}
      style={{ width: size, height: size, borderRadius: radius, background: l.bg }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" width="70%" height="70%">
        {l.svg}
      </svg>
    </span>
  )
}
