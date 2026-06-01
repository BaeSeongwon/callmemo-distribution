import { SiteLayout } from './components/SiteLayout'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'

export function PrivacyApp() {
  return (
    <SiteLayout showMainNav={false}>
      <PrivacyPolicyPage />
    </SiteLayout>
  )
}
