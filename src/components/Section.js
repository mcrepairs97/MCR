import React from 'react';

import styled from 'styled-components';

const Section = styled.section`
margin: 60px 0;
`;

export default function Sec({children}) {
    return (
        <Section>
            {children}
        </Section>
    )
}
