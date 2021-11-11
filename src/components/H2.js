import React from 'react';

import styled from 'styled-components';

const Heading = styled.h2`
color: ${props => props.theme.accent};
`;

function H2(props) {
    return (
        <Heading>
            {props.content}
        </Heading>
    );
}

export default H2;