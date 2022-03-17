
import { NavLink, useParams } from "react-router-dom";

let subCategoriesBack = []

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function SubCategories () {
    const { subcategory } = useParams()

    if (subcategory === 'altavoces') subCategoriesBack = 'altavoces'
    if (subcategory === 'mp3') subCategoriesBack = 'mp3'
    if (subcategory === 'radios') subCategoriesBack = 'radios'
    if (subcategory === 'tocadiscos') subCategoriesBack = 'tocadiscos'
    if (subcategory === 'walkman') subCategoriesBack = 'walkman'
    if (subcategory === 'cables') subCategoriesBack = 'cables'
    if (subcategory === 'despertadores') subCategoriesBack = 'despertadores'
    if (subcategory === 'gps') subCategoriesBack = 'gps'
    if (subcategory === 'libroselectronicos') subCategoriesBack = 'libros Electrónicos'
    if (subcategory === 'maquinasescribir') subCategoriesBack = 'maquinas Escribir'
    if (subcategory === 'tdt') subCategoriesBack = 'tdt'
    if (subcategory === 'cartuchos') subCategoriesBack = 'cartuchos'
    if (subcategory === 'consolas') subCategoriesBack = 'consolas'
    if (subcategory === 'accesorios') subCategoriesBack = 'accesorios'
    if (subcategory === 'monitores') subCategoriesBack = 'monitores'
    if (subcategory === 'ordenadores') subCategoriesBack =  'ordenadores'
    if (subcategory === 'teclados') subCategoriesBack = 'teclados'
    if (subcategory === 'cintas') subCategoriesBack = 'cintas'
    if (subcategory === 'vinilos') subCategoriesBack = 'vinilos'
    if (subcategory === 'fijos') subCategoriesBack = 'fijos'
    if (subcategory === 'moviles') subCategoriesBack = 'moviles'
    if (subcategory === 'camarafotos') subCategoriesBack = 'cámara Fotos'
    if (subcategory === 'camaravideo') subCategoriesBack = 'cámara Video'
    if (subcategory === 'televisores') subCategoriesBack =  'televisores'

    return (
        // <ul>
        //     {subCategoriesBack.map(subCategory =>
        //         <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>
        //         )}
        // </ul>
        <h1>
            {subCategoriesBack}
        </h1>
    )
}

export default SubCategories