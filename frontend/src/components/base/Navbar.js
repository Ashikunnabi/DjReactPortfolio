import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { Route } from 'react-router-dom';

import { Home, Portfolio, Blog, JsGame, Covid } from '../pages/';

class Navbar extends Component {
    state = {
      isOpen: false
    };

    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
      return (
        <>
          <MDBNavbar color="default-color sticky-top" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Ashikun Nabi</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink exact to="/" activeClassName="navbar_active">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink exact to="/portfolio" activeClassName="navbar_active">Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink exact to="/blog" activeClassName="navbar_active">Blog</MDBNavLink>
                </MDBNavItem>
                {/*<MDBNavItem>
                  <MDBNavLink to="/blog"activeClassName="navbar_active">Blog</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Dropdown</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="twitter" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="google-plus-g" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>*/}
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink exact to="/js-game" activeClassName="navbar_active">Play</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink exact to="/covid" activeClassName="navbar_active">Covid19 Update</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/js-game" component={JsGame} />
          <Route exact path="/covid" component={Covid} />
        </>
        );
      }
}

export default Navbar;