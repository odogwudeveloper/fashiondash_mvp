import React from 'react';
import { Crown, Check, ArrowRight } from 'lucide-react';

const SubscriptionCTA = () => {
  const premiumFeatures = [
    'Unlimited access to premium content',
    'Early access to new collections',
    'Exclusive designer interviews',
    'Ad-free reading experience',
    'Priority customer support',
    'Monthly style guide downloads'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-12 h-12 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Unlock Premium Fashion Content</h2>
          </div>
          
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of fashion enthusiasts who trust FashionDash for the latest trends, 
            exclusive content, and personalized recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Free Plan</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Access to basic content
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Weekly trend reports
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Basic recommendations
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border-2 border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-4">Premium Plan</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {premiumFeatures.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-yellow-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center">
              Start Premium Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200">
              Learn More
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            30-day free trial • Cancel anytime • No commitment
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCTA;