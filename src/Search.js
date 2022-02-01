import { useState, useEffect } from 'react'


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

    const data = useFetch(search)
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

export default Search