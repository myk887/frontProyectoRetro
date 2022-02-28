import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Header.css'


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
            <label className="search">
                <input value={search} name="username" onChange={(e)=>setSearchFor(e.target.value)} placeholder='🔍 Buscar'/>
                <button className='find'>Encontar</button>
            </label>
            
        </form>
    )
}

export default SearchCategory