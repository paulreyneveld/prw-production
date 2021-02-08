import React from 'react'

const Contact = () => {

    const handleSubmit = () => {
        console.log('hello')
    }
    return (
        <>
        <p>Please feel free to contact me directly through the following form. Alternately, my contact
        information is available via my <a href={process.env.PUBLIC_URL + '/resume.pdf'}>Resume</a>.</p>


        <form id="contact-form" onSubmit={handleSubmit()} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>



        </>
    )
}

export default Contact