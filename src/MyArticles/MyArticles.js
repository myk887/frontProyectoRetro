import  useFetch  from "fetch-suspense"
import { Suspense, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Loading from "../Loading"
import './MyArticles.css'

function MyArticles () {
    const user = useSelector(s => s.user)
    const navigate = useNavigate()
    const opts = {}


    useEffect(() => {
        !user && navigate('/')
      }, [user, navigate])

    if (user?.token) {
        opts.headers = { 'Authorization': 'Bearer ' + user.token }
    }

    let misArticulos
    misArticulos = useFetch('http://localhost:3000/articles/onSales', opts)
    if (!user?.token) misArticulos = undefined


    const handleDelete = async ({e, id}) => {
        e.preventDefault()
        const res = await fetch('http://localhost:3000/articles/' + id, {
            method: 'DELETE',
            headers:{Authorization: 'Bearer ' + user?.token}
        })
        if (res.ok) {
            window.location.reload(true);
            alert('ARTICULO BORRADO')
          } else {
            console.log(res)
            alert('UPSS INTENTALO MAS TARDE /' + res.status + '/' + res.statusText)
          }
    }

    return (
        <div className="myArticles">
            <h1>Mis Anuncios</h1>
            <button>Crear Nuevo Anuncio</button>
            {
            !misArticulos ?
            <h1>NO TINES PRODUCTOS EN VENTA, CREA UN NUEVO ANUNCIO</h1>
            :
            misArticulos?.map(articulo =>
                <div key={articulo.id} className="MyArticle">
                    <img className="image" src={`http://localhost:3000${articulo.photo.replace('./', '/')}`} alt={articulo.name} />
                    <h3>{articulo.name}</h3>
                    <div className="textMyArticle">
                        <h4>{articulo.price} euros</h4>
                        <div className="buttonsArticle">
                            <span className="delete" onClick={(e) => handleDelete({e,id: articulo.id})}>Eliminar anuncio</span>
                            {' '}
                            <span className="modify">Modificar anuncio</span>
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}

const MyArticlesWrapper = () =>
  <Suspense fallback={<Loading />}>
    <MyArticles />
  </Suspense>

export default MyArticlesWrapper