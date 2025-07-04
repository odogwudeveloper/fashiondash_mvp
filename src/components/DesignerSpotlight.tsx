import React from 'react';
import { Users, ArrowRight, Star } from 'lucide-react';
import { mockDesigners } from '../data/mockData';

const DesignerSpotlight = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <Star className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold">Designer Spotlight</h2>
          </div>
          <button className="flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200">
            View All Designers
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockDesigners.map((designer) => (
            <div key={designer.id} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-opacity-20 transition-all duration-300">
              <div className="relative">
                <img 
                  src={designer.coverImage} 
                  alt={designer.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <img 
                    src={designer.avatar} 
                    alt={designer.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white mr-3"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{designer.name}</h3>
                    <p className="text-gray-300 text-sm">{designer.specialty.join(', ')}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">{designer.bio}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{designer.followers.toLocaleString()} followers</span>
                  </div>
                  <span className="text-sm text-gray-300">{designer.collections} collections</span>
                </div>

                <button className="w-full bg-yellow-500 text-black py-2 px-4 rounded-full font-medium hover:bg-yellow-400 transition-colors duration-200">
                  Follow Designer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerSpotlight;