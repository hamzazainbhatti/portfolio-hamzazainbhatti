import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'

import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App