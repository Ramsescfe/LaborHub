import { useMemo } from 'react'
import { feature } from 'topojson-client'
import { geoPath, geoCentroid } from 'd3-geo'
import countriesTopo from 'world-atlas/countries-110m.json'
import worldDots from '../data/worldDots.json'
import { createProjection, MAP_WIDTH, MAP_HEIGHT } from './mapProjection'

/* ------------------------------------------------------------------ */
/* Mapa de pontos (Home - "Oportunidades pelo Brasil")                */
/* Pontos gerados por scripts/gerar-mapa-pontos.mjs                   */
/* ------------------------------------------------------------------ */
export function DottedWorldMap({ color = '#f7efa6', className = '' }) {
  const r = worldDots.step * 0.3
  return (
    <svg
      className={className}
      viewBox={`0 0 ${worldDots.width} ${worldDots.height}`}
      role="img"
      aria-label="Mapa-múndi"
      style={{ width: '100%', height: 'auto' }}
    >
      {worldDots.dots.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill={color} />
      ))}
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Mapa por países (Global)                                           */
/* ------------------------------------------------------------------ */

// Países destacados no Figma (nomes como vêm do world-atlas).
export const PAISES_DESTAQUE = new Set([
  'United States of America',
  'Brazil',
  'Australia',
  'New Zealand',
  'United Kingdom',
  'Ireland',
  'France',
  'Spain',
  'Portugal',
  'Germany',
  'Italy',
  'Netherlands',
  'Belgium',
  'Luxembourg',
  'Switzerland',
  'Austria',
  'Poland',
  'Czechia',
  'Slovakia',
  'Hungary',
  'Slovenia',
  'Croatia',
  'Denmark',
  'Sweden',
  'Romania',
  'Bulgaria',
  'Greece',
  'Serbia',
  'Bosnia and Herz.',
  'Montenegro',
  'Albania',
  'Macedonia',
  'North Macedonia',
  'Kosovo',
])

// Classifica o país numa região pelo centróide (aproximação suficiente pro mapa).
export function regiaoDoPais(f) {
  const [lon, lat] = geoCentroid(f)
  if (lon < -25) return lat > 13 ? 'america-norte' : 'america-sul'
  if (lon > 110 && lat < -8) return 'oceania'
  if (lat > 36 && lon < 45) return 'europa'
  if (lon < 52 && lat <= 36) {
    // Oriente Médio fica com a Ásia
    return lon > 34 && lat > 12 ? 'asia' : 'africa'
  }
  return 'asia'
}

const projection = createProjection()
const path = geoPath(projection)
const paises = feature(countriesTopo, countriesTopo.objects.countries).features
  .filter((f) => f.properties.name !== 'Antarctica')
  .map((f) => ({
    id: f.id ?? f.properties.name,
    nome: f.properties.name,
    regiao: regiaoDoPais(f),
    d: path(f),
  }))

export function ChoroplethWorldMap({ regiao = null, className = '' }) {
  const items = useMemo(
    () =>
      paises.map((p) => {
        let fill = '#ddd6f6'
        if (regiao) {
          if (p.regiao === regiao) fill = PAISES_DESTAQUE.has(p.nome) ? '#6d5fd6' : '#a99ee8'
        } else if (PAISES_DESTAQUE.has(p.nome)) {
          fill = '#9384e3'
        }
        return { ...p, fill }
      }),
    [regiao],
  )

  return (
    <svg
      className={className}
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      role="img"
      aria-label="Mapa-múndi por país"
      style={{ width: '100%', height: 'auto' }}
    >
      {items.map((p) => (
        <path
          key={p.id}
          d={p.d}
          fill={p.fill}
          stroke="#ffffff"
          strokeWidth={0.7}
          strokeLinejoin="round"
          style={{ transition: 'fill 0.25s' }}
        >
          <title>{p.nome}</title>
        </path>
      ))}
    </svg>
  )
}
