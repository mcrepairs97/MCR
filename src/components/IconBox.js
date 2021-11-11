import React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H5 from './H5';

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props => props.bg};
color: ${props => props.fg} !important;
padding: 40px 0;
border-radius: 12px;

& h5 {
    color: ${props => props.fg};
}
`;

const Icon = styled.span`
font-size: xxx-large;
`;

export default function IconBox(props) {
    return (
        <Box bg={props.bg} fg={props.fg}>
            <Icon>
                <FontAwesomeIcon icon={props.icon} />
            </Icon>
            <H5>{props.title}</H5>
        </Box>
    )
}
