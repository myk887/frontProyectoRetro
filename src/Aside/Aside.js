import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Aside.css'

const categoriesBack = ['audio', 'electrónica', 'gaming', 'imagen', 'informática', 'música', 'teléfonos']

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

// function Aside () {

//     return (
//         <div className="aside">
//             <ul>
//                 <li><NavLink to={`/`}>Home</NavLink></li>
//                 <li><NavLink to={`/todos`}>Todos</NavLink></li>
//                 {categoriesBack.map(category =>
//                     <li key={category}><NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`}>{category}</NavLink></li>
//                     )}
//             </ul>
//         </div>
//     )
// }
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

    return (
        <div className="aside">
            <ul>
                <li><NavLink to={`/`}>Home</NavLink></li>
                <li><NavLink to={`/todos`}>Todos</NavLink></li>
                {categoriesBack.map(category =>
                    <li key={category}>
                        <NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`}>
                            {category}
                        </NavLink>
                        {category === 'audio' && <div className="flecha-subcategories" onClick={click}>↳</div>}
                        {show && category === 'audio' && ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman'].map(subCategory =>
                        <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                        {category === 'electrónica' && <div className="flecha-subcategories"  onClick={click2}>↳</div>}
                        {show2 && category === 'electrónica' && ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt'].map(subCategory =>
                        <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                        {category === 'gaming' && <div className="flecha-subcategories"  onClick={click3}>↳</div>}
                        {show3 && category === 'gaming' && ['cartuchos', 'consolas'].map(subCategory =>
                        <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                        {category === 'informática' && <div className="flecha-subcategories"  onClick={click4}>↳</div>}
                        {show4 && category === 'informática' && ['accesorios', 'monitores', 'ordenadores', 'teclados'].map(subCategory =>
                        <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                        {category === 'música' && <div className="flecha-subcategories"  onClick={click5}>↳</div>}
                        {show5 && category === 'música' && ['cintas', 'vinilos'].map(subCategory =>
                        <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                        {category === 'teléfonos' && <div className="flecha-subcategories"  onClick={click6}>↳</div>}
                        {show6 && category === 'teléfonos' && ['fijos', 'moviles'].map(subCategory =>
                        <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                        {category === 'imagen' && <div className="flecha-subcategories"  onClick={click7}>↳</div>}
                        {show7 && category === 'imagen' && ['camaraFotos', 'camaraVideo', 'televisores'].map(subCategory =>
                        <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>)}
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default Aside