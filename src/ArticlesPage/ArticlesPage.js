import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
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

function ArticlesPage() {
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
        <main>
        { (!data || !name) ?

        <div className='reloj-loading'></div>
        :
        [data]?.map(article =>

        <div key={article.id} className='product-article'>

            <div className='photo-container'>
                <img className='articles-page-photo' src={`http://localhost:3000${article.photo.replace('./', '/')}`} alt={article.name}/>
            </div>

            <div className='content-article'>

                <h1 className='title-artpage'>{article.name}</h1>

                <h2 className='price-artpage'>{article.price} €</h2>

                <div className="description-artpage">
                    <span className="description-title">Descripción artículo:</span>
                        {/* <h1 className="interline"></h1> */}
                        <br/>
                        <br/>
                    <span className="description-content" >{article.description}</span>
                </div>

                <div className="puntuacion">
                        <span>Reputación del vendedor: </span> <br/><br/>
                        <span>{name && name[0].username}</span>
                        <span> {'★★★★★☆☆☆☆☆'.substring(5 - article.userAverageVotes, 10 - article.userAverageVotes)}</span>
                </div>

                <div className="place-artpage">
                    Ubicación: <br/>
                    <span className="place-artpage-flag">⚑  </span>
                    <span> {name && name[0].location.charAt(0).toUpperCase() + name[0].location.slice(1)}</span>,
                    <span> {name && name[0].province.charAt(0).toUpperCase() + name[0].province.slice(1)}</span>
                </div>

                <div className="buttons-artpage">

                    {datos ? (article.idUser === datos[0].id ?
                    <div className="is-my-article">
                        <span class="is-my-article-content">Este artículo es tuyo</span>
                    </div>
                    :
                    <button type='button' className='buy-article-button'><a href='/user/actividad' onClick={() => handleClick({id:article.id, idUser:article.idUser})}>Comprar artículo</a></button>)
                    :
                    <button type='button' className='user-not-registered-button'><a href='/user/registre'>Registrarse</a></button>}

                </div>

                <div class="casita-artpage">
                    <a class="casita" title="Página principal" href="/"><span>⌂ </span>Volver a Home</a>
                </div>

            </div>

        </div>)
        }
    </main>
    )
}

export default ArticlesPage