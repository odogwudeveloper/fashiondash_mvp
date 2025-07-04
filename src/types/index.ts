export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences: string[];
  readingHistory: string[];
  isPremium: boolean;
  joinDate: string;
}

export interface FashionContent {
  id: string;
  title: string;
  description: string;
  category: 'trend' | 'designer' | 'style' | 'runway' | 'street';
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: number;
  tags: string[];
  isPremium: boolean;
  likes: number;
  shares: number;
  trending: boolean;
}

export interface Designer {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  coverImage: string;
  followers: number;
  collections: number;
  specialty: string[];
}