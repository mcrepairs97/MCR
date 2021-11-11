import React from 'react';

import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const CTA = styled(NavLink)`
border: none;
background: hsla(123, 100%, 36%, 1);
background: linear-gradient(0deg, hsla(123, 100%, 36%, 1) 0%, hsla(123, 63%, 65%, 1) 100%);
background: -moz-linear-gradient(0deg, hsla(123, 100%, 36%, 1) 0%, hsla(123, 63%, 65%, 1) 100%);
background: -webkit-linear-gradient(0deg, hsla(123, 100%, 36%, 1) 0%, hsla(123, 63%, 65%, 1) 100%);
filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#00B609", endColorstr="#6DDE72", GradientType=1 );
color: ${props => props.theme.fgLight};
text-decoration: none;
border-radius: 30px;
padding: 17px 40px;
width: max-content;
`;

function Button(props) {
    return (
        <CTA to={props.to}>{props.content}</CTA>
    );
}

export default Button;