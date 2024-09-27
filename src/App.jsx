import Header from './components/header.jsx'
import Home from './pages/home.jsx'
import Servicos from './components/servicos.jsx'
import Beneficios from './components/beneficios.jsx'
import Sobre from './pages/sobre.jsx'
import Depoimentos from './components/depoimentos.jsx'
import Contatos from './pages/contatos.jsx'

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
