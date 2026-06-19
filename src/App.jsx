import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'

export default function App() {
  const path = window.location.pathname

  if (path === '/politica-de-privacidade') {
    return <PrivacyPolicyPage />
  }

  if (path === '/termos-de-uso') {
    return <TermsOfUsePage />
  }

  return <HomePage />
}
