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
      <div className="footer-company">
        <ul>
          <img src={logo} alt="logoImage" className="footer-logo"/>
          <li className="footer-address"> Grupo Retro JSB08VI</li>
          <li className="footer-address">Hack a Boss, Vigo</li>
        </ul>
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