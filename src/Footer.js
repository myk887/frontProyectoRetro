import { Link } from "react-router-dom"
import Logo from './Logo'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import './Footer.css'

function Footer () {

  return (
    <div className="footer"> 
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
          <Logo />
          <li> CIF A80192727</li>
          <li>Rúa Falperra nº11, Nigrán</li>
        </ul>
      </div>
      <div className="community">
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