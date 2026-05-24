import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { DownloadCard } from './components/DownloadCard'
import { Features } from './components/Features'
import { InstallGuide } from './components/InstallGuide'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DownloadCard />
        <Features />
        <InstallGuide />
      </main>
      <Footer />
    </div>
  )
}

export default App
