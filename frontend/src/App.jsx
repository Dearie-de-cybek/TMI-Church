import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'


import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import HeroSection from './components/home/HeroSection';
import AffirmationSection from './components/home/AffirmationSection';
import MandateSection from './components/home/MandateSection';
import ValuesSection from './components/home/ValuesSection';
import CallSection from './components/home/CallSection';
import Assignmentsection from './components/home/Assignmentsection';
import EventsSection from './components/home/EventsSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AffirmationSection />
      <MandateSection />
      <ValuesSection />
      <CallSection />
      <Assignmentsection />
      <EventsSection />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;