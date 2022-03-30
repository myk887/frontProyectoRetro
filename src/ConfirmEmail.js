import './ConfirmEmail.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';


function ConfirmEmail( {setShow, setShow2, setShow3, setShow4, setShow5, setShow6, setShow7} ) {
    const [show1, setShow1] = useState(true)
    const [error, setError] = useState(false)
    const {code} = useParams()
    const navigate = useNavigate()
    const handleClick = async e => {
        e.stopPropagation()
        e.preventDefault()
        setShow1(false)
        const api = `http://localhost:3000/users/validate/${code}`
        const res = await fetch(api)
        if (res.ok) {
          navigate('/')
        } else {
          setShow1(true)
          setError(res.statusText)
        }
    }
  return show1 ?
    <div className="confirm-bg" onMouseOver={()=>{
      setShow(false)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(false)
      setShow6(false)
      setShow7(false)
    }}>
      <div className="confirm-fg">
        <h1 className='confirm'> Confirmate y empieza a comprar y vender productos retros</h1>
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Confirmar Email</button>
      </div>
    </div>
    :
    <div onMouseOver={()=>{
      setShow(false)
      setShow2(false)
      setShow3(false)
      setShow4(false)
      setShow5(false)
      setShow6(false)
      setShow7(false)
    }}>
      <Loading />
    </div>
}

export default ConfirmEmail;