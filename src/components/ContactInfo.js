import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { FacebookIcon } from './Facebook';

const Grid = styled.div`
display: grid;
grid-template-columns: ${props => props.single ? "auto" : "20% 1fr"};
justify-content: ${props => props.center ? "center" : "initial"};
align-items: center;
overflow-wrap: anywhere;
& svg {
    font-size: xx-large;
    color: ${props => props.theme.accentPurple};
}
`;

export default function ContactInfo() {
    return (
        <React.Fragment>
            <Grid>
                <FontAwesomeIcon icon={faGlobeAfrica} />
                <p>
                    <strong>Address</strong><br />
                    Durban 4052, KwaZulu-Natal, South Africa
                </p>
            </Grid>
            <Grid>
                <FontAwesomeIcon icon={faAddressCard} />
                <p>
                    <strong>Email Us</strong><br />
                    <a href="mailto:m.computerrepairs.kzn@gmail.com">
                        m.computerrepairs.kzn@gmail.com
                    </a>
                </p>
            </Grid>
            <Grid>
                <FontAwesomeIcon icon={faPhone} />
                <p>
                    <strong>Call Us</strong><br />
                    <a href="tel:0680757927">
                        068-075-7927
                    </a>
                </p>
            </Grid>
                <FacebookIcon />
        </React.Fragment>
    )
}
