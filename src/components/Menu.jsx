import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import routesConfig from "../routesConfig";
import ImgMenu from '../assets/images/code.svg'

class Menu extends Component {

    render() {
        return (
          <div>
            <Navbar className="menu" expand="lg">
              <Navbar.Brand href="#home">
                <Link className="menu-link" to="/">
                    <img className="logo-menu ml-3" src={ImgMenu} alt="" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-3">
                  {/* <div className="ml-5">
                            <Link className="menu-link" to="/">Home</Link>
                        </div> */}
                  <div className="ml-5">
                    <Link className="menu-link" to="/api-cep">
                      API CEP
                    </Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            {routesConfig.map((value, key) => {
              return (
                <Route
                  key={key}
                  path={value.path}
                  component={value.component}
                  exact={value.exact}
                ></Route>
              );
            })}
          </div>
        );
    }
}

export default Menu