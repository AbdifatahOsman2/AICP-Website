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
import Registration from './pages/Registration';
import Donation from './pages/Donation';
import IslamicCalendar from './pages/IslamicCalendar';
import Imams from './pages/Imams';
import CommunityAid from './pages/CommunityAid';
import VolunteerForm from './pages/VolunteerForm';
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
      <Route path="/register" element={<Registration />} />
      <Route path="/donate" element={<Donation />} />
      <Route path="/islamic-calendar" element={<IslamicCalendar />} />
      <Route path="/imams" element={<Imams />} />
      <Route path="/community-aid" element={<CommunityAid />} />
      <Route path="/volunteer" element={<VolunteerForm />} />
    </Routes>
  );
}

export default App;
