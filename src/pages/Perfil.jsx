import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Phone, Plus } from 'lucide-react'
import Layout from '../components/Layout'
import './Perfil.css'

const habilidadesIniciais = ['Figma', 'Prototipação', 'Pesquisa com usuário', 'Inglês fluente', 'Photoshop']

function Toggle({ checked, onChange, label }) {
  return (
    <label className="toggle">
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="toggle__track" aria-hidden="true" />
    </label>
  )
}

export default function Perfil() {
  const [parceiras, setParceiras] = useState(true)
  const [alertas, setAlertas] = useState(false)
  const [habilidades, setHabilidades] = useState(habilidadesIniciais)

  const [nova, setNova] = useState(null) // null = campo fechado

  const adicionarHabilidade = (e) => {
    e.preventDefault()
    const valor = (nova || '').trim()
    if (valor && !habilidades.includes(valor)) setHabilidades([...habilidades, valor])
    setNova(null)
  }

  return (
    <Layout>
      <div className="container perfil">
        <p className="perfil__crumbs">
          <Link to="/">Início</Link> / Meu perfil
        </p>
        <div className="perfil__grid">
          {/* Coluna esquerda */}
          <div className="perfil__col">
            <section className="card perfil-card perfil-resumo">
              <div className="avatar">
                MA
                <span className="avatar__status" />
              </div>
              <h1>Maria Albuquerque</h1>
              <p>Estudante de Design · 3º período</p>
              <p>Recife, PE</p>
              <button className="btn btn--outline btn--sm perfil-resumo__edit">Editar perfil</button>
              <div className="progress">
                <small>Perfil 80% completo</small>
                <span className="bar">
                  <span style={{ width: '80%', background: 'var(--blue)' }} />
                </span>
              </div>
            </section>

            <section className="card perfil-card">
              <h2>Contato</h2>
              <ul className="contato">
                <li>
                  <span className="contato__icon contato__icon--blue"><Phone size={14} /></span>
                  <div><small>Telefone</small>(81) 99999-0000</div>
                </li>
                <li>
                  <span className="contato__icon contato__icon--red"><Mail size={14} /></span>
                  <div><small>E-mail</small>maria.albuquerque@email.com</div>
                </li>
                <li>
                  <span className="contato__icon contato__icon--yellow"><MapPin size={14} /></span>
                  <div><small>Cidade</small>Recife, Pernambuco</div>
                </li>
              </ul>
            </section>

            <section className="card perfil-card">
              <h2>Privacidade</h2>
              <Toggle label="Aparecer para empresas parceiras" checked={parceiras} onChange={setParceiras} />
              <Toggle label="Receber alertas do mercado" checked={alertas} onChange={setAlertas} />
              <p className="perfil__note">Seus dados não são vendidos nem usados para anúncios.</p>
            </section>
          </div>

          {/* Coluna direita */}
          <div className="perfil__col">
            <section className="card perfil-card">
              <h2>Currículo</h2>
              <div className="curriculo">
                <span className="curriculo__pdf">PDF</span>
                <div className="curriculo__info">
                  <strong>Curriculo_Maria_Albuquerque.pdf</strong>
                  <small>Atualizado em 02/11/2026 · 214KB</small>
                </div>
                <button className="btn btn--outline btn--sm">Substituir</button>
                <button className="btn btn--navy btn--sm">Baixar</button>
              </div>
            </section>

            <section className="card perfil-card">
              <h2>Formação e momento</h2>
              <dl className="formacao">
                <div><dt>Curso</dt><dd>Design - 3 período</dd></div>
                <div><dt>Instituição</dt><dd>Cesar School</dd></div>
                <div><dt>Momento</dt><dd>Em dúvida sobre a área</dd></div>
              </dl>
            </section>

            <section className="card perfil-card">
              <h2>Habilidades</h2>
              <div className="tags">
                {habilidades.map((h) => (
                  <span key={h} className="chip">{h}</span>
                ))}
                {nova === null ? (
                  <button className="chip chip--add" onClick={() => setNova('')}>
                    <Plus size={14} /> Adicionar
                  </button>
                ) : (
                  <form onSubmit={adicionarHabilidade}>
                    <input
                      autoFocus
                      className="chip chip--add chip--input"
                      placeholder="Nova habilidade"
                      value={nova}
                      onChange={(e) => setNova(e.target.value)}
                      onBlur={adicionarHabilidade}
                    />
                  </form>
                )}
              </div>
            </section>

            <section className="card perfil-card">
              <h2>Preferências de vaga</h2>
              <div className="preferencias">
                <div>
                  <small>Tipo de vaga</small>
                  <div className="tags">
                    <span className="chip chip--yellow">Estágio</span>
                    <span className="chip chip--yellow">Júnior</span>
                  </div>
                </div>
                <div>
                  <small>Local</small>
                  <div className="tags">
                    <span className="chip">Recife e RM</span>
                  </div>
                </div>
                <div>
                  <small>Modalidade</small>
                  <div className="tags">
                    <span className="chip">Híbrido</span>
                    <span className="chip">Remoto</span>
                  </div>
                </div>
                <div>
                  <small>Áreas de interesse</small>
                  <div className="tags">
                    <span className="chip chip--pink">Design</span>
                    <span className="chip chip--pink">Tecnologia</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="card perfil-card">
              <div className="section-head perfil-card__head">
                <h2>Carreiras que estou comparando</h2>
                <Link to="/salarios" className="link-more comparador">
                  Abrir comparador <ArrowRight size={14} />
                </Link>
              </div>
              <div className="tags">
                <span className="carreira">UX/UI Designer</span>
                <span className="carreira">Product Designer</span>
                <span className="carreira">Designer Gráfico</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}
