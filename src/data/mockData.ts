import { FashionContent, Designer, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Emma Rodriguez',
  email: 'emma@example.com',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
  preferences: ['minimalist', 'sustainable', 'avant-garde'],
  readingHistory: ['1', '2', '3'],
  isPremium: true,
  joinDate: '2023-01-15'
};

export const mockDesigners: Designer[] = [
  {
    id: '1',
    name: 'Aria Chen',
    bio: 'Minimalist designer focusing on sustainable fashion',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    coverImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
    followers: 125000,
    collections: 12,
    specialty: ['Minimalist', 'Sustainable', 'Contemporary']
  },
  {
    id: '2',
    name: 'Viktor Sommer',
    bio: 'Avant-garde fashion visionary',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    coverImage: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1',
    followers: 89000,
    collections: 8,
    specialty: ['Avant-garde', 'Experimental', 'Luxury']
  }
];

export const mockContent: FashionContent[] = [
  {
    id: '1',
    title: 'The Rise of Sustainable Fashion: A New Era',
    description: 'Exploring how sustainable practices are revolutionizing the fashion industry',
    category: 'trend',
    imageUrl: 'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    },
    publishDate: '2024-01-15',
    readTime: 8,
    tags: ['sustainability', 'eco-fashion', 'trends'],
    isPremium: false,
    likes: 1247,
    shares: 89,
    trending: true
  },
  {
    id: '2',
    title: 'Minimalist Wardrobe Essentials for 2024',
    description: 'Curating the perfect capsule wardrobe with timeless pieces',
    category: 'style',
    imageUrl: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    author: {
      name: 'James Park',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    },
    publishDate: '2024-01-12',
    readTime: 6,
    tags: ['minimalism', 'capsule wardrobe', 'essentials'],
    isPremium: true,
    likes: 892,
    shares: 45,
    trending: false
  },
  {
    id: '3',
    title: 'Paris Fashion Week: Highlights and Trends',
    description: 'The most stunning moments from the latest Paris Fashion Week',
    category: 'runway',
    imageUrl: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    author: {
      name: 'Marie Dubois',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    },
    publishDate: '2024-01-10',
    readTime: 12,
    tags: ['runway', 'Paris', 'fashion week'],
    isPremium: false,
    likes: 2156,
    shares: 234,
    trending: true
  },
  {
    id: '4',
    title: 'Street Style Photography: Capturing Urban Fashion',
    description: 'How street style continues to influence high fashion',
    category: 'street',
    imageUrl: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
    },
    publishDate: '2024-01-08',
    readTime: 5,
    tags: ['street style', 'photography', 'urban'],
    isPremium: false,
    likes: 734,
    shares: 56,
    trending: false
  }
];