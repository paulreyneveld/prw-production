import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [confirmation, setConfirmation] = useState(false)

    const handleName = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handleMessage = (event) => {
        event.preventDefault()
        setMessage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const payload = {
            name,
            email,
            message
        }

        axios.post('http://localhost:3001/contact', payload)
            .then(response => {
                setName('')
                setEmail('')
                setMessage('')
                console.log(response)
                if (response.data === 'Success') {
                    setConfirmation(true)
                    console.log(confirmation)
                }
                else {
                    setConfirmation(false)
                }
                console.log(confirmation)
            })
            .catch(error => console.log(error))
    }
    console.log(confirmation)

    const messageSent = () => {
        if (confirmation) {
            setTimeout(() => setConfirmation(false), 3500)
            return (<p>Message sent!</p>)
        }
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
        <br />
        {messageSent()}
        </>
    )
}

export default Contact