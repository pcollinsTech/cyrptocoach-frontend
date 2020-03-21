import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

import SideNav from "./SideNav";

class NavBar extends Component {
  componentDidMount() {
    let elem = document.getElementById("navbar");
    if (this.props.router.location.pathname === "/") {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elem.classList.add("is-sticky");
        } else {
          elem.classList.remove("is-sticky");
        }
      });
      let scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });
      };
      this.setState({ scrollWithOffset });
    } else {
      elem.classList.add("is-sticky");
    }
  }

  closeNavbar() {
    if (window.matchMedia("screen and (max-width: 991px)").matches) {
      document.getElementById("collaspe-btn").click();
    }
  }
  render() {
    return (
      <div className='nav-wrapper'>
        <Navbar sticky='top' id='navbar' expand='lg' className='navbar navbar-expand-lg ' collapseOnSelect={true}>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Link to='/' className='nav-link' onClick={this.closeNavbar}>
                Home
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='/get-started' offset={-70} duration={800} className='nav-link' onClick={this.closeNavbar}>
                Getting Started
              </Link>
            </Nav.Item>
            {/* <NavDropdown title="Academy" id="basic-nav-dropdown">
                                    <NavDropdown.Item>
                                    <Link to="/what-is-bitcoin">What is Bitcoin?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/what-is-ethereum">What is Ethereum?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/what-is-cryptocurrency">What is CryptoCurrency?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/what-is-a-wallet">What is a Wallet?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/what-is-a-blockchain">What is a Blockchain?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/what-is-money">What is Money?</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/what-is-an-altcoin">What is an Altcoin</Link>
                                    </NavDropdown.Item>
                                </NavDropdown> */}

            <Nav.Item>
              <Link to='/exchange-finder' offset={-70} duration={800} className='nav-link' onClick={this.closeNavbar}>
                Exchange Finder
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='/blog' className='nav-link' onClick={this.closeNavbar}>
                Blog
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='about' className='nav-link' onClick={this.closeNavbar}>
                About Us
              </Link>
            </Nav.Item>
          </Nav>
          <Navbar.Brand>
            <Link to='/'>
              <span>C</span>ryto<span>C</span>oach
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Item>
              {/* SideNav: src/components/SideNav */}
              <SideNav />
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
