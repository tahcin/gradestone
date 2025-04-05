import React, { ReactNode } from 'react';

// Type for Course object
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  modules: number;
  gradientFrom: string;
  gradientTo: string;
  darkGradientFrom: string;
  darkGradientTo: string;
  icon: ReactNode;
  term: string;
  buttonColor: string;
  textColor: string;
}

// Course catalog for the LMS
export const courses: Course[] = [
  {
    id: 'persuasive-communication',
    title: 'Persuasive Communication',
    description: 'Develop effective persuasion techniques and communication skills for professional and academic settings.',
    category: 'Communication',
    level: 'Year 1',
    modules: 8,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    darkGradientFrom: 'dark:from-purple-600',
    darkGradientTo: 'dark:to-pink-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    term: 'Term 2',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    textColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 'indian-knowledge-system',
    title: 'Indian Knowledge System',
    description: 'Explore the rich heritage of Indian knowledge traditions, philosophies, and their modern applications.',
    category: 'Humanities',
    level: 'Year 1',
    modules: 7,
    gradientFrom: 'from-red-500',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-red-600',
    darkGradientTo: 'dark:to-orange-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    term: 'Term 2',
    buttonColor: 'bg-red-600 hover:bg-red-700',
    textColor: 'text-red-600 dark:text-red-400'
  },
  {
    id: 'principles-of-microeconomics',
    title: 'Principles of Microeconomics',
    description: 'Understand fundamental microeconomic concepts, market structures, and decision-making processes.',
    category: 'Economics',
    level: 'Year 1',
    modules: 9,
    gradientFrom: 'from-green-500',
    gradientTo: 'to-teal-600',
    darkGradientFrom: 'dark:from-green-600',
    darkGradientTo: 'dark:to-teal-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    term: 'Term 2',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    textColor: 'text-green-600 dark:text-green-400'
  },
  {
    id: 'foundation-of-business-communication-ii',
    title: 'Foundation of Business Communication 2',
    description: 'Build advanced business communication skills for effective professional interactions and presentations.',
    category: 'Business',
    level: 'Year 1',
    modules: 8,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    term: 'Term 2',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    textColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 'evolution-of-business-and-market',
    title: 'Evolution of Business and Market',
    description: 'Study the historical development of business practices, market structures, and economic systems.',
    category: 'Business',
    level: 'Year 1',
    modules: 7,
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-amber-600',
    darkGradientFrom: 'dark:from-yellow-600',
    darkGradientTo: 'dark:to-amber-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    term: 'Term 2',
    buttonColor: 'bg-amber-600 hover:bg-amber-700',
    textColor: 'text-amber-600 dark:text-amber-400'
  },
 
  
  // Template for adding a new course
  /*
  {
    id: 'course-id-here',
    title: 'Course Title',
    description: 'Course description goes here.',
    category: 'Category',
    level: 'Beginner/Intermediate/Advanced',
    modules: 8, // Number of modules in the course
    gradientFrom: 'from-color-500',
    gradientTo: 'to-color-600',
    darkGradientFrom: 'dark:from-color-600',
    darkGradientTo: 'dark:to-color-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="..." />
      </svg>
    ),
    term: 'Term X',
    buttonColor: 'bg-color-600 hover:bg-color-700',
    textColor: 'text-color-600 dark:text-color-400'
  },
  */
];

// Helper function to get a course by ID
export function getCourseById(courseId: string): Course | undefined {
  return courses.find(course => course.id === courseId);
}