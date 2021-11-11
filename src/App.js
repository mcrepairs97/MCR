import React from 'react';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import RepairServices from './pages/RepairServices';
import WebDesign from './pages/WebDesign';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        <Switch>
          <Route path="/repair-services" component={RepairServices} />
          <Route path="/web-design" component={WebDesign} />
          <Route path="/contact" component={Contact} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
