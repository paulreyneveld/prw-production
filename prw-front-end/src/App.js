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
        <Route exact path ="/">
            <Header />
            <Home />
            <Footer />
        </Route>
        <Route path="/about">
            <Header />
            <About />
            <Footer />
        </Route>
        <Route path="/projects">
            <Header />
            <Projects />
            <Footer />
        </Route>

        <Route path="/resources">
            <Header />
            <Resources />
            <Footer />
        </Route>
        <Route path="/contact">
            <Contact />
            <Header />
            <Footer />
        </Route>
    </Switch>
    </Router>
    </Container>
    );
    
}

export default App;
