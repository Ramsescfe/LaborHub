import { useMemo, useState } from 'react'
import { AlignLeft, Bookmark, BriefcaseBusiness, EyeOff, MapPin } from 'lucide-react'
import Layout from '../components/Layout'
import CompanyLogo from '../components/CompanyLogo'
import { propostas } from '../data/mock'
import './Propostas.css'

const tipos = ['Estágio', 'Júnior', 'Pleno']
const modalidades = [
  { id: 'Remoto', label: 'Remoto (20)' },
  { id: 'Híbrido', label: 'Híbrido (16)' },
  { id: 'Presencial', label: 'Presencial (13)' },
]

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

export default function Propostas() {
  const [tipoSel, setTipoSel] = useState([])
  const [modSel, setModSel] = useState([])
  const [area, setArea] = useState('Design')
  const [aplicado, setAplicado] = useState({ tipos: [], mods: [] })
  const [salvas, setSalvas] = useState([])

  const lista = useMemo(
    () =>
      propostas.filter(
        (p) =>
          (aplicado.tipos.length === 0 || aplicado.tipos.includes(p.nivel)) &&
          (aplicado.mods.length === 0 || aplicado.mods.some((m) => p.local.startsWith(m))),
      ),
    [aplicado],
  )

  return (
    <Layout>
      <section className="page-hero container propostas-hero">
        <h1 className="page-title">Propostas para você</h1>
        <p className="page-subtitle">
          Vagas, estágios e oportunidades de entrada, com base no seu perfil.
        </p>
      </section>

      <section className="container propostas">
        <aside className="filtros">
          <h2 className="filtros__title">
            <AlignLeft size={20} /> Filtros
          </h2>

          <fieldset>
            <legend>Tipo de vaga</legend>
            {tipos.map((t) => (
              <label key={t} className="check">
                <input type="checkbox" checked={tipoSel.includes(t)} onChange={() => setTipoSel(toggle(tipoSel, t))} />
                {t}
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Modalidade</legend>
            {modalidades.map((m) => (
              <label key={m.id} className="check">
                <input type="checkbox" checked={modSel.includes(m.id)} onChange={() => setModSel(toggle(modSel, m.id))} />
                {m.label}
              </label>
            ))}
          </fieldset>

          <fieldset className="filtros__area">
            <legend>Área</legend>
            <select value={area} onChange={(e) => setArea(e.target.value)}>
              <option>Design</option>
              <option>Tecnologia</option>
              <option>Saúde</option>
              <option>Energia</option>
            </select>
          </fieldset>

          <button className="btn btn--primary filtros__apply" onClick={() => setAplicado({ tipos: tipoSel, mods: modSel })}>
            Aplicar filtros
          </button>
        </aside>

        <ul className="proposta-list">
          {lista.length === 0 && <li className="proposta-empty">Nenhuma proposta encontrada com esses filtros.</li>}
          {lista.map((p) => {
            const salva = salvas.includes(p.id)
            return (
              <li key={p.id} className="proposta card">
                <CompanyLogo logo={p.logo} size={128} radius={14} className="proposta__logo" />
                <div className="proposta__info">
                  <h3>{p.titulo}</h3>
                  <p>{p.empresa}</p>
                  <div className="proposta__tags">
                    <span className="chip">
                      <MapPin size={16} /> {p.local}
                    </span>
                    <span className="chip chip--yellow">
                      <BriefcaseBusiness size={16} /> {p.nivel}
                    </span>
                  </div>
                </div>
                {p.poucaVisibilidade && (
                  <span className="proposta__flag">
                    <EyeOff size={12} /> Pouca visibilidade
                  </span>
                )}
                <button
                  className={`proposta__save${salva ? ' is-saved' : ''}`}
                  aria-label={salva ? 'Remover dos salvos' : 'Salvar proposta'}
                  onClick={() => setSalvas(toggle(salvas, p.id))}
                >
                  <Bookmark size={20} fill={salva ? 'currentColor' : 'none'} />
                </button>
                <span className="proposta__when">{p.quando}</span>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}
