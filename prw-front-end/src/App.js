import React, { useEffect, useState } from 'react'
import axios from 'axios'
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

    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios(
            'https://restcountries.eu/rest/v2/all',
          );
          return setCountryData(data);
        };
     
        fetchData();
      }, []);

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
        </Route>
    </Switch>
    </Router>
    </Container>
    );
    
}

export default App;
