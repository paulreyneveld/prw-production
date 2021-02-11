import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'


const Dictionary = () => {

    // Merriam API KEY
    // const WEBSTERS_API_KEY = process.env.REACT_APP_WEBSTERS_API_KEY
    
    const [searchTerm, setSearchTerm] = useState('')
    const [definition, setDefinition] = useState([])

    // const API_URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=${WEBSTERS_API_KEY}`
    
    const queryAPI = (event) => {
        event.preventDefault()
        axios.get('http://localhost:3001/dictionaryapi', { params: {
            search: searchTerm
        }})
            .then(response => {
                setDefinition(response.data)
            })
            .catch(error => console.log(error))

    }

    const displayDefinition = () => {
        if (definition && definition.length > 1) {
            return (
                definition.map((entry, index) => <li key={index}>{entry}</li>)
            )
        }
        if (definition && definition.length === 1) {
            return (<li>{definition}</li>)
        }
        if (!definition) {
            return (<p>No definition found.</p>)
        }
        return (<p>Search for a word. . . .</p>)
    }

    return (
        <>
        <form onSubmit={queryAPI}>
            <label>Search definition:</label>
            <p>(courtesy of Merriam-Webster dictionary API)</p>
            <br />
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} style={{marginRight: 5}} />
            <Button variant="outline-secondary">Submit</Button>
        </form>
        {displayDefinition()}
        </>
    )
}

export default Dictionary