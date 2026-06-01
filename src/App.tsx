import { SiteLayout } from './components/SiteLayout'
import { Hero } from './components/Hero'
import { DownloadCard } from './components/DownloadCard'
import { Features } from './components/Features'
import { InstallGuide } from './components/InstallGuide'
import { FaqSection } from './components/FaqSection'

function App() {
  return (
    <SiteLayout>
      <main>
        <Hero />
        <DownloadCard />
        <Features />
        <InstallGuide />
        <FaqSection />
        {/* <ContactSection /> */}
      </main>
    </SiteLayout>
  )
}

export default App
