import Loading from "./Loading";
import './Category/Products.css';

const notFound = [
    {
        "id": Math.random(),
        "name": "Producto no encontrado",
        "price": "",
        "description": "Prueba con otro dato",
        "photo": "https://previews.123rf.com/images/trueffelpix/trueffelpix1605/trueffelpix160500018/58037157-vector-ilustraci%C3%B3n-de-la-p%C3%A1gina-de-error-no-encontrado.jpg",
        "idUser": Math.random,
        "buyerId": null,
        "createdAt": "2022-01-04T23:00:00.000Z",
        "modifiedAt": null
    }
]

function NotFound() {
    return (
        <div className="notFound">
            <Loading/>
            {notFound.map(product =>
                <div key={product.id} className='products-item-card'>
                    <img src={product.photo} alt={product.name} className='products-item-photo'/>
                    <div className='products-card-info'>
                        <h1 className="products-name">{product.name}</h1>
                        <div className='products-item-description'>
                            <p className="products-description-text">{product.description}</p>
                            <span className="products-description-price">{product.price}</span>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
export default NotFound