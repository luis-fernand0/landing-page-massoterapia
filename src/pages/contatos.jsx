import '../style/contatos.css'
import '../style/responsive/contatos-responsive.css'

import '../style/animation.css'
import Animation from '../animation.js'

import { useEffect } from 'react'

const Contatos = () => {

  useEffect(() => {
    const show = document.querySelectorAll('.hidden')
    Animation(show)
  }, [])

  return (
    <>
      <div className="side-bar hidden">
        <div className='titulos-side-bar'>
          <div className='titulo-1-2-side-bar'>
            <h2 className="titulo-side-bar titulo-1-side-bar">
              Algo do seu interesse
            </h2>

            <h2 className="titulo-side-bar titulo-2-side-bar">
              Nome da Empresa
              <br />
              <span className="titulo-side-bar titulo-3-side-bar">
                Massoterapeuta
              </span>
            </h2>
          </div>

          <h3 className="titulo-side-bar titulo-4-side-bar">
            Solicite agora sua primeira massagem com condições Especiais
          </h3>
        </div>

        <div className='div-img-massage'>
          <img className="img-side-bar" src="/images/img-massage-2.png" alt="" />
        </div>
      </div>

      <form className='form' action="">
        <h1 className="titulo-contatos hidden">FORMAS DE CONTATOS</h1>

        <div className='select-inputs hidden'>
          <label className="label-input">
            <span  className="text-label">
              NOME
            </span>
            <br />
            <input placeholder='NOME' className="input-select-label" name="nome" type="text" required />
          </label>

          <label className="label-input">
            <span  className="text-label">
              TELEFONE
            </span>
            <br />
            <input placeholder='TELEFONE' className="input-select-label input-tel" name="telefone" type="number" minLength={11} required/>
          </label>

          <label className="label-input">
            <span  className="text-label">
              EMAIL
            </span>
            <br />
            <input placeholder='EMAIL' className="input-select-label" name="email" type="email" required/>
          </label>

          <label className="label-input">
            <span className="text-label">
              SELECIONE A MASSAGEM
            </span>
            <br />
            <select className="input-select-label" name="massagens" id="massagens">
              <option value="massagem-relaxante">
                Massagem Relaxante
              </option>

              <option value="massagem-terapeutica">
                Massagem terapêutica
              </option>

              <option value="massagem-desportiva">
                Massagem Desportiva
              </option>

              <option value="massagem-de-pedras-quentes">
                Massagem de Pedras Quentes
              </option>

              <option value="massagem-craniana">
                Massagem Craniana
              </option>

              <option value="massagem-ayurvedica">
                Massagem Ayurvédica
              </option>

              <option value="massagem-modeladora">
                Massagem Modeladora
              </option>

              <option value="reflaxologia-podal">
                Reflexologia Podal
              </option>

              <option value="drenagem-linfatica">
                Drenagem Linfática
              </option>

              <option value="barras-access">
                Barras de Access
              </option>
              <option value="limpeza-de-pele">
                Limpeza de Pele
              </option>

              <option value="microagulhamento">
                Microagulhamento
              </option>

              <option value="shiatsu">
                Shiatsu
              </option>

              <option value="reiki">
                Reiki
              </option>

              <option value="thetaHealing">
                ThetaHealing
              </option>
            </select>
          </label>
        </div>

        <div className='btns-contatos hidden'>
          <button className='btn-cta' type="button">Enviar</button>

          <a href="" target='_blank'>  
            <button className='btn-cta' type='button'>Agende sua sessão!</button>
          </a>

          <a href="" target='_blank'>
              <img className='btn-whatsapp' src="/images/whatsapp.png" alt="whatsapp-logo" />
          </a>
        </div>

        <div className='endereco-tel hidden'>
          <div className='endereco'>
            <p className='endereco-text'>
              Endereço:
              <br />
              <span className='text-endereco-tel'>
                SEU ENDEREÇO
              </span>
            </p>
          </div>

          <div className='tel'>
            <p className='tel-text'>
              Telefone:
              <br />
              <span className='text-endereco-tel'>
                SEU TELEFONE
              </span>
            </p>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contatos
