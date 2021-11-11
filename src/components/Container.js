import React from 'react'

import styled from 'styled-components';

import useWindowSize from './utils/useWindowSize';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
padding: 0 ${props => props.padding}px;
`;

export default function Cont({children}) {
    const { width } = useWindowSize();

    let padding = "20";
    if(width > 768)
        padding = "30";
    if(width > 1024)
        padding = "80";
    if(width > 1200)
        padding = "160";
        
    return (
        <Container padding={padding}>
            {children}
        </Container>
    )
}
