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
    id: 'web-development',
    title: 'Modern Web Development',
    description: 'Learn the latest technologies in web development including React, Node.js, and more.',
    category: 'Development',
    level: 'Year 1',
    modules: 8,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    term: 'Term 1',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
    textColor: 'text-indigo-600 dark:text-indigo-400'
  },
  {
    id: 'data-science',
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, machine learning, and data visualization.',
    category: 'Data Science',
    level: 'Year 1',
    modules: 10,
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-500',
    darkGradientFrom: 'dark:from-cyan-600',
    darkGradientTo: 'dark:to-blue-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    term: 'Term 1',
    buttonColor: 'bg-cyan-600 hover:bg-cyan-700',
    textColor: 'text-cyan-600 dark:text-cyan-400'
  },
  {
    id: 'blockchain-development',
    title: 'Blockchain Development',
    description: 'Learn blockchain concepts, smart contracts, and build decentralized applications.',
    category: 'Development',
    level: 'Year 1',
    modules: 9,
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-600',
    darkGradientFrom: 'dark:from-amber-600',
    darkGradientTo: 'dark:to-orange-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    term: 'Term 1',
    buttonColor: 'bg-orange-600 hover:bg-orange-700',
    textColor: 'text-orange-600 dark:text-orange-400'
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