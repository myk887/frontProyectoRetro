import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import AsideArticle from './AsideArticle'
import './ArticlesPage.css'
import { useSelector } from 'react-redux'

const useGet = ({id}) => {
    const [product, setProduct] = useState('')
    const [user, setUser] = useState('')
    useEffect(() => {
    fetch('http://localhost:3000/articles/' + id)
        .then(v => {
            let data
            if (v.ok) data = v.json()
           return data
        })
        .then(v => {
            setProduct(v)
            return (fetch('http://localhost:3000/users/name/' + v.idUser)
            .then(v => {
                let data
                if (v.ok) data = v.json()
               return data
            })).then(v => setUser(v))
        })
    },[id])
    return {product, user}
}

function PaginaArticuloId() {
    const [data, setData] = useState(null)
    const [name, setName] = useState(null)
    const navigate = useNavigate()
    const datos = useSelector(d => d.userDatos)
    const userToken = useSelector(s => s.user)
    const { id } = useParams()
    const {product,user} = useGet({id})
    useEffect(() => {
        if (product) setData(product)
        if (user) setName(user)
    },[product, user])

    const handleClick = async ({id, idUser}) => {
        const res = await fetch('http://localhost:3000/trading/userBuyer', {
            method: 'POST',
          body: JSON.stringify({"idSeller": idUser, "articleId": id}),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken?.token
          }
        })
        if(res.ok)
        navigate('user/actividad')
    }

    return (
        <div className="ArticlePage">
        <aside className='asideArticle'>
          <AsideArticle />
        </aside>
        <main className='mainArticle'>
            { (!data || !name) ?
            <div className='reloj-loading'></div>
            :
            [data]?.map(article =>
            <div key={article.id} className='productArticle'>
                <div className='containerArticle'>
                    <img src={`http://localhost:3000${article.photo.replace('./', '/')}`} alt={article.name} className='photoArticle'/>
                </div>
                <div className='contentArticle'>
                    <div className="puntuacion">
                        <h1 className='tituloArticle'>{article.name}</h1>
                        <div>
                            <h1>{name && name[0].username}</h1><span>{'★★★★★☆☆☆☆☆'.substring(5 - article.userAverageVotes, 10 - article.userAverageVotes)}</span>
                        </div>
                    </div>
                    <div className='descriptionArticle'>
                        <p>{article.description}</p>
                        <div className='spanButtonArticle'>
                            <div > Precio: {article.price}€ <br/>Lugar de venta: {name && name[0].location}, {name && name[0].province}  </div>
                            {datos ? (article.idUser === datos[0].id ?
                            <span className='tuProducto'>Es tuyo</span>
                            :
                            <button type='button' className='irCompraArticle'><a href='/user/actividad' onClick={() => handleClick({id:article.id, idUser:article.idUser})} className='enlaceArticle'>ir a comprar</a></button>)
                            :
                            <button type='button' className='irCompraArticle'><a href='/user/registre' className='enlaceArticle'>ir a comprar</a></button>}
                        </div>
                    </div>
                </div>
            </div>)
            }
        </main>
      </div>

    )
}

export default PaginaArticuloId