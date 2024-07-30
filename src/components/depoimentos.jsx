import "../style/depoimentos.css"
import "../style/responsive/depoimentos-responsive.css"

const Depoimentos = () => {
    return (
        <>
            <div id="depoimentos" className="depoimentos">
                <h1 className="titulo-depoimentos">NOSSOS CLIENTES</h1>

                <div>
                    <ul className="depoimentos-container">
                        <li className="depoimento-container">
                            <div className="depoimento">

                                <div className="foto-name">
                                    <div className="name"></div>
                                    <h3>NAME</h3>
                                </div>

                                <div className="div-text-depoimento">
                                    <p className="text-depoimento">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="depoimento-container">
                            <div className="depoimento">

                                <div className="foto-name">
                                    <div className="name"></div>
                                    <h3>NAME</h3>
                                </div>

                                <div className="div-text-depoimento">
                                    <p className="text-depoimento">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="depoimento-container">
                            <div className="depoimento">

                                <div className="foto-name">
                                    <div className="name"></div>
                                    <h3>NAME</h3>
                                </div>

                                <div className="div-text-depoimento">
                                    <p className="text-depoimento">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className="btn-agende-beneficio ">
                    <a href="https://wa.me//5521973890284/?text=Teste" target='_blank'>
                        <button className='btn-agende-sessao'>Agende sua Sessão!</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Depoimentos
