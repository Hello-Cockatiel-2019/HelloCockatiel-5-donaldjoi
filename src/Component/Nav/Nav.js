import React, { useState } from 'react';
import { css } from 'styled-components';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

<<<<<<< HEAD
const Navbar= (props) => {
  return(<div>
    <header className="Navbar">
      <nav className="Navbar_Nav">
      <div></div>
      <div className="Navlogo"><a href="/">logo</a></div>
      <div className="NavItem">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/">ABOUT</a></li>
        </ul>
      </div>
      </nav>
    </header>
  </div>)
};
=======
const navstlye = css`
padding-right:200px;
`
>>>>>>> 6f751eba9af7f121fa28d13e1bb07e4571d57b65

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <Navbar expand="xl">
                <NavbarBrand href="/" ><img className="img-fluid" src="/images/picture/smalllogo.png" width="75px" height="50px" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav  navbar>
                        <NavItem >
                            <NavLink className="text-muted ml-4" href="/components">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ABOUT </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">GENDER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">CATEGORY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">OTHER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">CONTACT US</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default Example;