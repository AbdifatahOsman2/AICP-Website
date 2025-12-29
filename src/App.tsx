import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Header,
  HeroSection,
  QuoteSection,
  StatsSection,
  MadrasahSection,
  StorySection,
  UpdatesSection,
  ConnectSection,
  NewsletterSection,
  Footer
} from './components';
import { AboutPage, CommunityPage, PrayerTimesPage } from './pages';
import Education from './pages/Education';
import './App.css';

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header 
        isScrolled={isScrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <HeroSection />
      <QuoteSection />
      <StatsSection />
      <MadrasahSection />
      <StorySection />
      <UpdatesSection />
      <ConnectSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/education" element={<Education />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/prayer-times" element={<PrayerTimesPage />} />
    </Routes>
  );
}

export default App;
