import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const style = {
        color: 'blue',
        cursor: 'pointer'
    }

    return (
        <Row>
        <Col xs={9} className="gutterfix">

            <h3>About, or how I came to be a developer</h3>
            <br />
            <p> Hello again! By now you know that I’m a web developer, but I guess you’re curious how I came to be one. 
            How nice! Well, I’ve been code adjacent for most of my life. As a young kid in the mid 90s, I started messing with 
            HTML via computers at the local library to build sites on the likes of Geocities (shout out to those who 
            remember that platform), but my first real programming experience began in high school with C++, 
            though the knowledge I gathered was primarily used in the pursuit of self-made
            <span style={style} onClick={() => openInNewTab('https://en.wikipedia.org/wiki/MUD')}> MUDs </span>
             that consisted of jokes about my friends' last names. 
            What can I say, I was fifteen.</p>

            <p>After high school, I got a certification in Unix system administration along side of an associate degree, 
            which included experience shell scripting and some basic .NET work. After completing my certification I moved 
            out to the West Coast from the Midwest and realized that I wanted to get involved with web development; using 
            what I’d already learned as a springboard, I decided to flesh out my understanding of the LAMP stack and 
            refreshed myself on HTML/CSS. I ultimately found a position subcontracting for a local company where I primarily
            worked to bring static sites into CMSes like Drupal and Wordpress. Ultimately, I left the field to return to 
            school, at the time thinking that I wanted to pursue an academic career in physics. While working to that end, 
            I spent some time working with Python to solve computational problems relevant to my studies. </p>

            <p>After a couple of years pursuing a B.S. in physics, I got a better understanding of a what a post-graduate 
            career in  academia entailed and found myself disillusioned. I took a break from school. While on said break, 
            I worked as a bartender, which allowed me a great deal of freedom to travel and consider my next step. </p>

            <p>After a couple of years off, I decided I would return to university and pursue a degree in electrical engineering
             (there was fortunately much overlap from my earlier physics coursework). Unfortunately after two years in that 
             program, I came to realize that I wasn’t so much interested in working in that field as I was interested in 
             learning about the fundamentals of computing. This eureka moment left me feeling a touch foolish as it would 
             have behooved me to pursue a degree in computer science degree in the first place, but as the saying goes, 
             you live; you learn. That said, I stuck around to finish my B.S. In my time in the EE department I worked with 
             C, Python and Matlab. Since completing my bachelors degree, I decided to pursue a certificate through a 
             bootcamp, and ultimately completed one geared towards Javascript development via Treehouse. Today, I’m working 
             towards broadening my understanding of all things software by pursuing further education via MOOCs (I love the 
             University of Helsinki), texts like Head First Design Patterns and of course the myriad resources that the Internet 
             provides. </p>

             <p>I see now that I took the long way around as I have returned to web development, but I’ve been fortunate to 
             learn so much in the process that I wouldn’t want this journey to have gone any other way. </p>
        </Col>
        <Col className="gutterfix">
        <h6> Coding Efforts</h6>
        <ul className="sidebar-about-ul">
        <li className="sidebar-about-li"><span style={style} onClick={() => openInNewTab('http://www.github.com/paulreyneveld')}> GitHub </span></li>
        <li className="sidebar-about-li"><span style={style} onClick={() => openInNewTab('http://www.teamtreehouse.com/paulreyneveld')}> Treehouse Profile </span></li>
        <li className="sidebar-about-li"><span style={style} onClick={() => openInNewTab('http://www.freecodecamp.org/paulreyneveld')}> freeCodeAcademy Profile </span></li>
        </ul>
        <h6>Resume</h6>
        <ul className="sidebar-about-ul">
        <li className="sidebar-about-li"><a href={process.env.PUBLIC_URL + '/resume.pdf'}>Resume</a></li>
        </ul>
        </Col>
    </Row>
    )
}

export default About