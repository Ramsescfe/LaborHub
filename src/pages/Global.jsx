import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  Cpu,
  Globe,
  Leaf,
  MapPin,
  Search,
  Users,
} from 'lucide-react'
import Layout from '../components/Layout'
import { ChoroplethWorldMap } from '../components/WorldMap'
import './Global.css'

const regioes = [
  { id: 'america-norte', nome: 'América do Norte' },
  { id: 'america-sul', nome: 'América do Sul' },
  { id: 'europa', nome: 'Europa' },
  { id: 'asia', nome: 'Ásia' },
  { id: 'oceania', nome: 'Oceania' },
]

const panorama = [
  { Icon: BriefcaseBusiness, tom: 'red', valor: '+12,3 mi', texto: 'Novas vagas no mundo', delta: '+4,2%' },
  { Icon: BarChart3, tom: 'blue', valor: 'US$ 58,7 mil', texto: 'Salário médio global', delta: '+3,1%' },
  { Icon: Users, tom: 'yellow', valor: '+190 países', texto: 'Com oportunidades ativas' },
]

const mercados = [
  { flag: '🇺🇸', nome: 'Estados Unidos', texto: 'Alta demanda em tecnologia, saúde e dados.' },
  { flag: '🇩🇪', nome: 'Alemanha', texto: 'Oportunidades em engenharia, indústria e inovação.' },
  { flag: '🇨🇦', nome: 'Canadá', texto: 'Crescimento em tecnologia, construção e serviços.' },
  { flag: '🇦🇺', nome: 'Austrália', texto: 'Mercado forte em saúde, educação e infraestrutura.' },
]

const tendencias = [
  { Icon: Cpu, tom: 'blue', titulo: 'Tecnologia em expansão', texto: 'IA, dados e automação seguem entre as áreas mais aquecidas no mundo.' },
  { Icon: Leaf, tom: 'yellow', titulo: 'Carreiras sustentáveis', texto: 'Cresce a demanda por profissões ligadas à transição energética e ao meio ambiente.' },
  { Icon: Users, tom: 'red', titulo: 'Trabalho sem fronteiras', texto: 'Modelos remotos e híbridos ampliam o acesso a oportunidades internacionais.' },
]

export default function Global() {
  const [regiao, setRegiao] = useState(null)

  return (
    <Layout>
      <section className="page-hero container global-hero">
        <h1 className="page-title">
          Mercado de trabalho
          <br />
          global
        </h1>
        <p className="page-subtitle">
          Explore oportunidades, salários e tendências em diferentes países e regiões do mundo.
        </p>
      </section>

      <section className="container global">
        <div className="global__filters">
          <label className="search global__search">
            <Search size={18} />
            <span className="sr-only">Buscar</span>
            <input placeholder="Buscar país, área ou profissão" />
          </label>
          <button className="select"><MapPin size={16} /> Região <ChevronDown size={16} /></button>
          <button className="select"><BriefcaseBusiness size={16} /> Área de atuação <ChevronDown size={16} /></button>
          <button className="select"><BarChart3 size={16} /> Nível profissional <ChevronDown size={16} /></button>
        </div>

        <div className="global-map card">
          <div className="global-map__map">
            <ChoroplethWorldMap regiao={regiao} />
          </div>
          <div className="global-map__regions">
            <h2>Explore por região</h2>
            <ul>
              {regioes.map((r) => (
                <li key={r.id}>
                  <button
                    className={regiao === r.id ? 'is-active' : ''}
                    onClick={() => setRegiao(regiao === r.id ? null : r.id)}
                  >
                    <Globe size={18} /> <span>{r.nome}</span> <ChevronRight size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section-head global__head">
          <h2 className="serif-title">Panorama global</h2>
          <a href="#analise" className="link-more">Ver análise completa <ArrowRight size={14} /></a>
        </div>
        <div className="panorama">
          {panorama.map(({ Icon, tom, valor, texto, delta }) => (
            <article key={valor} className="panorama__item card">
              <span className={`icon-box icon-box--${tom}`}><Icon size={20} /></span>
              <div>
                <strong>{valor}</strong>
                <small>{texto}</small>
              </div>
              {delta && (
                <span className="panorama__delta">
                  <b>▲ {delta}</b>
                  <small>em 12 meses</small>
                </span>
              )}
            </article>
          ))}
        </div>

        <h2 className="serif-title global__head">Principais mercados em destaque</h2>
        <div className="mercados">
          {mercados.map((m) => (
            <article key={m.nome} className="mercado-pais card">
              <h3><span className="flag">{m.flag}</span> {m.nome}</h3>
              <p>{m.texto}</p>
              <ArrowRight size={16} className="mercado-pais__arrow" />
            </article>
          ))}
        </div>

        <div className="section-head global__head">
          <h2 className="serif-title">Tendências globais</h2>
          <a href="#tendencias" className="link-more">Ver todas as tendências <ArrowRight size={14} /></a>
        </div>
        <div className="tendencias">
          {tendencias.map(({ Icon, tom, titulo, texto }) => (
            <article key={titulo} className="tendencia card">
              <span className={`icon-box icon-box--${tom}`}><Icon size={20} /></span>
              <h3>{titulo}</h3>
              <p>{texto}</p>
              <ArrowRight size={16} className="mercado-pais__arrow" />
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
