import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Header.css'


const useFetch = ({ search = ''}) => {
    const { subcategory } = useParams()
    const [data, setData] = useState('')
    useEffect(() => {
    fetch(`http://localhost:3000/articles/subcategory?subcategory=${subcategory.toLowerCase()}&search=${search}`)
        .then(v => {
            let data
            if (v.ok) data = v.json()
           return data
        })
        .then(v => setData(v))
    },[subcategory, search])
    return data
}

function SearchCategory({setSearch}) {
    const [search, setSearchFor] = useState('')

    const data = useFetch({search})
    setSearch(data)

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="search">
                <input value={search} name="username" onChange={(e)=>setSearchFor(e.target.value)} placeholder='🔍 Busca en Retros.com'/>
            </label>
        </form>
    )
}

export default SearchCategory