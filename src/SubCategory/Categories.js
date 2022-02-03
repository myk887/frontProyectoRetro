
import { NavLink } from "react-router-dom";

const categoriesBack = ['audio', 'electrónica', 'gaming', 'imagen', 'informática', 'música', 'teléfonos']

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function Categories () {

    return (
        <ul>
            <li><NavLink to={`/`}>Todos</NavLink></li>
            {categoriesBack.map(category =>
                <li key={category}><NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`}>{category}</NavLink></li>
                )}
        </ul>
    )
}

export default Categories