import React from 'react';
import { Clock, Heart, Share2, Crown, Bookmark } from 'lucide-react';
import { FashionContent } from '../types';

interface ContentCardProps {
  content: FashionContent;
  featured?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, featured = false }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: content.title,
        text: content.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="relative">
        <img 
          src={content.imageUrl} 
          alt={content.title}
          className={`w-full object-cover ${featured ? 'h-64' : 'h-48'}`}
        />
        
        {content.trending && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Trending
          </div>
        )}
        
        {content.isPremium && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Crown className="w-4 h-4 mr-1" />
            Premium
          </div>
        )}

        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200">
            <Bookmark className="w-4 h-4 text-gray-700" />
          </button>
          <button 
            onClick={handleShare}
            className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
          >
            <Share2 className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {content.category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {content.readTime} min read
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-200 cursor-pointer">
          {content.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {content.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={content.author.avatar} 
              alt={content.author.name}
              className="w-8 h-8 rounded-full object-cover mr-3"
            />
            <div>
              <p className="font-medium text-gray-900">{content.author.name}</p>
              <p className="text-sm text-gray-500">{new Date(content.publishDate).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-gray-500">
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              <span className="text-sm">{content.likes}</span>
            </div>
            <div className="flex items-center">
              <Share2 className="w-4 h-4 mr-1" />
              <span className="text-sm">{content.shares}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {content.tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ContentCard;