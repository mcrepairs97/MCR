import React from 'react';

import styled from 'styled-components';

import Container from '../components/Container';

const Box = styled.section`
background-color: #fff;
`;

export default function InfoBox({children}) {
    return (
        <Box>
            <Container>
                {children}
            </Container>
        </Box>
    )
}
