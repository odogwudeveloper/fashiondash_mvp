import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import RecommendedSection from './components/RecommendedSection';
import DesignerSpotlight from './components/DesignerSpotlight';
import SubscriptionCTA from './components/SubscriptionCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrendingSection />
        <RecommendedSection />
        <DesignerSpotlight />
        <SubscriptionCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;