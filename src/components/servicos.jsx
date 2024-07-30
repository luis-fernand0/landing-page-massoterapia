import '../style/servicos.css'
import '../style/responsive/servicos-responsive.css'

const Servicos = () => {
    
    function viewCards() { 
        const cardsGradient = document.querySelector('.cards')
        const button = document.getElementById('btn-expand-servico')

        cardsGradient.classList.toggle('cards-gradiente')
    
        if (!cardsGradient.classList.contains('cards-gradiente')) {
            return button.textContent = 'Ver Menos!'
        } else {
            button.textContent = 'Ver Mais!'
        }
    }

  return (
    <>
      <div id='servicos' className='titulos-cards'>

        <div className="titulo-servicos">
            <h1 className='titulo-servico titulo-servico-1'>NOSSOS SERVIÇOS</h1>
            <h2 className='titulo-servico titulo-servico-2'>QUAL O TIPO IDEAL DE MASSAGEM PARA VOCÊ?</h2>
        </div>

        <ul className="cards cards-gradiente">
            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Massagem Relaxante</h1>

                        <div className="descricao-servico">
                            <p>
                                Utiliza movimentos suaves e longos para promover relaxamento e aliviar o estresse.
                            </p>

                            <p>
                                Ideal para quem busca uma pausa na rotina estressante, ajudando a reduzir a ansiedade e melhorar o bem-estar geral.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Massagem Terapêutica</h1>

                        <div className="descricao-servico">
                            <p>
                                Envolve técnicas específicas para tratar dores musculares e problemas físicos.
                            </p>

                            <p>
                                para quem sofre de dores crônicas ou precisa de alívio para tensões musculares localizadas.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Massagem Desportiva</h1>

                        <div className="descricao-servico">
                            <p>
                                Focada em atletas, ajuda na prevenção de lesões e na recuperação muscular.
                            </p>

                            <p>
                                Se você é um atleta ou pratica exercícios regularmente, essa massagem é ideal para você, ajudando a melhorar seu desempenho e acelerarando sua recuperação.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Massagem de Pedras Quentes</h1>

                        <div className="descricao-servico">
                            <p>
                                Utiliza pedras aquecidas para relaxar os músculos e promover a circulação.
                            </p>

                            <p>
                                O calor das pedras proporciona um relaxamento profundo e alivia a tensão muscular.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Massagem Craniana</h1>

                        <div className="descricao-servico">
                            <p>
                                Focada na cabeça, pescoço e ombros, alivia a tensão e melhora a circulação sanguínea.
                            </p>

                            <p>
                                Ideal para quem sofre de dores de cabeça frequentes ou tensão no pescoço, essa massagem é ideal para aliviar esses sintomas.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Massagem Ayurvédica</h1>

                        <div className="descricao-servico">
                            <p>
                                Baseada na medicina tradicional indiana, utiliza óleos e técnicas específicas para equilibrar o corpo e a mente.
                            </p>

                            <p>
                                Promove a harmonia entre corpo e mente, sendo perfeita para quem busca um tratamento holístico e profundo.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Massagem Modeladora</h1>

                        <div className="descricao-servico">
                            <p>
                                Utiliza técnicas vigorosas para modelar o corpo e reduzir medidas.
                            </p>

                            <p>
                                Ideal para quem busca uma pausa na rotina estressante, ajudando a reduzir a ansiedade e melhorar o bem-estar geral.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Reflexologia Podal</h1>

                        <div className="descricao-servico">
                            <p>
                                Foca nos pontos reflexos dos pés que correspondem a diferentes partes do corpo.
                            </p>

                            <p>
                                Promove o equilíbrio e o bem-estar geral, além de aliviar dores e melhorar a circulação.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Drenagem Linfática</h1>

                        <div className="descricao-servico">
                            <p>
                                Estimula o sistema linfático para reduzir a retenção de líquidos e melhorar a circulação.
                            </p>

                            <p>
                                Se você sofre de inchaço ou quer desintoxicar o corpo, essa massagem é altamente recomendada.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Barras de Access</h1>

                        <div className="descricao-servico">
                            <p>
                                Técnica que envolve toques suaves em pontos específicos da cabeça para liberar bloqueios mentais e emocionais.
                            </p>

                            <p>
                                Ajuda a aliviar o estresse e a ansiedade, promovendo uma sensação de bem-estar mental.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Limpeza de Pele</h1>

                        <div className="descricao-servico">
                            <p>
                                Tratamento facial que remove impurezas e células mortas, promovendo uma pele mais saudável e radiante.
                            </p>

                            <p>
                                Se você deseja uma pele limpa, renovada e saudável, esse tratamento é essencial.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Microagulhamento</h1>

                        <div className="descricao-servico">
                            <p>
                                Utiliza agulhas finas para estimular a produção de colágeno e elastina na pele.
                            </p>

                            <p>
                                Ajuda a reduzir cicatrizes, rugas e melhorar a textura da pele, proporcionando um rejuvenescimento facial.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Shiatsu</h1>

                        <div className="descricao-servico">
                            <p>
                                Técnica japonesa que utiliza pressões com os dedos em pontos específicos do corpo para equilibrar a energia.
                            </p>

                            <p>
                                Promove o equilíbrio energético, aliviando dores e proporcionando bem-estar geral.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>Reiki</h1>

                        <div className="descricao-servico">
                            <p>
                                Técnica de cura energética que utiliza a imposição de mãos para equilibrar a energia do corpo.
                            </p>

                            <p>
                                Se você busca um tratamento energético para melhorar o bem-estar físico e emocional, o Reiki é ideal.
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <li className="card">
                <div className='logo-titulo-descricao'>
                    <div className='logo-moke-spa-bg-div'>
                        <img className='logo-moke-spa-bg' src=".././public/images/logo-moke-spa-bg.png" alt="" />
                    </div>

                    <div className='titulo-descricao-massagem'>
                        <h1 className='titulo-massagem'>ThetaHealing</h1>

                        <div className="descricao-servico">
                            <p>
                                Técnica de cura energética que utiliza a meditação para acessar ondas cerebrais Theta e promover a cura.
                            </p>

                            <p>
                                Ajuda a liberar bloqueios emocionais e mentais, promovendo uma profunda sensação de paz e clareza mental.
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

        <div className='btns-agendar-expand'>
            <button id='btn-expand-servico' onClick={() => {viewCards()}} className='btn-expand-servico'>
                Ver Mais!
            </button>

            <a href="https://wa.me//5521973890284/?text=Teste" target='_blank'>
                <button className='btn-agendar-servico'>
                    Agende sua Sessão!
                </button>
            </a>
        </div>
      </div>
    </>
  )
}

export default Servicos
