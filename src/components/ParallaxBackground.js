import React, {useState, useEffect} from 'react';

import styled from 'styled-components';

const Parallax = styled.div`
height: 80vh;
position: relative;
& .image {
    background: url(${props => props.img});
    background-size: cover;
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-color: #333;
    position: fixed;
    transform: translateY(-${props => props.offset * 0.6}px);
    height: 80vh;
    width: 100%;
    z-index: -1;
}
`;


export default function ParallaxBackground({children, img}) {
    const [offset, setOffset] = useState(window.pageYOffset);

    useEffect(() => {
        function handleParallax() {
            setOffset(window.pageYOffset);
        }
        window.addEventListener('scroll', handleParallax);
        return () => {
            window.removeEventListener('scroll', handleParallax);
        }
    }, []);

    return (
        <Parallax img={img} offset={offset}>
            {children}
        </Parallax>
    )
}
