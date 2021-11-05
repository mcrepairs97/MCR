import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import logo from '../logo.svg';
import theme from '../theme';

const Header = styled.header`
min-height: 2rem;
width: 100vw;
background-color: ${props => props.theme.header};
color: ${props => props.theme.fg}
`;

const Ul = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
`;

const Li = styled.li`
list-style: none;
`;

function Navbar() {
    return (
        <ThemeProvider theme={theme}>
            <Header>
                <nav>
                    <Ul>
                        <Li>
                            <a href="/">
                                <img src={logo} alt="logo" width="100px" height="50px" />
                            </a>
                        </Li>
                        <Li>

                        </Li>
                    </Ul>
                </nav>
            </Header>
        </ThemeProvider>

    );
}

export default Navbar;