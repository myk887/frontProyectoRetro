import { NavLink } from "react-router-dom";

const categoriesBack = ['Audio', 'Electronica', 'Gaming', 'Imagen', 'Informatica', 'Musica', 'Telefonos']

function AsideArticle() {

    return (
        <ul>
            <li><NavLink to={`/`}>Home</NavLink></li>
            {categoriesBack.map(category =>
                <li key={category}><NavLink to={`/article/byCategory/${category.toLowerCase()}`}>{category}</NavLink></li>
                )}
        </ul>
    )
}

export default AsideArticle