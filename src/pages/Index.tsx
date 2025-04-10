
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeatureSection from '@/components/FeatureSection';
import DemoSection from '@/components/DemoSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <DemoSection />
        <BenefitsSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
