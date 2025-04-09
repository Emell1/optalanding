
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeatureSection from '@/components/FeatureSection';
import DemoSection from '@/components/DemoSection';
import BenefitsSection from '@/components/BenefitsSection';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <DemoSection />
      <BenefitsSection />
      <CallToAction />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
