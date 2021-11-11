import React from 'react';

import styled from 'styled-components';

const Heading = styled.h5`
color: ${props => props.theme.accent};
margin: 10px 0;
font-size: larger;
`;

function H5({children}) {
    return (
        <Heading>
            {children}
        </Heading>
    );
}

export default H5;