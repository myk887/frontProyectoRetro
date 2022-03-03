import './ConfirmEmail.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';


function ConfirmEmail() {
    const [show, setShow] = useState(true)
    const [error, setError] = useState(false)
    const {code} = useParams()
    const navigate = useNavigate()
    const handleClick = async e => {
        e.stopPropagation()
        e.preventDefault()
        setShow(false)
        const api = `http://localhost:3000/users/validate/${code}`
        const res = await fetch(api)
        if (res.ok) {
          navigate('/')
        } else {
          setShow(true)
          setError(res.statusText)
        }
    }
  return show ?
    <div className="confirm-bg">
      <div className="confirm-fg">
        <h1 className='confirm'> Confirmate y empieza a comprar y vender productos retros</h1>
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Confirmar Email</button>
      </div>
    </div>
    :
    <div>
      <Loading />
    </div>
}

export default ConfirmEmail;