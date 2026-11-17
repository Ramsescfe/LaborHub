// Gera src/data/worldDots.json — os pontos do mapa-múndi da Home.
// Uso: node scripts/gerar-mapa-pontos.mjs
// Só precisa rodar de novo se quiser mudar a densidade dos pontos.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { feature } from 'topojson-client'
import { geoContains, geoBounds } from 'd3-geo'
import { createProjection, MAP_WIDTH, MAP_HEIGHT } from '../src/components/mapProjection.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const topo = JSON.parse(readFileSync(resolve(root, 'node_modules/world-atlas/land-50m.json'), 'utf8'))
const land = feature(topo, topo.objects.land)

// Separa o MultiPolygon em polígonos com bounding box, pra testar rápido.
const polys = land.features.flatMap((f) =>
  (f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates : [f.geometry.coordinates]).map((coords) => {
    const geo = { type: 'Polygon', coordinates: coords }
    return { geo, bounds: geoBounds(geo) }
  }),
)

const STEP = 8 // distância entre pontos (no sistema de coordenadas do SVG)
const projection = createProjection()
const dots = []

for (let y = STEP / 2; y < MAP_HEIGHT; y += STEP) {
  for (let x = STEP / 2; x < MAP_WIDTH; x += STEP) {
    const [lon, lat] = projection.invert([x, y])
    const hit = polys.some(({ geo, bounds: [[x0, y0], [x1, y1]] }) => {
      if (lat < y0 || lat > y1) return false
      if (x0 <= x1 ? lon < x0 || lon > x1 : lon < x0 && lon > x1) return false
      return geoContains(geo, [lon, lat])
    })
    if (hit) dots.push([Math.round(x), Math.round(y)])
  }
}

writeFileSync(
  resolve(root, 'src/data/worldDots.json'),
  JSON.stringify({ width: MAP_WIDTH, height: MAP_HEIGHT, step: STEP, dots }),
)
console.log(`${dots.length} pontos gerados`)
