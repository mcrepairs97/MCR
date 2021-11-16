import React from 'react';

import styled from 'styled-components';

const LayoutSc = styled.div`
display: ${props => props.attr.display};
grid-template-columns: ${props => props.attr.gridTemplateColumns};
grid-template-rows: ${props => props.attr.gridTemplateRows};
grid-auto-flow: ${props => props.attr.gridAutoFlow};
flex-direction: ${props => props.attr.flexDirection};
justify-content: ${props => props.attr.justifyContent};
align-items: ${props => props.attr.alignItems};
gap: ${props => props.attr.gap};
`;

export default function Layout({children, attr}) {
    return (
        <LayoutSc attr={attr}>{children}</LayoutSc>
    )
}