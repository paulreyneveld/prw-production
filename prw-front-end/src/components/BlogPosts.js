import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BlogPosts = () => {

    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/blogs')
            .then(response => {
                console.log(response.data)
                setBlogPosts(response.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        <h1>Testing</h1>
        {blogPosts.map(post => 
        <div key={post._id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        </div>
        )}
        </>
    )
}

export default BlogPosts