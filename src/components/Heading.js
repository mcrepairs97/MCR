import React from 'react'

import styled from 'styled-components';

const Heading = styled.div`
margin-bottom: 60px;
text-align: center;
`;

export default function Head({children}) {
    return (
        <Heading>{children}</Heading>
    )
}
