import React, { useState, useEffect, Suspense, lazy } from 'react';
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
import './App.css';

// Lazy load page components for better performance
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const PrayerTimesPage = lazy(() => import('./pages/PrayerTimesPage'));
const Education = lazy(() => import('./pages/Education'));
const Registration = lazy(() => import('./pages/Registration'));
const Donation = lazy(() => import('./pages/Donation'));
const IslamicCalendar = lazy(() => import('./pages/IslamicCalendar'));
const Imams = lazy(() => import('./pages/Imams'));
const CommunityAid = lazy(() => import('./pages/CommunityAid'));
const VolunteerForm = lazy(() => import('./pages/VolunteerForm'));

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
  </div>
);

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
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}

export default App;
