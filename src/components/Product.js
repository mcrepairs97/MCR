import React from 'react';

import styled from 'styled-components';
import H5 from './H5';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.figure`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-color: #fff;
border-radius: 12px;
box-shadow: 5px 5px 20px #cccccc;
padding: 20px;
width: 100%;

& h5 {
    margin: 20px 0;
}
`;

const Price = styled.span`
text-align: center;
font-weight: bold;
`;

export default function Product(props) {
    return (
        <Card>
            <FontAwesomeIcon icon={props.icon} />
            <H5 fg={props.fg}>{props.title}</H5>
            <Price>{props.price}</Price>
        </Card>
    )
}
