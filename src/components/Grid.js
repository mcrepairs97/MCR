import React from 'react'

import styled from 'styled-components';

const GridSc = styled.div`
display: grid;
grid-auto-flow: ${props => props.width >= 1024 ? "column" : "row"};
grid-gap: 60px;
`;

export default function Grid({children, width}) {
    return (
        <GridSc width={width}>{children}</GridSc>
    )
}
