import React from 'react';

import styled from 'styled-components';

const BackgroundImage = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-blend-mode: overlay;
background-repeat: no-repeat;
background-position: ${props => props.pos || "center"};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: ${props => props.theme.bgDark};
color: ${props => props.theme.fgLight} !important;
padding: 60px 0;
height: ${props => props.height};
`;

export default function Background({children, img, pos, height}) {
    return (
        <BackgroundImage img={img} pos={pos} height={height}>{children}</BackgroundImage>
    )
}
