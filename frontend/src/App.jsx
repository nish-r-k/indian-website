import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero';
import Careers from './components/Career';
import WhatWeOffer from './components/WhatWeOffer';
import ServicesPage from './components/ServicesPage';
import Metrics from './components/Metrics';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';

const App = () => {
  return (
    
      <Router>
        <Routes>
           {/* Home Page */}
        <Route path="/" element={
          <div>
           <Hero/>
           <WhatWeOffer/>
           <WhyChooseUs/>
           <Metrics/>
           <Careers/>
           <FaqSection/>
          </div>
        } />

        {/* Careers Page */}
        {/* <Route path="/careers" element={<CareersPage />} /> */}
        </Routes>

      </Router>
   
  );
};

export default App;
