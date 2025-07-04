import React, { useState } from 'react';
import { Search, User, Bell, Menu, X, Crown } from 'lucide-react';
import { mockUser } from '../data/mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <header className="bg-black text-white sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              FashionDash
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Trending</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Designers</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Collections</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Street Style</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Runway</a>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>
            
            {/* User Profile */}
            <div className="relative">
              <button 
                onClick={toggleProfile}
                className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
              >
                <img 
                  src={mockUser.avatar} 
                  alt={mockUser.name} 
                  className="w-8 h-8 rounded-full object-cover"
                />
                {mockUser.isPremium && <Crown className="w-4 h-4 text-yellow-400" />}
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-xl border border-gray-200 py-2">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-semibold">{mockUser.name}</p>
                    <p className="text-sm text-gray-600">{mockUser.email}</p>
                    {mockUser.isPremium && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full mt-2">
                        <Crown className="w-3 h-3 mr-1" />
                        Premium Member
                      </span>
                    )}
                  </div>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200">Subscription</a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-200">Sign out</a>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Trending</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Designers</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Collections</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Street Style</a>
              <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Runway</a>
              <div className="pt-4 border-t border-gray-800">
                <button className="flex items-center space-x-2 w-full text-left hover:text-yellow-400 transition-colors duration-200">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;