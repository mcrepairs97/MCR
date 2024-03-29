import React from 'react';

import H1 from '../components/H1';
import Background from '../components/BackgroundImage';
import Heading from '../components/Heading';
import Divider from '../components/Divider';
import Section from '../components/Section';
import Container from '../components/Container';
import Spacer from '../components/Spacer';
import Product from '../components/Product';

import repairServices from '../assets/images/repair-services.jpg';

import { faKey, faVirusSlash, faLaptopHouse, faEthernet, faDatabase, faAt, faCopy, faWindowRestore, faNetworkWired, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

import useWindowSize from '../components/utils/useWindowSize';
import Layout from '../components/Layout';

function RepairServices() {
    const { width } = useWindowSize();
    const attr = {
        display: "grid",
        gridTemplateColumns: width >= 768 && 'repeat(2, 300px)',
        justifyContent: width >= 768 && 'center',
        gap: "40px",
    };
    return (
        <React.Fragment>
            <Background img={repairServices} bgPos="top" fixed>
                <Spacer height="60" />
                <Container>
                    <Heading>
                        <H1>
                            Repair Services
                        </H1>
                        <Divider />
                    </Heading>
                    <p className="text-center">
                        Here you wll find a list of our repair services with their prices.
                        <br />
                        Any service done will include a labour fee of R200.
                    </p>
                    <p className="text-center">
                        Jobs outside of local area will include a callout fee of R250.
                    </p>
                </Container>
                <Spacer height="60" />
            </Background>
            <Section>
                <Container>
                    <Layout attr={attr}>
                        <Product icon={faKey} title="Password Removal" price="R150" />
                        {/* <Product icon={faCut} title="Stripping" price="R150" /> */}
                        <Product icon={faCopy} title="Cloning" price="R150" />
                        <Product icon={faVirusSlash} title="Virus Removal" price="R200" />
                        <Product icon={faLaptopHouse} title="Remote Assistance" price="R200" />
                        <Product icon={faDatabase} title="Data backup &amp; Restore" price="R250" />
                        <Product icon={faEthernet} title="Router Configuration" price="R200" />
                        <Product icon={faAt} title="Email Configuration" price="R200" />
                        <Product icon={faNetworkWired} title="Networking" price="R200" />
                        <Product icon={faDownload} title="Downloading of Programs" price="R200" />
                        <Product icon={faWindows} title="Windows Repair" price="R250" />
                        <Product icon={faWindowRestore} title="Reinstall Windows" price="R350" />
                    </Layout>
                </Container>
            </Section>
        </React.Fragment>
    );
}

export default RepairServices;