
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { SocialTrading } from '@/components/SocialTrading';
import { AIInsights } from '@/components/AIInsights';
import { Community } from '@/components/Community';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950">
      <Navigation />
      <div className="pt-20">
        <Hero />
        <Features />
        <SocialTrading />
        <AIInsights />
        <Community />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
