import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const useFetch = (search='') => {
    const [data, setData] = useState('')
    useEffect(() => {
    fetch(`http://localhost:3000/articles?search=${search}`)
        .then(v => {
            let data
            if (v.ok) data = v.json()
           return data
        })
        .then(v => setData(v))
    },[search])
    return data
}

function Search({setSearch}) {
    const [search, setSearchFor] = useState('')
    const navigate = useNavigate()

    let location = useLocation()
    const handleClick = () => {
    if ('/todos' !== location.pathname) navigate('/todos')
    }

    const data = useFetch(search)
    setSearch(data)

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input value={search} name="username" onClick={handleClick} onChange={(e)=>setSearchFor(e.target.value)} placeholder='🔍 Buscar'/>
            </label>
            <button>Encontar</button>
        </form>
    )
}

export default Search