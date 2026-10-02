import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'

import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <About />
        <Contact />
      </main>
    </>
  )
}

export default App