import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './App.css';
//Import Components
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { render } from '@testing-library/react';

function App() {

    return(
      <Navigation />
    )
}

export default App;
