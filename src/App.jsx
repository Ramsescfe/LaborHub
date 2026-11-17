import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Propostas from './pages/Propostas'
import Salarios from './pages/Salarios'
import Empresas from './pages/Empresas'
import Global from './pages/Global'
import Perfil from './pages/Perfil'
import Notificacoes from './pages/Notificacoes'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propostas" element={<Propostas />} />
        <Route path="/salarios" element={<Salarios />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/global" element={<Global />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
