import React from 'react';
import {Link} from 'react-router-dom'
import {
    NavbarSection ,
    Logo ,
    LogoText ,
    Ulist ,
    ListItem ,
    Anchor
     } from './style.js'

const Navbar =() => {

    return (

        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText className="logo-text">Ultra Profile</LogoText>
                </Logo>
          
                <Ulist>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><Link to="/">Contact</Link></ListItem>
                </Ulist>

               </div>


            </NavbarSection>
    )
}

export default Navbar;
