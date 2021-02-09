import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './custom.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Resources from './components/Resources'
import Contact from './components/Contact'

const App = () => {

    return (
    <Container>
    <Router>
    <Switch>
        <Route exact path ="/" render={(props) => 
        <>
            <Header {...props} />
            <Home />
            <Footer />
        </>
        } />
        <Route exact path ="/about" render={(props) => 
        <>
            <Header {...props} />
            <About />
            <Footer />
        </>
        } />
        <Route exact path ="/projects" render={(props) => 
        <>
            <Header {...props} />
            <Projects />
            <Footer />
        </>
        } />
        <Route exact path ="/resources" render={(props) => 
        <>
            <Header {...props} />
            <Resources />
            <Footer />
        </>
        } />
        <Route exact path ="/contact" render={(props) => 
        <>
            <Header {...props} />
            <Contact />
            <Footer />
        </>
        } />
    </Switch>
    </Router>
    </Container>
    );
    
}

export default App;
