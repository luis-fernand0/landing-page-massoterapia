import '../style/beneficios.css'
import '../style/responsive/beneficios-responsive.css'

import '../style/animation.css'
import Animation from '../animation.js'

import { useEffect } from 'react'

const Beneficios = () => {

  function viewCards() { 
    const cardsGradient = document.querySelector('.cards-beneficios')
    const button = document.getElementById('btn-expand-benefico')

    cardsGradient.classList.toggle('cards-gradiente-beneficios')

    if (!cardsGradient.classList.contains('cards-gradiente-beneficios')) {
        return button.textContent = 'Ver Menos!'
    } else {
        button.textContent = 'Ver Mais!'
    }
  }

  useEffect(() => {
    const show = document.querySelectorAll('.hidden')
    Animation(show)
  }, [])

  return (
    <>
      <div id='beneficios' className="bg-image-beneficio">
        
        <div className="titulo-beneficios hidden">
          <h1 className="titulo-beneficios-1">BENEFÍCIOS</h1>
          <h2 className="titulo-beneficios-2">BENEFICIOS DA MASSOTERAPIA</h2>
        </div>

        <ul className="cards-beneficios cards-gradiente-beneficios hidden">

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Redução do Estresse e Ansiedade
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    Nossas técnicas de massoterapia promovem o relaxamento profundo, ajudando a aliviar o estresse e a ansiedade acumulados. Experimente a paz e a tranquilidade que só uma boa massagem pode proporcionar.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Alívio de Dores Musculares e Crônicas
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    Com técnicas especializadas, como massagem terapêutica e shiatsu, você pode encontrar alívio eficaz para dores musculares e crônicas. Nossos terapeutas são treinados para identificar e tratar pontos de tensão, proporcionando um alívio duradouro.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Melhora da Circulação Sanguínea e Linfática
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    Tratamentos como drenagem linfática e reflexologia podal estimulam a circulação sanguínea e linfática, ajudando na eliminação de toxinas e na redução do inchaço, promovendo uma sensação de leveza e bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Rejuvenescimento e Saúde da Pele
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    Nossos tratamentos faciais, incluindo limpeza de pele e microagulhamento, revitalizam e rejuvenescem a pele, melhorando sua textura e aparência. Desfrute de uma pele mais saudável e radiante.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Equilíbrio Energético e Mental
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    Terapias energéticas como Reiki e Barras de Access ajudam a equilibrar a energia do corpo, reduzindo o estresse mental e emocional. Sinta-se renovado e em paz com você mesmo.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Melhora do Desempenho Físico
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    Para os atletas, a massagem desportiva é essencial para prevenir lesões, melhorar o desempenho e acelerar a recuperação pós-treino. Mantenha-se no seu melhor com nossos tratamentos especializados.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Melhora do Desempenho Físico
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    Para os atletas, a massagem desportiva é essencial para prevenir lesões, melhorar o desempenho e acelerar a recuperação pós-treino. Mantenha-se no seu melhor com nossos tratamentos especializados.
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="card-beneficio">
            <div className='logo-titulo-descricao-beneficio'>
              <div className='logo-bg-div-beneficio'>
                <img className='logo-bg-beneficio' src=".././public/images/logo-bg.png" alt="" />
              </div>

              <div className='titulo-beneficio-massagem'>
                <h1 className='titulo-card-beneficio'>
                  Promoção do Bem-Estar Geral
                </h1>

                <div className="descricao-beneficio">
                  <p>
                    A massagem ayurvédica e o ThetaHealing oferecem abordagens holísticas para equilibrar corpo e mente, promovendo a saúde e o bem-estar geral. Encontre harmonia e vitalidade em cada sessão.
                  </p>
                </div>
              </div>
            </div>
          </li>

        </ul>

        <button id='btn-expand-benefico' onClick={() => {viewCards()}} className='btn-expand-benefico hidden'>Ver Mais!</button>
        
      </div>

      <div className="porque-escolher">
        <h1 className='titulo-porque hidden'>
          Por que Escolher Nosso Spa & Massoterapia
        </h1>

        <ul className='motivos-porque hidden'>
          <li>
            <p className='motivo'>
              <span className='titulo-motivo'>Terapeutas Especializados:</span> Nossa equipe é altamente qualificada e dedicada a proporcionar a melhor experiência de massoterapia.
            </p>
          </li>

          <li className='motivo'>
            <span className='titulo-motivo'>Ambiente Tranquilo:</span> Desfrute de um ambiente sereno e relaxante, projetado para sua máxima comodidade.
          </li>

          <li className='motivo'>
            <span className='titulo-motivo'>Tratamentos Personalizados:</span> Cada sessão é adaptada às suas necessidades específicas, garantindo resultados eficazes e satisfatórios.
          </li>
        </ul>
      </div>

      <div className='text-btn-beneficio'>
        <p className='text-beneficio hidden'>
          Agende sua sessão hoje e descubra como a massoterapia pode transformar sua vida!
        </p>

        <a href="" target='_blank'>
          <button className='btn-agende-sessao hidden'>
            Agende sua Sessão!
          </button>
        </a>
      </div>
    </>
  )
}

export default Beneficios
