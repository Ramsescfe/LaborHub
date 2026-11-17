import { useMemo, useState } from 'react'
import { ArrowRight, Bookmark, ChevronDown, ChevronLeft, ChevronRight, Search, Users } from 'lucide-react'
import Layout from '../components/Layout'
import CompanyLogo from '../components/CompanyLogo'
import { empresas } from '../data/mock'
import './Empresas.css'

const EmpresaLogo = ({ e }) => <CompanyLogo logo={e.logo} size={76} radius={12} />

export default function Empresas() {
  const [busca, setBusca] = useState('')
  const [pagina, setPagina] = useState(1)
  const [salvas, setSalvas] = useState([1])

  const filtradas = useMemo(
    () => empresas.filter((e) => e.nome.toLowerCase().includes(busca.toLowerCase())),
    [busca],
  )
  const destaques = empresas.filter((e) => e.destaque)

  const toggleSalva = (id) =>
    setSalvas((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  return (
    <Layout>
      <section className="page-hero container empresas-hero">
        <h1 className="page-title">Empresas</h1>
        <p className="page-subtitle">
          Conheça as empresas do mercado, explore sua cultura, benefícios e oportunidades.
        </p>
      </section>

      <section className="container empresas">
        <div className="empresas__filters">
          <label className="search empresas__search">
            <Search size={20} />
            <span className="sr-only">Buscar empresas</span>
            <input placeholder="Buscar empresas" value={busca} onChange={(e) => setBusca(e.target.value)} />
          </label>
          <button className="select empresas__pill">Setor</button>
          <button className="select empresas__pill">Localização</button>
          <button className="select empresas__pill">Tamanho</button>
        </div>

        <div className="section-head">
          <h2 className="page-title empresas__h2">Empresas em destaque</h2>
          <a href="#todas" className="link-more">Ver tudo <ArrowRight size={14} /></a>
        </div>
        <div className="destaques">
          {destaques.map((e) => (
            <article key={e.id} className="destaque card">
              <div className="destaque__top">
                <EmpresaLogo e={e} />
                <div>
                  <h3>{e.nome}</h3>
                  <small>{e.setor} - {e.local}</small>
                </div>
                <button
                  className="destaque__save"
                  aria-label="Salvar empresa"
                  onClick={() => toggleSalva(e.id)}
                >
                  <Bookmark size={20} fill={salvas.includes(e.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
              <p>{e.descricao}</p>
              <span className="chip chip--blue">Vagas abertas</span>
            </article>
          ))}
        </div>

        <div className="section-head empresas__todas" id="todas">
          <div>
            <h2 className="page-title empresas__h2">Todas as empresas</h2>
            <small className="empresas__count">120 empresas encontradas</small>
          </div>
          <label className="empresas__sort">
            Ordenar por
            <button className="btn btn--outline btn--sm">Mais relevantes <ChevronDown size={14} /></button>
          </label>
        </div>

        <ul className="empresa-list">
          {filtradas.map((e) => (
            <li key={e.id} className="empresa-row">
              <EmpresaLogo e={e} />
              <div className="empresa-row__name">
                <strong>{e.nome}</strong>
                <small>{e.setor} - {e.local}</small>
              </div>
              <span className="empresa-row__size"><Users size={20} /> {e.funcionarios}</span>
              <span className="empresa-row__vagas">{e.vagas} vagas</span>
              <button className="btn btn--outline btn--sm">Ver empresa <ArrowRight size={14} /></button>
            </li>
          ))}
          {filtradas.length === 0 && <li className="empresa-empty">Nenhuma empresa encontrada.</li>}
        </ul>

        <nav className="pagination" aria-label="Paginação">
          <button className="pagination__arrow" onClick={() => setPagina((p) => Math.max(1, p - 1))} aria-label="Página anterior">
            <ChevronLeft size={20} />
          </button>
          {[1, 2, 3, 4].map((n) => (
            <button key={n} className={pagina === n ? 'is-active' : ''} onClick={() => setPagina(n)}>{n}</button>
          ))}
          <span>…</span>
          <button className={pagina === 12 ? 'is-active' : ''} onClick={() => setPagina(12)}>12</button>
          <button className="pagination__arrow" onClick={() => setPagina((p) => Math.min(12, p + 1))} aria-label="Próxima página">
            <ChevronRight size={20} />
          </button>
        </nav>
      </section>
    </Layout>
  )
}
