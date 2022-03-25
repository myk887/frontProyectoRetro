import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Aside.css'

const categoriesBack = ['audio', 'electrónica', 'gaming', 'imagen', 'informática', 'música', 'teléfonos']

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }


function Aside () {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)
    const click = (e) => {
        e.preventDefault()
        setShow(!show)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const click2 = (e) => {
        e.preventDefault()
        setShow2(!show2)
        setShow(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const click3 = (e) => {
        e.preventDefault()
        setShow3(!show3)
        setShow2(false)
        setShow(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const click4 = (e) => {
        e.preventDefault()
        setShow4(!show4)
        setShow2(false)
        setShow3(false)
        setShow(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const click5 = (e) => {
        e.preventDefault()
        setShow5(!show5)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow(false)
        setShow6(false)
        setShow7(false)
    }
    const click6 = (e) => {
        e.preventDefault()
        setShow6(!show6)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow(false)
        setShow7(false)
    }
    const click7 = (e) => {
        e.preventDefault()
        setShow7(!show7)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow(false)
    }


    const over = (e) => {
        e.preventDefault()
        setShow(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const over2 = (e) => {
        e.preventDefault()
        setShow2(true)
        setShow(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const over3 = (e) => {
        e.preventDefault()
        setShow3(true)
        setShow2(false)
        setShow(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const over4 = (e) => {
        e.preventDefault()
        setShow4(true)
        setShow2(false)
        setShow3(false)
        setShow(false)
        setShow5(false)
        setShow6(false)
        setShow7(false)
    }
    const over5 = (e) => {
        e.preventDefault()
        setShow5(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow(false)
        setShow6(false)
        setShow7(false)
    }
    const over6 = (e) => {
        e.preventDefault()
        setShow6(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow(false)
        setShow7(false)
    }
    const over7 = (e) => {
        e.preventDefault()
        setShow7(true)
        setShow2(false)
        setShow3(false)
        setShow4(false)
        setShow5(false)
        setShow6(false)
        setShow(false)
    }

    return (
        <div className="aside">
            <ul>
                <li className="aside-category"><NavLink to={`/`}>Home</NavLink></li>
                <li className="aside-category"><NavLink to={`/todos`}>Todos</NavLink></li>
                {categoriesBack.map(category =>
                    <li key={category} className="aside-category">
                        {category === 'audio' && <div  onClick={category === 'audio' && click} onMouseOver={over} className="aside-login">
                            <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`} className="aside-link">
                                {category}
                            </NavLink>
                            <ul>
                                {show && category === 'audio' && ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman'].map(subCategory =>
                                <li key={subCategory} className="aside-dropdown" ><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                            </ul>
                        </div>}
                        {category === 'electrónica' && <div  onClick={category === 'electrónica' && click2} onMouseOver={over2}  className="aside-login">
                            <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`} className="aside-link">
                                {category}
                            </NavLink>
                            <ul>
                                {show2 && category === 'electrónica' && ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt'].map(subCategory =>
                                <li key={subCategory} className="aside-dropdown"><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                            </ul>
                        </div>}
                        {category === 'gaming' && <div  onClick={category === 'gaming' && click3} onMouseOver={over3} className="aside-login">
                            <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`} className="aside-link">
                                {category}
                            </NavLink>
                            <ul>
                                {show3 && category === 'gaming' && ['cartuchos', 'consolas'].map(subCategory =>
                                <li key={subCategory} className="aside-dropdown"><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                            </ul>
                        </div>}
                        {category === 'informática' && <div  onClick={category === 'informática' && click4} onMouseOver={over4} className="aside-login">
                            <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`} className="aside-link">
                                {category}
                            </NavLink>
                            <ul>
                                {show4 && category === 'informática' && ['accesorios', 'monitores', 'ordenadores', 'teclados'].map(subCategory =>
                                <li key={subCategory} className="aside-dropdown"><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                            </ul>
                        </div>}
                        {category === 'música' && <div  onClick={category === 'música' && click5} onMouseOver={over5} className="aside-login">
                            <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`} className="aside-link">
                                {category}
                            </NavLink>
                            <ul>
                                {show5 && category === 'música' && ['cintas', 'vinilos'].map(subCategory =>
                                <li key={subCategory} className="aside-dropdown"><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                            </ul>
                        </div>}
                        {category === 'teléfonos' && <div  onClick={category === 'teléfonos' && click6} onMouseOver={over6} className="aside-login">
                            <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`} className="aside-link aside-login-dropdown">
                                {category}
                            </NavLink>
                            <ul>
                                {show6 && category === 'teléfonos' && ['fijos', 'moviles'].map(subCategory =>
                                <li key={subCategory} className="aside-dropdown"><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                            </ul>
                        </div>}
                        {category === 'imagen' && <div  onClick={category === 'imagen' && click7} onMouseOver={over7} className="aside-login">
                            <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`} className="aside-link">
                                {category}
                            </NavLink>
                            <ul>
                                {show7 && category === 'imagen' && ['camaraFotos', 'camaraVideo', 'televisores'].map(subCategory =>
                                <li key={subCategory} className="aside-dropdown"><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                            </ul>
                        </div>}
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Aside