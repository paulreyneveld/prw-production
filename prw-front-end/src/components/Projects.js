import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import groceryImage from '../images/grocery-app-screen.png'
import quizAppImage from '../images/quiz-app-screen.png'
import coursesAppImage from '../images/courses-app-screen.png'
import wheelerImage from '../images/wheeler-screen.png'

const Projects = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    
    const style = {
        color: 'blue',
        cursor: 'pointer'
    }

    return (
        <>
        <p>Disclaimer: Please allow a few moments for individual projects to load. </p>
        <Row>
        <Col className="gutterfix">
                <span style={style} onClick={() => openInNewTab('https://thproj10api.herokuapp.com/')}><Image style={{paddingBottom: 10}} src={coursesAppImage} /></span>
                <p>This project was the culmination of my  Treehouse Techdegree experience. It consists of a frontend 
                running React with state management through the Context API and a backend via Express. It is a fully functional course management tool. <br/>
                <br />
                For demo purposes, the database is Sqlite with Sequelize functioning
                as an ORM. One may feel free to create a new user account for testing purposes or use the credentials below. 
                </p>
                <p>
                    Username: joe@smith.com
                    <br />
                    Password: joepassword
                </p>
                <p><span style={style} onClick={() => openInNewTab('https://github.com/paulreyneveld/THProj10')}>Repo</span></p>
        </Col>
        <Col>
        <span style={style} onClick={() => openInNewTab('https://immense-lowlands-07888.herokuapp.com/')}><Image style={{paddingBottom: 10}} src={groceryImage} /></span>
                <p>This is a clone of a grocery list app that I put together to synchronize the the needs of myself and my partner. 
                It's running with a React frontend. State management is through the Hooks API, and data persistence is handled through 
                MongoDB</p>
                <p><span style={style} onClick={() => openInNewTab('https://github.com/paulreyneveld/grocer/tree/main/grocer-heroku-deployment')}>Repo</span></p>
        </Col>
        <Col>
            <span style={style} onClick={() => openInNewTab('https://paulreyneveld.github.io/THProj4/')}><Image style={{paddingBottom: 10}} src={quizAppImage} /></span>
            <p>This was my fourth Treehouse project, and I include it because I like games. The object is to guess the pre-seeded phrase
            before the user runs out of chances. It's written in vanilla JS without the help of any frontend library.</p>
            <p><span style={style} onClick={() => openInNewTab('https://github.com/paulreyneveld/THProj4')}>Repo</span></p>
        </Col>
        </Row>
        <Row>
        <Col className="gutterfix">
        <span style={style} onClick={() => openInNewTab('http://www.wheelerswcd.org/')}><Image style={{paddingBottom: 10}} src={wheelerImage} /></span>
        <p>This is a very old project and was put together cerca 2009. I can't say that I stand by the code at this point as I doubt
        the Drupal install that it's running on has been updated since it was put together in the first place. The project was built on a LAMP
        stack in concert with a former colleague. Given its age, I unfortunately don't have a git repo associated with it.</p>
        </Col>
        <Col></Col>
        <Col></Col>
        </Row>
        </>
    )
}

export default Projects