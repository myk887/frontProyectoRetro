import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const useFetch = ({ search = ''}) => {
    const { category } = useParams()
    const [data, setData] = useState('')
    useEffect(() => {
    fetch(`http://localhost:3000/articles/category?category=${category.toLowerCase()}&search=${search}`)
        .then(v => {
            let data
            if (v.ok) data = v.json()
           return data
        })
        .then(v => setData(v))
    },[category, search])
    return data
}

function SearchCategory({setSearch, category}) {
    const [search, setSearchFor] = useState('')

    const data = useFetch({category, search})
    setSearch(data)

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input value={search} name="username" onChange={(e)=>setSearchFor(e.target.value)} placeholder='🔍 Buscar'/>
            </label>
            <button>Encontar</button>
        </form>
    )
}

export default SearchCategory