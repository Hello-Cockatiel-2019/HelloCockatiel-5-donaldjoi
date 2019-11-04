import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

/*const navstlye = css`
color:white;
`
const navstlyeitem = css`
color:white;
`*/
const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="container-fluid">
            <Navbar color="" dark expand="xl">
                <NavbarBrand href="/"><img src="/logo1.svg" width="200px" height="150px" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className={navstlye} navbar>
                        <NavItem >
                            <NavLink className={navstlyeitem} href="/components/">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">GENDER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">CATEGORY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">OTHER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">CONTACT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><img src="/facebook1.svg" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><img src="/twitter1.svg" /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;