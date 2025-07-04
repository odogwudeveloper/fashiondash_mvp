import React from 'react';
import { TrendingUp, Sparkles, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Fashion
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              That Defines You
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Curated content from the world's most influential designers and fashion experts. 
            Get personalized recommendations and stay ahead of the trends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-200">
              Explore Premium
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Trending Now</h3>
              <p className="text-gray-300 text-sm">Stay updated with the latest fashion trends and viral content</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Curated Content</h3>
              <p className="text-gray-300 text-sm">Handpicked articles and insights from fashion industry experts</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Community</h3>
              <p className="text-gray-300 text-sm">Connect with fashion enthusiasts and share your discoveries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;