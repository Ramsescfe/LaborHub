import Header from './Header'
import Footer from './Footer'
import Petals from './Petals'

export default function Layout({ children, petals = 'soft' }) {
  return (
    <div className="page">
      {petals && <Petals variant={petals} />}
      <Header />
      <main className="page__content">{children}</main>
      <Footer />
    </div>
  )
}
