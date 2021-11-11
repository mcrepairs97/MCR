import React from 'react';

import styled from 'styled-components';

const Heading = styled.h1`
color: ${props => props.theme.accent};
`;

function H1(props) {
    return (
        <Heading>
            {props.content}
        </Heading>
    );
}

export default H1;