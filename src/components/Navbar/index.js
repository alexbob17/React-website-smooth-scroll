import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from  './NavbarElements';


const Navbar = () => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                <NavLogo to= '/'>ALEJO BANK</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="singup">Sing Up</NavLinks>
                    </NavItem>
                </NavMenu>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar;
