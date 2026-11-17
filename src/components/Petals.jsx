import './Petals.css'

/**
 * As quatro "pétalas" decorativas do canto superior direito.
 * variant="vivid" → cores fortes (Home)
 * variant="soft"  → cores suaves (demais páginas)
 */
export default function Petals({ variant = 'soft' }) {
  return (
    <div className={`petals petals--${variant}`} aria-hidden="true">
      <span className="petal petal--tl" />
      <span className="petal petal--tr" />
      <span className="petal petal--bl" />
      <span className="petal petal--br" />
    </div>
  )
}
