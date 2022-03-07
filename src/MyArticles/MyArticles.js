import  useFetch  from "fetch-suspense"
import { Suspense, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
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
        <div className="myarticles">

            <div className="myarticles-header">
                <h1>Mis Anuncios</h1>

                <button><Link to={'/user/article/create'}>Crear Nuevo Anuncio</Link></button>

                <div class="myarticles-casita">
                    <a class="casita" title="Página principal" href="/"><span>⌂ </span>Volver a Home</a>
                </div>
            </div>

            <div className="myarticles-grid">
                {
                !misArticulos.length ?
                <h1>NO TIENES PRODUCTOS EN VENTA, CREA UN NUEVO ANUNCIO</h1>
                :
                misArticulos?.map(articulo =>

                    <div key={articulo.id} className="myarticles-card">

                        <div className="myarticles-image" style={{backgroundImage: `url(${`http://localhost:3000${articulo.photo.replace('./', '/')}`})`}}></div>

                        <div className="myarticles-info">

                            <h3 className="myarticles-name">{articulo.name}</h3>

                            <h4 className="myarticles-price">{articulo.price} €</h4>

                            <p className="myarticles-description" >{articulo.description}</p>

                            <div clasName="myarticles-card-buttons">

                                <span className="modify myarticles-modify"><Link to={`/user/article/modify/${articulo.id}`}><span>📝</span> Modificar</Link></span>
                                <br/><br/>

                                <span className="delete myarticles-delete" onClick={(e) => handleDelete({e,id: articulo.id})}><span>🗑</span> Eliminar</span>

                            </div>

                        </div>
                    </div>
                    )}
            </div>

        </div>
    )
}

const MyArticlesWrapper = () =>
  <Suspense fallback={<Loading />}>
    <MyArticles />
  </Suspense>

export default MyArticlesWrapper