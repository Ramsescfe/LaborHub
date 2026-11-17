import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Laptop,
  HeartPulse,
  Lightbulb,
  TrendingUp,
  MapPin,
  BarChart3,
} from 'lucide-react'
import Layout from '../components/Layout'
import { DottedWorldMap } from '../components/WorldMap'
import './Home.css'

const areas = [
  { nome: 'Tecnologia', texto: 'Alta demanda e crescimento contínuo.', Icon: Laptop, tom: 'navy' },
  { nome: 'Saúde', texto: 'Novas especialidades e mais oportunidades.', Icon: HeartPulse, tom: 'red' },
  { nome: 'Energia', texto: 'Expansão com foco em sustentabilidade.', Icon: Lightbulb, tom: 'yellow' },
]

const paises = [
  { nome: 'Brasil', texto: 'Conheça o mercado local' },
  { nome: 'Estados Unidos', texto: 'Explore vagas internacionais' },
  { nome: 'Inglaterra', texto: 'Oportunidades na Europa' },
]

export default function Home() {
  return (
    <Layout petals="vivid">
      <section className="home-hero container">
        <h1 className="page-title">
          Explore o mercado de
          <br />
          trabalho!
        </h1>
        <p className="page-subtitle">
          Descubra áreas em expansão, explore setores e encontre novas oportunidades.
        </p>
        <div className="home-hero__actions">
          <Link to="/global" className="btn btn--primary">
            Áreas de expansão <ArrowRight size={20} />
          </Link>
          <Link to="/empresas" className="btn btn--outline">
            Explorar setores
          </Link>
        </div>
      </section>

      <section className="container home-section">
        <div className="section-head">
          <h2 className="section-title">Áreas de destaque</h2>
          <a href="#areas" className="link-more">
            Ver mais <ArrowRight size={16} />
          </a>
        </div>
        <div className="areas">
          {areas.map(({ nome, texto, Icon, tom }) => (
            <article key={nome} className={`area-card card area-card--${tom}`}>
              <div className="area-card__icon">
                <Icon size={30} />
              </div>
              <div>
                <h3>{nome}</h3>
                <p>{texto}</p>
              </div>
              <span className="area-card__trend">
                <TrendingUp size={14} />
              </span>
              <span className="area-card__blob" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="container home-section">
        <div className="oportunidades">
          <div className="oportunidades__head">
            <h2>Oportunidades pelo Brasil</h2>
            <Link to="/global" className="link-more oportunidades__link">
              Explorar mapa <ArrowRight size={16} />
            </Link>
          </div>
          <div className="oportunidades__body">
            <div className="oportunidades__map">
              <DottedWorldMap color="#f7efa6" />
            </div>
            <ul className="oportunidades__list">
              {paises.map((p) => (
                <li key={p.nome}>
                  <Link to="/global" className="pais-card">
                    <MapPin size={22} />
                    <span>
                      <strong>{p.nome}</strong>
                      <small>{p.texto}</small>
                    </span>
                    <span className="pais-card__arrow">
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container home-section">
        <div className="section-head">
          <div>
            <h2 className="section-title">De olho no mercado</h2>
            <p className="home-section__sub">
              Tendências, análises e conteúdos para planejar sua próxima etapa.
            </p>
          </div>
          <a href="#tendencias" className="link-more">
            Ver tendências <ArrowRight size={16} />
          </a>
        </div>
        <div className="mercado">
          <article className="mercado-card">
            <span className="mercado-card__icon">
              <BarChart3 size={26} />
            </span>
            <div>
              <h3>Profissões em transformação</h3>
              <p>Como novas tecnologias estão mudando as carreiras.</p>
            </div>
          </article>
          <article className="mercado-card">
            <span className="mercado-card__icon">
              <Lightbulb size={26} />
            </span>
            <div>
              <h3>Novas oportunidades</h3>
              <p>Conheça atividades profissionais emergentes.</p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
