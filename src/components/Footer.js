import React from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { FacebookLike, FacebookIcon } from './Facebook';
import Spacer from './Spacer';

const Footer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
min-height: 200px;
color: ${props => props.theme.fgLight};
background-color: ${props => props.theme.footer};
text-align: center;
padding: 0 0 60px 0;

& div > span, iframe div {
    width: 100% !important;
}
`;

const Nav = styled.nav`
position: relative;
display: flex;
flex-direction: column;
`;

const Ul = styled.ul`
text-align: center;
width: 100%;
& li:last-child {
    border-bottom: none !important;
}
`;

const Li = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
list-style: none;
height: 46px;
border-bottom: 1px solid rgb(234, 234, 234);

& .fb-like {
    height: min-content !important;
    & iframe, div {
        height: min-content !important;
    }
    & span {
        display: flex;
        justify-content: center;
        color: ${props => props.theme.fgLight} !important;
    } 
}

& a {
    font-family: "Noto Sans", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.fgLight};
    width: 100%;
    height: 100%;
    padding: 0 20px;

    $ img {
        height: min-content;
    }
}

& a:hover {
    color: ${props => props.theme.accent};
}
`;

const Accent = styled.span`
color: ${props => props.theme.accent};
`;

function FooterNav() {
    const date = new Date();
    return (
        <Footer>
            <Spacer height="-60" />
            <iframe title="Google Maps: Bluff, Durban" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110661.29350238544!2d30.938281645171337!3d-29.917139512271557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a94db5f1c88f%3A0xd07df68fcecef85a!2sBluff%2C%204052!5e0!3m2!1sen!2sza!4v1636447660960!5m2!1sen!2sza" width="100%" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"></iframe>
            <Spacer height="60" />
            <Nav>
                <Ul>
                    <Li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/repair-services">
                            Repair Services
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/web-design">
                            Web Design
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/about-us">
                            About Us
                        </NavLink>
                    </Li>
                    <Li>
                        <FacebookLike />
                    </Li>
                    <Li>
                        <FacebookIcon />
                    </Li>
                </Ul>
            </Nav>
            <Spacer height="60" />
            <span>Copyright &copy; <time>{date.getFullYear()}</time>. All Rights Reserved. <br /><Accent>Martins Computer Repairs</Accent></span>
        </Footer>

    );
}

export default FooterNav;