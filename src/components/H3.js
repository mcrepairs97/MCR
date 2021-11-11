import React from 'react';

import styled from 'styled-components';

const Heading = styled.h3`
color: ${props => props.theme.fgLight};
`;

function H3(props) {
    return (
        <Heading>
            {props.content}
        </Heading>
    );
}

export default H3;