import '../style/home.css'
import '../style/responsive/home-responsive.css'
import Animation from '../animation'
import { useEffect } from 'react'

const Home = () => {
    
  useEffect(() => {
    const firstOne = document.querySelector('.first-one')
    Animation(firstOne)
  }, [])

  return (
    <>
      <div id='home' className='bg-b47766 hidden first-one'>
        <div className="image-lines">
          <img className="img-alessandra" src=".././public/images/alessandra-passos.png" alt="alessandra-passos" />
        </div>

        <div className="descricoes">
          <h1 className='titulo-home titulo-1'>
            MASSOTERAPIA
            <br/> 
            ALESSANDRA PASSOS
          </h1>

          <div className="titulos-descricao">
            <h2 className='titulo-home titulo-2'>
              Descubra o Seu Refúgio de Bem-Estar
            </h2>

            <p className='descricao'>
                Renove seu corpo e mente com nossos tratamentos exclusivos de spa e massoterapia. Venha desfrutar de um ambiente sereno e revigorante, projetado para proporcionar relaxamento profundo e revitalização completa.
            </p>

            <h3 className='titulo-home titulo-3'>
              Experimente a Harmonia Perfeita!
            </h3>
            <h3 className='titulo-home titulo-4'>
              Agende sua sessão hoje e sinta a diferença!
            </h3>

            <div className='btns-cta-whats'>
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
