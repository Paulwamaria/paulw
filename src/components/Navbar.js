import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Hobbies from "./Hobbies";

class Mynav extends React.Component {
  render() {
    return (
      <div>
       
            <Router>
              <Navbar variant="dark" expand="lg" className="#9699bb">
                <Navbar.Brand href="/">Paul Wamaria</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/skills">Skills</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/hobbies">Hobbies</Nav.Link>
                  </Nav>
                  <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item">
                      <a
                        href="https://twitter.com/Paulenigmatico"
                        className="nav-link waves-effect waves-light"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.linkedin.com/in/paul-wamaria-73b886189/"
                        className="nav-link waves-effect waves-light"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://github.com/Paulwamaria"
                        className="nav-link waves-effect waves-light"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://bitbucket.org/Paulwamaria/"
                        className="nav-link waves-effect waves-light"
                      >
                        <i className="fab fa-bitbucket"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="mailto:paulwamaria@gmail.com"
                        className="nav-link waves-effect waves-light"
                      >
                        <i class="far fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/skills">
                  <Skills />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/hobbies">
                  <Hobbies />
                </Route>
              </Switch>
            </Router>
       
      </div>
    );
  }
}

export default Mynav;
