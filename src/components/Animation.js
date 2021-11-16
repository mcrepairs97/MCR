import React from 'react';

import styled from 'styled-components';

const Animate = styled.div`
animation: ${props => props.width >= 1024 && props.animation};
position: relative;
`;

export default function Animation({children, animation, width}) {
    return (
        <Animate animation={animation} width={width}>
            {children}
        </Animate>
    )
}
