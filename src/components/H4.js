import React from 'react';

import styled from 'styled-components';

const Heading = styled.h4`
color: ${props => props.theme.accent};
`;

function H4(props) {
    return (
        <Heading>
            {props.content}
        </Heading>
    );
}

export default H4;