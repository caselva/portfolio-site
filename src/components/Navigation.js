import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav, Collapse } from 'reactstrap';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import '../App.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      title: 'Carlos Selva',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ]
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar color="transparent" light expand="md">
            <NavbarBrand>Carlos Selva</NavbarBrand>
            <NavbarToggler aria-controls="navbar-toggle" onClick={() => this.toggle()} />
              <Collapse isOpen={this.state.collapse} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </Container>
      </Router>
    );
  }
}

export default Navigation;