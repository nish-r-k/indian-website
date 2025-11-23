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
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import NavbarMain from './components/NavbarMain';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const App = () => {
  return (
    
      <Router>
        <Routes>
          
           {/* Home Page */}
        <Route path="/" element={
          <div>
            <NavbarMain/>
           <Hero/>
           <FaqSection/>
           <WhatWeOffer/>
           <Projects/>
           <WhyChooseUs/>
           <Metrics/>
           <Career/>
           <Footer/>
           
          </div>
        } />

        {/* Careers Page */}
        <Route path="/careers" element={<CareerDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>

      </Router>
   
  );
};

export default App;
