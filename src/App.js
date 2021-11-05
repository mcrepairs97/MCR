import React from 'react';
import './assets/css/main.css';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import RepairServices from './pages/RepairServices';
import WebDesign from './pages/WebDesign';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/repair-services" component={Contact} />
        <Route path="/web-design" component={AboutUs} />
        <Route path="/contact" component={RepairServices} />
        <Route path="/about-us" component={WebDesign} />
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
