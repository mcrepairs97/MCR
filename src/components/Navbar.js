import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import logo from '../logo.svg';

import { FacebookLike, FacebookIcon } from './Facebook';
import useWindowSize from './utils/useWindowSize';

const Header = styled.header`
position: sticky;
top: 0px;
z-index: 1;
`;

const Hamburger = styled.div`
appearance: button;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.theme.accent};
border-radius: 2px;
cursor: pointer;
padding: 0.5em;
width: 42.5px;
height: 42.5px;
z-index: 3;
`;

const Button = styled.button`
background-color: transparent;
border: none;
display: flex;
align-items: center;
height: min-content;
transition-duration: 200ms;

& svg {
    cursor: pointer;
}

& div {
    display: flex;
    cursor: pointer;
    font-size: 1.8em;
}
`;

const Nav = styled.nav`
position: relative;
display: grid;
grid-template-rows: 1fr;

& > div {
    display: grid;
    grid-template-columns: ${props => props.width < 768 ? "1fr auto" : "auto 60%"};
    align-items: center;
    background-color: ${props => props.theme.bgLight};
    min-height: 70px;
    padding: 0 20px;
    z-index: 2;

    & a {
        height: min-content;
    }
}
`;

const Ul = styled.ul`
display: flex;
flex-direction: ${props => props.desktop ? "row" : "column"};
justify-content: ${props => props.desktop ? "space-evenly" : "start"};
position: ${props => !props.desktop && "absolute"};
width: 100%;
background-color: #fff;
transition-duration: 200ms;
transition-timing-function: ease-in-out;

& li:last-child {
    position: ${props => props.desktop && "absolute"};
    ${props => props.desktop && "bottom: -40px; right: 0;"}
    border-bottom: none !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    text-align: start;
}
`;

const Li = styled.li`
display: grid;
grid-auto-flow: column;
list-style: none;
height: ${props => props.desktop ? "min-content" : "46px"};
border-bottom: ${props => props.desktop ? "none" : "1px solid rgb(234, 234, 234)"};

& a {
    font-family: "Noto Sans", sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.fgDark};
    width: 100%;
    height: 100%;
    padding: 0 ${props => props.desktop ? "0" : "20px"};
}

& a:hover {
    color: ${props => props.theme.accent} !important;
}
`;



function Navbar() {
    const [ isMenuActive, setIsMenuActive ] = React.useState(false);
    const handleNavbar = () => {
        setIsMenuActive(isMenuActive ? false : true);
    };

    const { width } = useWindowSize();

    return (
        <Header>
            <Nav width={width}>
                <div>
                    <NavLink to="/">
                        <img src={logo} alt="logo" width="100px" height="50px" />
                    </NavLink>
                    {width >= 768 ? 
                    (
                        <Ul desktop>
                            <Li desktop>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </Li>
                            <Li desktop>
                                <NavLink to="/repair-services">
                                    Repair Services
                                </NavLink>
                            </Li>
                            <Li desktop>
                                <NavLink to="/web-design">
                                    Web Design
                                </NavLink>
                            </Li>
                            <Li desktop>
                                <NavLink to="/contact">
                                    Contact
                                </NavLink>
                            </Li>
                            <Li desktop>
                                <NavLink to="/about-us">
                                    About Us
                                </NavLink>
                            </Li>
                            <Li desktop facebook>
                                <FacebookIcon />
                                <FacebookLike />
                            </Li>
                        </Ul>
                    ) :
                    (
                        <Hamburger onClick={handleNavbar}>
                            <Button>
                                {isMenuActive 
                                    ? <div>&times;</div> 
                                    : <svg viewBox="0 0 100 60" width="20" height="20">
                                            <rect width="100" height="10" rx="2"></rect>
                                            <rect y="30" width="100" height="10" rx="2"></rect>
                                            <rect y="60" width="100" height="10" rx="2"></rect>
                                        </svg>}
                            </Button>
                        </Hamburger>
                    )}
                </div>
                <Ul className={isMenuActive ? "nav-menu-active" : "nav-menu-inactive"} >
                    <Li>
                        <NavLink to="/" onClick={handleNavbar}>
                            Home
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/repair-services" onClick={handleNavbar}>
                            Repair Services
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/web-design" onClick={handleNavbar}>
                            Web Design
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/contact" onClick={handleNavbar}>
                            Contact
                        </NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/about-us" onClick={handleNavbar}>
                            About Us
                        </NavLink>
                    </Li>
                    <Li>
                        <FacebookIcon />
                        <FacebookLike />
                    </Li>
                </Ul>
            </Nav>
        </Header>
    );
}

export default Navbar;