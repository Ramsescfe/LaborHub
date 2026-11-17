import { geoMercator } from 'd3-geo'

// Mercator recortado entre ~84°N e ~57°S (sem Antártida), igual aos mapas do Figma.
export const MAP_WIDTH = 1000
const LAT_TOP = 84
const LAT_BOTTOM = -57

const merc = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360))
const scale = MAP_WIDTH / (2 * Math.PI)

export const MAP_HEIGHT = Math.round(scale * (merc(LAT_TOP) - merc(LAT_BOTTOM)))

export function createProjection() {
  return geoMercator()
    .scale(scale)
    .translate([MAP_WIDTH / 2, scale * merc(LAT_TOP)])
    .center([0, 0])
}
