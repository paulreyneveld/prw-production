import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'


const Dictionary = () => {
    
    const [searchTerm, setSearchTerm] = useState('')
    const [definition, setDefinition] = useState([])
    
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
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} style={{marginRight: 5, marginBottom: 10 }} />
            <Button variant="outline-secondary" type="submit">Submit</Button>
        </form>
        {displayDefinition()}
        </>
    )
}

export default Dictionary