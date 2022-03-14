import { Link } from "react-router-dom"
import logo from './images/logos/LogoRetro.png'
import facebook from './images/logos/facebook.png'
import twitter from './images/logos/twitter.png'
import './Footer.css'

function Footer () {

  return (
    <div className="main-footer">

        <div className="footer-nav">
          <ul>
            <li className="footer-link"><Link to="/">Home</Link></li>
            <li className="footer-link"><Link to="legal-notice">Aviso Legal</Link></li>
            <li className="footer-link"><Link to="privacity">Política de Privacidad</Link></li>
            <li className="footer-link"><Link to="contact">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-datos-empresa">

          <div className="footer-logo">
              <img src={logo} alt="logoImage" className="footer-logo-image"/>
          </div>

          <div className="footer-direccion-empresa">
            <p className="footer-fiscal">Retro web HackaBoss S.L.</p>
            <p className="footer-fiscal"> CIF A80192727</p>
            <p className="footer-fiscal">García Barbón 36201, Vigo</p>
          </div>

        </div>

        <div className="footer-community">
            <p>Nuestra comunidad</p>
            <a title="link a twitter"  href="https://twitter.com" rel="noopener noreferer" >
              <img src={twitter} alt="icono twitter"/>
            </a>
            <a title="link a facebook" href="https://facebook.com"  rel="noopener noreferer">
              <img src={facebook} alt="icono facebook"/>
            </a>
        </div>

      </div>


  )
}

export default Footer