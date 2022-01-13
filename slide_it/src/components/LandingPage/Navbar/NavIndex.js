import React from 'react';
import{Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
       <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Slide It!
                </NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to = "about">About</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "discover">Discover</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "services">Services</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to = "signin">Sign In</NavLinks>
                   </NavItem>
               </NavMenu>

               <NavBtn>
                   <NavBtnLink to = '/signup'> Sign Up</NavBtnLink>
               </NavBtn>
            </NavbarContainer>
        </Nav>
       </>
    );
};

export default Navbar;
