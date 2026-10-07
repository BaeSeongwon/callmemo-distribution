import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './sites/icons'
import App from './App.tsx'
import { SiteProvider } from './context/SiteProvider.tsx'
import { createCallmemoProfile } from './sites/callmemo/profile.ts'
import { createCallmessageProfile } from './sites/callmessage/profile.ts'

const profileFactories = {
  callmemo: createCallmemoProfile,
  callmessage: createCallmessageProfile,
} as const

const siteId = __SITE_ID__
const profile = profileFactories[siteId]({
  publishedAt: __SITE_PUBLISHED_AT__,
  fileSizeMb: __SITE_FILE_SIZE_MB__,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteProvider profile={profile}>
      <App />
    </SiteProvider>
  </StrictMode>,
)
