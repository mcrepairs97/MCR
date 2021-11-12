import React from 'react';

import { Parallax } from 'react-scroll-parallax';

export default function ParallaxImage({img}) {
    return (
        <Parallax style={{position: "absolute", transform: 'translateY(200px) !important'}} y={[-200, 0]} tagOuter="div">
            <img src={img} height="400px" alt="Background" />
        </Parallax>
    )
};