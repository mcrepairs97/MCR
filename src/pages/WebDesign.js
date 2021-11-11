import React from 'react';

import H1 from '../components/H1';
import Background from '../components/BackgroundImage';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Divider from '../components/Divider';
import Section from '../components/Section';
import Grid from '../components/Grid';
import IconBox from '../components/IconBox';

import webDesign from '../assets/images/web-design.png';
import webDesignBottom from '../assets/images/web-design-bottom.jpg';

import { faFileCode, faGlobe, faCertificate, faPen } from '@fortawesome/free-solid-svg-icons';
import Spacer from '../components/Spacer';
import Product from '../components/Product';

function WebDesign() {
    return (
        <React.Fragment>
            <Background img={webDesign}>
                <Spacer height="60" />
                <Container>
                    <Heading>
                        <H1 content="Web Development &amp; Design" />
                        <Divider />
                    </Heading>
                    <p className="text-center">
                        Looking to build a website for your own business?
                        <br />
                        We can help you with that!
                    </p>
                </Container>
                <Spacer height="60" />
            </Background>
            <Section>
                <Container>
                    <Grid>
                        <Product icon={faFileCode} title="Website Creation" />
                        <Product icon={faGlobe} title="Domain Registration" />
                        <Product icon={faCertificate} title="SSL Certification" />
                        <Product icon={faPen} title="Content Additions" />
                    </Grid>
                    <Spacer height="20px" />
                </Container>
            </Section>
            <Background img={webDesignBottom}>
                <Container>
                    <p className="text-center">
                        Are you looking to build a website for your new company or small business? <br />
                        Do you have a website that you you want to touch-up or that needs fixing due to being poorly and not properly designed? <br />
                        Does your website need a SSL certificate to be applied for security purposes? <br />
                        We can help manage your database system to make sure everything is in order in your website. <br />
                        M.C.R also offers a service of designing websites for different types of business, big or small and that have just started in the market. <br />
                        Enquire by us via email for more information.
                    </p>
                </Container>
            </Background>
        </React.Fragment>
    );
}

export default WebDesign;