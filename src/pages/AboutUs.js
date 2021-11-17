import React from 'react';

import H1 from '../components/H1';
import Background from '../components/BackgroundImage';
import Section from '../components/Section';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Spacer from '../components/Spacer';
import Heading from '../components/Heading';
import Divider from '../components/Divider';
import H2 from '../components/H2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEye } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { FacebookIcon } from '../components/Facebook';

import aboutUs from '../assets/images/about-us.jpg';
import lookingForMore from '../assets/images/looking-for-more.jpg';

const IconHeader = styled.div`
& svg {
    font-size: xxx-large;
    color: ${props => props.theme.accentPurple};
}
`;

function AboutUs() {
    return (
        <React.Fragment>
            <Background img={aboutUs} bgPos="top" fixed>
                <Spacer height="60" />
                <Container>
                    <Heading>
                        <H1>
                            About Us
                        </H1>
                        <Divider />
                    </Heading>
                    <p className="text-center">
                        Want to find out &amp; know more about us?<br />
                        Check out further information below.
                    </p>
                </Container>
                <Spacer height="60" />
            </Background>
            <Section>
                <Container>
                    <Grid>
                        <IconHeader>
                            <Heading>
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <H2 content="Our Goal" />
                                <Divider />
                            </Heading>
                            <p>
                                Our goal is to make our customers and clients happy and satisfied in the work that we provide for them, from repairing to installing products which they require, also giving them the service that they are looking for.
                            </p>
                        </IconHeader>
                        <IconHeader>
                            <Heading>
                                <FontAwesomeIcon icon={faEye} />
                                <H2 content="Our Vision" />
                                <Divider />
                            </Heading>
                            <p>
                                Our vision is to move up in the IT industry not being competitive with other companies but to help each other and make things easier &amp; simpler for ourselves and the community.
                            </p>
                        </IconHeader>
                        
                        
                    </Grid>
                </Container>
            </Section>
            <Background img={lookingForMore} height="30vh" />
            <Section>
                <Container>
                    <Grid>
                        <div className="text-center">
                            <Heading>
                                <H2 content="Looking For More Info?" />
                                <Divider />
                            </Heading>
                            <p>
                                Are you looking to find
                                out more about us? <br />
                                Check out our Facebook Page and you can
                                find out more information regarding
                                the services we provide,
                                what we do and what we can help with.
                            </p>
                            <Spacer height="20" />
                            <FacebookIcon />
                        </div>
                    </Grid>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default AboutUs;