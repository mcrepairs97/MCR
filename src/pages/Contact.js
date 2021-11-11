import React from 'react';

import H1 from '../components/H1';
import Background from '../components/BackgroundImage';
import Section from '../components/Section';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Divider from '../components/Divider';
import Form from '../components/Form';
import H2 from '../components/H2';
import Spacer from '../components/Spacer';
import Grid from '../components/Grid';
import ContactInfo from '../components/ContactInfo';
import InfoBox from '../components/InfoBox';

import contact from '../assets/images/contact.jpg';

function Contact() {
    return (
        <React.Fragment>
            <Background img={contact}>
                <Spacer height="60" />
                <Container>
                    <Heading>
                        <H1 content="Contact" />
                        <Divider />
                    </Heading>
                    <p className="text-center">
                        Do you need to book your pc/laptop for a repair?
                        <br />
                        Do so by sending us a message with your details so we can get back to you.
                    </p>
                </Container>
                <Spacer height="60" />
            </Background>
            <Section>
                <Container>
                    <Form />
                    <Spacer height="60" />
                    
                    <InfoBox>
                        <Heading>
                            <H2 content="Contact Info" />
                            <Divider />
                        </Heading>
                        <Grid>
                            <ContactInfo />
                        </Grid>
                    </InfoBox>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default Contact;