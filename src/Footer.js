import { Link } from "react-router-dom"
import logo from './images/logos/LogoRetroTRANS.png'
import facebook from './images/logos/facebook.png'
import twitter from './images/logos/twitter.png'
import './Footer.css'

function Footer () {

  return (
    <div className="main-footer">
      <div className="nav">
        <ul>
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="legal-notice">Aviso Legal</Link></li>
          <li className="link"><Link to="privacity">Política de Privacidad</Link></li>
          <li className="link"><Link to="contact">Contacto</Link></li>
        </ul>
      </div>
      <div className="identification">
        <ul>
          <img src={logo} alt="logoImage" className="logo"/>
          <li className="fiscal"> CIF A80192727</li>
          <li className="fiscal">Rúa Falperra nº11, Nigrán</li>
        </ul>
      </div>
      <div className="community">
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