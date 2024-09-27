import '../style/sobre.css'
import '../style/responsive/sobre-responsive.css'

import '../style/animation.css'
import Animation from '../animation.js'

import { useEffect } from 'react'

const Sobre = () => {

  useEffect(() => {
    const show = document.querySelectorAll('.hidden')
    Animation(show)
  }, [])

  return (
    <>
      <div className="sobre">
        <h1 className="sobre-titulo hidden">SOBRE NÓS</h1>

        <div className='mission-vision-valores hidden'>

          <div className="sobre-descricao misson">
            <h2 className="descricao-titulo misson-titulo">
              MISSÃO
            </h2>

            <p className="descricao-mvv descricao-misson">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="sobre-descricao vision">
            <h2 className="descricao-titulo vision-titulo">
              VISÃO
            </h2>

            <p className="descricao-mvv descricao-vision">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="sobre-descricao valores">
            <h2 className="descricao-titulo valores-titulo">
              VALORES
            </h2>

            <p className="descricao-mvv descricao-valores">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre
