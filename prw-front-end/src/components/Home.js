import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import WeatherAPI from './WeatherAPI'
import CapitalsQuiz from './CapitalsQuiz'
import Dictionary from './Dictionary'

const Home = () => {

    const randomComponent = () => {
        const randomNum = Math.floor(Math.random() * 3)
        switch(0) {
            case 0:
                return <WeatherAPI />
            case 1:
                return <CapitalsQuiz />
            case 2:
                return <Dictionary />
            default: 
                return <p>Something went wrong</p>
        }
    }

    return (
        <>
        <Row>
            <Col xs={9} className="gutterfix">

                <h3>My Contention</h3>
                <br />
                <h6>tl;dr.</h6>
                <p><em>I’m a web developer who believes that the majority of software problems can be solved 
                through the adaptation of existing solutions. I contend that a modern developer’s skill is to be 
                found in their ability to quickly assess what the problem is and what preexisting codebases 
                can be used to quickly produce results.</em></p>
                <br />
                <p> Hello again and welcome to my sandbox, Paul Reinvents Wheels. Why the name you may ask? 
                Well, I’m a software developer focused on web technologies, and I would make the case that 
                software development in the modern age is often about taking previously conceived of solutions 
                and adapting them for new problems; hence, reinventing wheels.</p>
                <p>It’s also true that this space is meant to be a place to showcase some of my development efforts, 
                which, to be honest, are almost always contrived to display an ability through the development of 
                something that probably already exists; hence, reinventing wheels.</p>
                <p>I might add that this analysis is underpinned by the idea that all software development is really
                just problem solving. The question outstanding is how to define the problem and then determining 
                what solution best solves the problem statement while taking into consideration the variables that 
                may parameterize the solution e.g. scalability, longevity, and upfront technical know-how.</p>
                <p>Lately, I’ve been focused on developing solutions with React in concert with Express and MongoDB. 
                I’ve seen this stack referred to as MERN, but I’m honestly not sure how frequently that term is 
                thrown around. That said, in my time as a developer I’ve also worked on stacks that operated around 
                the likes of Wordpress and Drupal i.e. LAMP. Whatever the technology is, I know myself to be a quick 
                study and take a holistic approach to understanding project development, which is to say that there 
                are many commonalities across languages and frameworks, and I seek to take advantage of these commonalities 
                for the purpose of rapidly building solutions.</p>
            </Col>
            <Col className="gutterfix">
            <h5>Pandora's sidebar:</h5>
            {randomComponent()}
            </Col>
        </Row>
        </>
    )
}

export default Home