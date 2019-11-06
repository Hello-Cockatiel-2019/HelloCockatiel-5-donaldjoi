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

const navstlye = css`
padding-right:200px;
`

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            <Navbar color="dark" dark expand="md" sticky="top">
                <NavbarBrand href="/" ><img className="img-fluid" src="/images/smalllogo.png" width="75px" height="50px" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav  navbar>
                        <NavItem >
                            <NavLink href="#Background">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#About">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Category">Category</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Gender">Gender</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#Other">Other</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default Example;