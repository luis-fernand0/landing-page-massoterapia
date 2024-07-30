import Header from './components/header'
import Home from './pages/home'
import Servicos from './components/servicos'
import Beneficios from './components/beneficios'
import Sobre from './pages/sobre'
import Depoimentos from './components/depoimentos'
import Contatos from './pages/contatos'

import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <section className='home'>
          <Home />
          <Servicos />
          <Beneficios />
        </section>

        <section  id='sobre'>
          <Sobre />
          <Depoimentos />
        </section>

        <section id='contatos'>
          <Contatos />
        </section>
      </main>
    </>
  )
}

export default App
