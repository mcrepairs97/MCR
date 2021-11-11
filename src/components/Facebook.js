import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import styled from 'styled-components';

const Link = styled.a`
font-size: xx-large !important;
color: #3B5998 !important;

&:hover {
    color: ${props => props.theme.accent} !important;
}
`;
function FacebookLike() {
    return (
        <div 
            className="fb-like" 
            data-href="https://www.facebook.com/MCOMPUTERREPAIRS" 
            data-width="100px" 
            data-layout="button_count" 
            data-action="like" 
            data-size="small" 
            data-share="true">
        </div>
    )
}

function FacebookIcon() {
    return (
        <Link href="https://www.facebook.com/MCOMPUTERREPAIRS" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
        </Link>
    )
}

export {
    FacebookLike,
    FacebookIcon
}