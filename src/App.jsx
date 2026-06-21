import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'
import OfertaBaseObrigadoPage from './pages/OfertaBaseObrigadoPage'
import OfertaBasePesquisaPage from './pages/OfertaBasePesquisaPage'

export default function App() {
  const path = window.location.pathname

  if (path === '/politica-de-privacidade') {
    return <PrivacyPolicyPage />
  }

  if (path === '/termos-de-uso') {
    return <TermsOfUsePage />
  }

  if (path === '/oferta-base-obrigado') {
    return <OfertaBaseObrigadoPage />
  }

  if (path === '/oferta-base-pesquisa') {
    return <OfertaBasePesquisaPage />
  }

  return <HomePage />
}
