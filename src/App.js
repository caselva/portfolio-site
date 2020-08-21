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
import Footer from "./components/Footer";

function App() {

    return(
      <div>
        <Router>
          <Navigation />
          {/* <Home /> */}
          <Footer />
        </Router>
      </div>
    )
}

export default App;
