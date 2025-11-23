import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero';
import Career from './components/Career';
import WhatWeOffer from './components/WhatWeOffer';
import ServicesPage from './components/ServicesPage';
import Metrics from './components/Metrics';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';
import CareerDetails from './pages/CareerDetails';
import Projects from './components/Projects';

const App = () => {
  return (
    
      <Router>
        <Routes>
           {/* Home Page */}
        <Route path="/" element={
          <div>
           <Hero/>
           <WhatWeOffer/>
           <Projects/>
           <WhyChooseUs/>
           <Metrics/>
           <Career/>
           <FaqSection/>
          </div>
        } />

        {/* Careers Page */}
        {/* <Route path="/careers" element={<CareerDetails />} /> */}
        <Route path="/career" element={<CareerDetails/>}/>
        </Routes>

      </Router>
   
  );
};

export default App;
