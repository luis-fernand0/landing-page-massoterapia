import '../style/header.css'
import '../style/responsive/header-responsive.css'

const Header = () => {

    function toggleMenu () {
        const nav = document.querySelector(".nav-pages-redes-sociais")
        nav.classList.toggle('active')
        const hamburguer = document.querySelector(".menu-hamburger")
        hamburguer.classList.toggle('active')
    }

  return (
    <>
      <header className='header'>
        <div className='logo'>
            <img className='logo' src=".././public/images/img-logo.png" alt="logo" />
        </div>
        
        <button onClick={() => {toggleMenu()}} className='menu-hamburger' id='menu' type="button">
            <span className='hamburguer'></span>
        </button>

        <nav className='nav-pages-redes-sociais'>

            <div className='nav-pages'>

                <ul className='lista-nav'>
                    
                    <li className='dropdown'>

                        <button onClick={() => {toggleMenu()}} className='btn'>
                            <a href="#home">HOME</a>
                        </button>    

                        <div>
                            <ul className="dropdown-content">
                                <li className='link-dropdown'>
                                    <button onClick={() => {toggleMenu()}}  className='btn'>
                                        <a className='text-dropdown' href="#servicos">SERVIÇOS</a>
                                    </button>
                                </li>

                                <li className='link-dropdown'>
                                    <button onClick={() => {toggleMenu()}}  className='btn'>
                                        <a className='text-dropdown' href="#beneficios">BENEFÍCIOS</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className='dropdown'>
                        <button onClick={() => {toggleMenu()}}  className='btn'>
                            <a href='#sobre'>SOBRE</a>
                        </button>

                        <ul className="dropdown-content">
                            <li className='link-dropdown'>
                                <button onClick={() => {toggleMenu()}}  className='btn'>
                                    <a className='text-dropdown' href="#depoimentos">DEPOIMENTOS</a>
                                </button>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <button onClick={() => {toggleMenu()}}  className='btn'>
                            <a href="#contatos">CONTATOS</a>
                        </button>
                    </li>
                </ul>
            </div>

            <div className='nav-redes-sociais'>
                <ul className='redes-sociais'>

                    <li className='li-rede-social'>
                        <a className='rede-social' href="https://www.instagram.com/" target='_blank'>
                            <img className='rede-social-logo' src=".././public/images/instagram.png" alt="logo-instagram" />
                        </a>
                    </li>

                    <li className='li-rede-social'>
                        <a className='rede-social' href="https://www.facebook.com/" target='_blank'>
                            <img className='rede-social-logo' src=".././public/images/facebook.png" alt="logo-facebbok" />
                        </a>
                    </li>

                    <li className='li-rede-social'>
                        <a className='rede-social' href="https://www.tiktok.com/" target='_blank'>
                            <img className='rede-social-logo' src=".././public/images/tiktok.png" alt="logo-tiktok" />
                        </a>
                    </li>

                    <li className='li-rede-social'>
                        <a className='rede-social' href="https://www.youtube.com/" target='_blank'>
                            <img className='rede-social-logo' src=".././public/images/youtube.png" alt="logo-youtube" />
                        </a>
                    </li>

                    <li className='li-rede-social'>
                        <a className='rede-social' href="https://www.linkedin.com/in/" target='_blank'>
                            <img className='rede-social-logo' src=".././public/images/linkedin.png" alt="logo-linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Header
