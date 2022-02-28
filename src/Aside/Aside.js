import { NavLink } from "react-router-dom";
import './Aside.css'

const categoriesBack = ['audio', 'electrónica', 'gaming', 'imagen', 'informática', 'música', 'teléfonos']

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function Aside () {

    return (
        <div className="aside">
            <ul>
                <li><NavLink to={`/`}>Home</NavLink></li>
                <li><NavLink to={`/todos`}>Todos</NavLink></li>
                {categoriesBack.map(category =>
                    <li key={category}><NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`}>{category}</NavLink></li>
                    )}
            </ul>
        </div>
    )
}

export default Aside