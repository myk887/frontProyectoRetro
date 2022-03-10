import { NavLink } from "react-router-dom";
import './Aside.css'

const categoriesBack = ['audio', 'electrónica', 'gaming', 'imagen', 'informática', 'música', 'teléfonos']

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function Aside () {

    return (
        <div className="aside">
                <div className="aside-link"><NavLink to={`/`}>Home</NavLink></div>
                <div className="aside-link"><NavLink to={`/todos`}>Todos</NavLink></div>
                {categoriesBack.map(category =>
                    <div key={category} className="aside-link"><NavLink to={`/article/byCategory/${removeAccents(category.toLocaleLowerCase())}`}>{category}</NavLink></div>
                    )}
        </div>
    )
}

export default Aside