import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { mockContent } from '../data/mockData';
import ContentCard from './ContentCard';

const TrendingSection = () => {
  const trendingContent = mockContent.filter(content => content.trending);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
          </div>
          <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingContent.map((content, index) => (
            <ContentCard 
              key={content.id} 
              content={content} 
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;