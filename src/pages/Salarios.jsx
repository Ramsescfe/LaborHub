import { ArrowRight, BarChart3, ChevronDown, TrendingUp, TriangleAlert } from 'lucide-react'
import Layout from '../components/Layout'
import { faixasSalariais } from '../data/mock'
import './Salarios.css'

const MAX = 12000
const ticks = [0, 3000, 6000, 9000, 12000]
const fmtTick = (v) => (v === 0 ? 'R$ 0' : `${v / 1000} mil`)

const stats = [
  { Icon: BarChart3, tom: 'blue', rotulo: 'Demanda', valor: '312 vagas', texto: 'abertas na região nos últimos 30 dias' },
  { Icon: TrendingUp, tom: 'red', rotulo: 'Crescimento', valor: '+9% em 12 meses', texto: 'contratações formais na região' },
  { Icon: TriangleAlert, tom: 'yellow', rotulo: 'Dificuldade de entrada', valor: 'Alta', texto: 'cerca de 18 candidatos por vaga de entrada' },
]

export default function Salarios() {
  return (
    <Layout>
      <section className="page-hero container">
        <h1 className="page-title">Salários</h1>
        <p className="page-subtitle">
          Quanto se ganha, quanto se contrata e quão difícil é entrar, com dados da sua região.
        </p>
      </section>

      <section className="container salarios">
        <div className="faixa card">
          <h2>Faixa salarial por nível</h2>
          <div className="faixa__filters">
            <label>
              <span>Salário bruto (R$) · UX/UI Designer · Recife e RM</span>
              <button className="faixa__select">
                UX/UI Designer <ChevronDown size={16} />
              </button>
            </label>
            <label>
              <span>&nbsp;</span>
              <button className="faixa__select">
                Recife e Regiões <ChevronDown size={16} />
              </button>
            </label>
            <label>
              <span>Modalidade</span>
              <button className="faixa__select">
                Todas <ChevronDown size={16} />
              </button>
            </label>
          </div>

          <div className="chart">
            <div className="chart__grid" aria-hidden="true">
              {ticks.map((t) => (
                <span key={t} style={{ left: `${(t / MAX) * 100}%` }} />
              ))}
            </div>
            {faixasSalariais.map((f) => (
              <div className="chart__row" key={f.nivel}>
                <span className="chart__label">{f.nivel}</span>
                <div className="chart__track">
                  <div
                    className="chart__bar"
                    style={{
                      left: `${(f.min / MAX) * 100}%`,
                      width: `${((f.max - f.min) / MAX) * 100}%`,
                      background: f.cor,
                    }}
                    title={f.label}
                  >
                    <span className="chart__dot" />
                    <span className="chart__value">{f.label}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="chart__axis">
              <span className="chart__label" />
              <div className="chart__track">
                {ticks.map((t) => (
                  <span key={t} style={{ left: `${(t / MAX) * 100}%` }}>
                    {fmtTick(t)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="salarios__stats">
          {stats.map(({ Icon, tom, rotulo, valor, texto }) => (
            <article key={rotulo} className="stat card">
              <span className={`stat__label stat__label--${tom}`}>
                <Icon size={18} /> {rotulo}
              </span>
              <strong>{valor}</strong>
              <small>{texto}</small>
            </article>
          ))}
          <div className="salarios__ctas">
            <button className="btn btn--primary">
              Comparar com outra carreira <ArrowRight size={18} />
            </button>
            <button className="btn btn--outline">Falar com um profissional</button>
          </div>
        </div>
        <p className="salarios__fonte">
          Dados ilustrativos para o protótipo. Fontes de referência: Novo CAGED, RAIS e CBO. Valores mensais brutos em reais.
        </p>

        <div className="salarios__extra">
          <article className="comparativo card">
            <h3>Recife vs. Brasil (Júnior)</h3>
            <p className="comparativo__delta">
              <strong>-14%</strong> abaixo da mediana nacional
            </p>
            <div className="comparativo__bar">
              <small>Recife - R$3.200</small>
              <span className="bar">
                <span style={{ width: '86%', background: 'var(--blue)' }} />
              </span>
            </div>
            <div className="comparativo__bar">
              <small>Brasil - R$3.720</small>
              <span className="bar">
                <span style={{ width: '100%', background: '#3a43a3' }} />
              </span>
            </div>
          </article>
          <article className="ninguem card">
            <h3>O que ninguém conta</h3>
            <ul>
              <li>41% das vagas são PJ ou informais</li>
              <li>Portfólio é exigido já no estágio</li>
              <li>Vagas remotas competem com o Brasil todo</li>
              <li>Rotatividade alta nos 2 primeiros anos</li>
            </ul>
          </article>
        </div>
      </section>
    </Layout>
  )
}
