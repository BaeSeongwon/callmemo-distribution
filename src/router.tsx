import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { DistributionPage } from './pages/DistributionPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '')

export function AppRouter() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route
          path="/"
          element={
            <SiteLayout>
              <DistributionPage />
            </SiteLayout>
          }
        />
        <Route
          path="/privacy"
          element={
            <SiteLayout showMainNav={false}>
              <PrivacyPolicyPage />
            </SiteLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
