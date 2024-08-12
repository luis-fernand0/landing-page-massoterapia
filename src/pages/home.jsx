import '../style/home.css'
import '../style/responsive/home-responsive.css'

import '../style/animation.css'
import Animation from '../animation'

import { useEffect } from 'react'

const Home = () => {
    
  useEffect(() => {
    const show = document.querySelectorAll('.hidden')
    Animation(show)
  }, [])

  return (
    <>
      <div id='home' className='bg-b47766'>
        <div className="image-lines">
          <img className="img-alessandra" src=".././public/images/alessandra-passos.png" alt="alessandra-passos" />
        </div>

        <div className="descricoes">
          <h1 className='titulo-home titulo-1 hidden'>
            MASSOTERAPIA
            <br/> 
            ALESSANDRA PASSOS
          </h1>

          <div className="titulos-descricao">
            <h2 className='titulo-home titulo-2 hidden'>
              Descubra o Seu Refúgio de Bem-Estar
            </h2>

            <p className='descricao hidden'>
                Renove seu corpo e mente com nossos tratamentos exclusivos de spa e massoterapia. Venha desfrutar de um ambiente sereno e revigorante, projetado para proporcionar relaxamento profundo e revitalização completa.
            </p>

            <h3 className='titulo-home titulo-3 hidden'>
              Experimente a Harmonia Perfeita!
            </h3>
            <h3 className='titulo-home titulo-4 hidden'>
              Agende sua sessão hoje e sinta a diferença!
            </h3>

            <div className='btns-cta-whats hidden'>
              <a href="https://wa.me//5521973890284/?text=Teste" target='_blank'>
                <button className='btn-cta'>Agende sua sessão!</button>
              </a>

              <a href="https://wa.me//5521973890284/?text=Teste" target='_blank'>
                <img className='btn-whatsapp' src=".././public/images/whatsapp.png" alt="whatsapp-logo" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
