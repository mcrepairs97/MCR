import React from 'react';

import styled from 'styled-components';

const Hr = styled.hr`
width: 40%;
margin: 20px auto 0 auto;
border: 1px solid ${props => props.theme.accent};
`;

function Divider() {
    return (
        <Hr />
    );
}

export default Divider;