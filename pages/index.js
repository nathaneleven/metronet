import Header from '../src/components/molecules/Header'
import Footer from '../src/components/molecules/Footer'
import Hero from '../src/components/organisms/Hero'
import Cta from '../src/components/organisms/Cta'
import Plans from '../src/components/organisms/Plans'
import About from '../src/components/organisms/About'
import Services from '../src/components/organisms/Services'
import CtaFooter from '../src/components/organisms/CtaFooter'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cta />
      <Plans/>
      <About/>
      <Services/>
      <CtaFooter/>
      <Footer/>
    </div>
  )
}
