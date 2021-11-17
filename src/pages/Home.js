import React from 'react';

import styled from 'styled-components';

import useWindowSize from '../components/utils/useWindowSize';

import customPcBuildsImage from '../assets/images/custom-pc-builds.png';
import laptopUpgradesImage from '../assets/images/laptop-upgrades.png';
import brokenLaptop from '../assets/images/broken-laptop.png';
import motherboard from '../assets/images/motherboard.jpg';

import Button from '../components/Button';
import Divider from '../components/Divider';
import H1 from '../components/H1';
import H2 from '../components/H2';
import H3 from '../components/H3';
import H5 from '../components/H5';
import Heading from '../components/Heading';
import Spacer from '../components/Spacer';
import Carousel from '../components/Carousel';
import Section from '../components/Section';
import Container from '../components/Container';
import Grid from '../components/Grid';
import BackgroundImage from '../components/BackgroundImage';

const Figure = styled.figure`
display: flex;
flex-direction: column;
justify-self: center;
justify-content: center;

& figcaption {
    background: hsla(234, 7%, 28%, 1);
    background: linear-gradient(90deg, hsla(234, 7%, 28%, 1) 0%, hsla(180, 14%, 3%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(234, 7%, 28%, 1) 0%, hsla(180, 14%, 3%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(234, 7%, 28%, 1) 0%, hsla(180, 14%, 3%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#43444D", endColorstr="#060808", GradientType=1 );
    color: ${props => props.theme.fgLight};
    padding: 20px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100%;
    height: 200px;
    text-align: center;
}
`;

const Img = styled.img`
border-radius: 12px;
height: 100%;
`;

const Align = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

function Home() {
    const { width } = useWindowSize();
    return (
        <React.Fragment>
            <BackgroundImage img={brokenLaptop} bgPos="top" fixed height="80vh">
                <div className="image"></div>
                <Container>
                    <Heading>
                        <H1>
                            Martin's Computer Repairs <br />
                            &amp; IT Services
                        </H1>
                        <Divider />
                    </Heading>
                    <H3 content="Need some help upgrading your software?" />
                    <H3 content="Do you have to repair your laptop keyboard?" />
                    <H3 content="No problem, check out our services
                        and contact us now to schedule a service booking." />
                    <Spacer height="20" />
                    <Button to="/contact" content="Book A Service" />
                </Container>
            </BackgroundImage>
            <Section>
                <Container>
                    <Heading>
                        <H2 content="What We Do" />
                        <Divider />
                    </Heading>
                    <Grid width={width}>
                        <Figure>
                            <Img src={customPcBuildsImage} alt="Custom PC Builds"  width="100%" />
                            <figcaption>
                                <H5>CUSTOM PC BUILDS</H5>
                                <p>Looking to build your own custom style PC with parts of your choice? Get a quote from us now &amp; build your PC.</p>
                            </figcaption>
                        </Figure>
                        <Figure>
                            <Img src={laptopUpgradesImage} alt="Laptop Upgrades"  width="100%" />
                            <figcaption>
                                <H5>LAPTOP UPGRADES</H5>
                                <p>Interested in upgrading your laptop to a new one or is there a fault that your laptop has which you need to fix?</p>
                            </figcaption>
                        </Figure>
                    </Grid>
                </Container>
            </Section>
            
            <Section>
            <BackgroundImage img={motherboard} bgPos="top" fixed height="80vh">
                <div class="image"></div>
                    <Container>
                        <Heading>
                            <H2 content="Find What You Need" />
                            <Divider />
                        </Heading>
                        <p className="text-center">Get lost while you find what your looking for with this all new generation of computer parts, building your PC that you’ve dreamed of and have always wanted!</p>
                    </Container>
                </BackgroundImage>
            </Section>

            <Section>
                <Container>
                    <Grid width={width}>
                        <Align>
                            <Heading>
                                <H2 content="Laptop Batteries" />
                                <Divider />
                            </Heading>
                            <p className="text-center">
                                Does your laptop battery charge not last long or
                                does the laptop not stay on at all without the charger?
                                Its time to get a new battery and
                                We can order you a brand new battery today!
                            </p>
                        </Align>
                        {width >= 1024 && <Carousel />}
                    </Grid>
                </Container>
            </Section>
            {width <= 1023 && <Carousel />}
        </React.Fragment>
    );
}

export default Home;