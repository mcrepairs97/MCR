import React from 'react';

import styled from 'styled-components';

const Heading = styled.h1`
color: ${props => props.theme.accent};
`;

function H1({children}) {
    return (
        <Heading>
            {children}
        </Heading>
    );
}

export default H1;