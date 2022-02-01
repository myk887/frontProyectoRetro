const notFound = [
    {
        "id": Math.random(),
        "name": "Producto no encontrado",
        "price": "",
        "description": "Prueba con otro nombre",
        "photo": "https://previews.123rf.com/images/trueffelpix/trueffelpix1605/trueffelpix160500018/58037157-vector-ilustraci%C3%B3n-de-la-p%C3%A1gina-de-error-no-encontrado.jpg",
        "idUser": Math.random,
        "buyerId": null,
        "createdAt": "2022-01-04T23:00:00.000Z",
        "modifiedAt": null
    }
]

function NotFound() {
    return (
        notFound.map(product =>
            <div key={product.id} className='product'>
                <img src={product.photo} alt={product.name} className='photo'/>
                <div className='content'>
                    <h1>{product.name}</h1>
                    <div className='description'>
                        <p>{product.description}</p> <span>{product.price}</span>
                    </div>
                </div>
            </div>)
    )
}
export default NotFound