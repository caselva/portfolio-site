import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { render } from '@testing-library/react';
import './App.css';

//Import Components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {

    return(
      <Router>
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/about" exact render={() => <About/>} />
        <Route path="/contact" exact render={() => <Contact/>} />
        <div className="third">
          <Navigation />
        </div>
      </Router>
    )
}

export default App;
