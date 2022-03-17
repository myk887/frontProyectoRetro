
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

let subCategoriesBack = []

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function SubCategories () {
    const [show, setShow] = useState(false)
    const { category } = useParams()
    if (category === 'audio') subCategoriesBack = ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman']
    if (category === 'electronica') subCategoriesBack = ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt']
    if (category === 'gaming') subCategoriesBack = ['cartuchos', 'consolas']
    if (category === 'informatica') subCategoriesBack = ['accesorios', 'monitores', 'ordenadores', 'teclados']
    if (category === 'musica') subCategoriesBack = ['cintas', 'vinilos']
    if (category === 'telefonos') subCategoriesBack = ['fijos', 'moviles']
    if (category === 'imagen') subCategoriesBack = ['camaraFotos', 'camaraVideo', 'televisores']

    return (
            // !show ?
            // <button className="buttonShow" onClick={() => setShow(!show)}>
            //     ☰
            // </button>
            // :
            // <div className="secondAside">
            //     <button className="buttonShow" onClick={() => setShow(!show)}>
            //         ☰
            //     </button>
            //     <ul>
            //         {subCategoriesBack.map(subCategory =>
            //             <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>
            //             )}
            //     </ul>
            // </div>
            <h1>
                {category}
            </h1>
    )
}

export default SubCategories