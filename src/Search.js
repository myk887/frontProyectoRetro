import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Header.css'


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
            <label className="search">
                <input value={search} name="username" onClick={handleClick} onChange={(e)=>setSearchFor(e.target.value)} placeholder='🔍 Busca en RetroWeb.com'/>
            </label>
            
        </form>
    )
}

export default Search