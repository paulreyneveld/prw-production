import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleName = (event) => {
        event.preventDefault()
        setName(event.target.value)
        console.log(name)
    }

    const handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
        console.log(email)
    }

    const handleMessage = (event) => {
        event.preventDefault()
        setMessage(event.target.value)
        console.log(message)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('hello')
        const payload = {
            name,
            email,
            message
        }
        axios.post('http://localhost:3001/contact', payload)
            .then(response => {
                console.log(response)
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch(error => console.log(error))
    }

    return (
        <>
        <p>Please feel free to contact me directly through the following form. Alternately, my contact
        information is available via my <a href={process.env.PUBLIC_URL + '/resume.pdf'}>Resume</a>.</p>

        <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    value={name}
                    className="form-control"
                    onChange={handleName}
                     />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                    type="email" 
                    value={email}
                    className="form-control" 
                    aria-describedby="emailHelp"
                    onChange={handleEmail}
                     />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                    className="form-control" 
                    rows="5"
                    value={message}
                    onChange={handleMessage}
                    >

                </textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>



        </>
    )
}

export default Contact