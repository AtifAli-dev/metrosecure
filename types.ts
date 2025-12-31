
// Import React to access React namespaces and types
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  layout: 'left' | 'right';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CoreValue {
  title: string;
  description: string;
  // Fix: Added React import to satisfy React.ReactNode namespace requirement
  icon: React.ReactNode;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  // Fix: Added React import to satisfy React.ReactNode namespace requirement
  icon: React.ReactNode;
}
