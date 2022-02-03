
import { NavLink, useParams } from "react-router-dom";

let subCategoriesBack = []

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function SubCategories () {
    const { subcategory } = useParams()

    if (subcategory === 'altavoces') subCategoriesBack = ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman']
    if (subcategory === 'mp3') subCategoriesBack = ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman']
    if (subcategory === 'radios') subCategoriesBack = ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman']
    if (subcategory === 'tocadiscos') subCategoriesBack = ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman']
    if (subcategory === 'walkman') subCategoriesBack = ['altavoces', 'mp3', 'radios', 'tocadiscos', 'walkman']
    if (subcategory === 'cables') subCategoriesBack = ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt']
    if (subcategory === 'despertadores') subCategoriesBack = ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt']
    if (subcategory === 'gps') subCategoriesBack = ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt']
    if (subcategory === 'librosElectronicos') subCategoriesBack = ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt']
    if (subcategory === 'maquinasEscribir') subCategoriesBack = ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt']
    if (subcategory === 'tdt') subCategoriesBack = ['cables', 'despertadores', 'gps', 'librosElectronicos', 'maquinasEscribir', 'tdt']
    if (subcategory === 'cartuchos') subCategoriesBack = ['cartuchos', 'consolas']
    if (subcategory === 'consolas') subCategoriesBack = ['cartuchos', 'consolas']
    if (subcategory === 'accesorios') subCategoriesBack = ['accesorios', 'monitores', 'ordenadores', 'teclados']
    if (subcategory === 'monitores') subCategoriesBack = ['accesorios', 'monitores', 'ordenadores', 'teclados']
    if (subcategory === 'ordenadores') subCategoriesBack = ['accesorios', 'monitores', 'ordenadores', 'teclados']
    if (subcategory === 'teclados') subCategoriesBack = ['accesorios', 'monitores', 'ordenadores', 'teclados']
    if (subcategory === 'cintas') subCategoriesBack = ['cintas', 'vinilos']
    if (subcategory === 'vinilos') subCategoriesBack = ['cintas', 'vinilos']
    if (subcategory === 'fijos') subCategoriesBack = ['fijos', 'moviles']
    if (subcategory === 'moviles') subCategoriesBack = ['fijos', 'moviles']
    if (subcategory === 'camaraFotos') subCategoriesBack = ['camaraFotos', 'camaraVideo', 'televisores']
    if (subcategory === 'camaraVideo') subCategoriesBack = ['camaraFotos', 'camaraVideo', 'televisores']
    if (subcategory === 'televisores') subCategoriesBack = ['camaraFotos', 'camaraVideo', 'televisores']

    return (
        <ul>
            {subCategoriesBack.map(subCategory =>
                <li key={subCategory}><NavLink to={`/article/bySubCategory/${removeAccents(subCategory.toLocaleLowerCase())}`}>{subCategory}</NavLink></li>
                )}
        </ul>
    )
}

export default SubCategories