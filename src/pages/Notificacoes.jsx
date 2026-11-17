import { useState } from 'react'
import { ArrowRight, Bell, BriefcaseBusiness, Inbox, Sparkles } from 'lucide-react'
import Layout from '../components/Layout'
import { notificacoes } from '../data/mock'
import './Notificacoes.css'

const filtros = [
  { id: 'todas', label: 'Todas', Icon: null },
  { id: 'proposta', label: 'Propostas', Icon: BriefcaseBusiness },
  { id: 'candidatura', label: 'Candidaturas', Icon: Inbox },
  { id: 'atualizacao', label: 'Atualizações', Icon: Bell },
]

const iconePorTipo = {
  proposta: { Icon: BriefcaseBusiness, cls: 'notif__icon--red' },
  candidatura: { Icon: Inbox, cls: 'notif__icon--navy' },
  atualizacao: { Icon: Sparkles, cls: 'notif__icon--yellow' },
}

export default function Notificacoes() {
  const [filtro, setFiltro] = useState('todas')
  const total = notificacoes.reduce((n, g) => n + g.itens.length, 0)

  const grupos = notificacoes
    .map((g) => ({ ...g, itens: g.itens.filter((i) => filtro === 'todas' || i.tipo === filtro) }))
    .filter((g) => g.itens.length > 0)

  return (
    <Layout>
      <section className="page-hero container notif-hero">
        <h1 className="page-title">Notificações</h1>
        <p className="page-subtitle">
          Acompanhe novidades sobre propostas, candidaturas, empresas e atualizações do mercado.
        </p>

        <div className="notif-tabs" role="tablist">
          {filtros.map(({ id, label, Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={filtro === id}
              className={`notif-tab${filtro === id ? ' is-active' : ''}`}
              onClick={() => setFiltro(id)}
            >
              {Icon && <Icon size={20} />}
              {label}
              {id === 'todas' && <span className="notif-tab__count">{total}</span>}
            </button>
          ))}
        </div>
      </section>

      <section className="container notif">
        {grupos.map((g) => (
          <div key={g.grupo} className="notif-group">
            <h2 className="notif-group__title">
              {g.grupo} <span className="badge-count">{g.itens.length}</span>
            </h2>
            <ul>
              {g.itens.map((n) => {
                const { Icon, cls } = iconePorTipo[n.tipo]
                return (
                  <li key={n.titulo + n.quando} className="notif-item">
                    <span className={`notif__icon ${cls}`}>
                      <Icon size={30} />
                    </span>
                    <div className="notif-item__text">
                      <strong>{n.titulo}</strong>
                      <p>{n.texto}</p>
                    </div>
                    <span className="notif-item__when">{n.quando}</span>
                    <span className={`notif-item__dot${n.nova ? '' : ' is-read'}`} aria-label={n.nova ? 'Não lida' : undefined} />
                    <button className="notif-item__go" aria-label="Abrir notificação">
                      <ArrowRight size={18} />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  )
}
