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
    id: 'bse',
    title: 'Business Statistics for Entrepreneurs',
    description: 'Embark on an exciting journey into the world of Statistics—a powerful tool that drives decision-making across countless fields. ',
    category: 'Statistics',
    level: 'Year 1',
    modules: 8, // Number of modules in the course
    gradientFrom: 'from-lime-500',
    gradientTo: 'to-teal-600',
    darkGradientFrom: 'dark:from-lime-600',
    darkGradientTo: 'dark:to-teal-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3a9 9 0 1 0 9 9h-9V3z" />
        <path transform="translate(2, -2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 0 0-9-9v9h9z" />
      </svg>
    ),
    term: 'Term 1',
    buttonColor: 'bg-lime-600 hover:bg-lime-700',
    textColor: 'text-lime-600 dark:text-lime-400'
  },
  {
    id: 'asb',
    title: 'Advanced Statistics for Business',
    description: 'Introduction to advanced statistical techniques that are vital for decision-making in management and entrepreneurship.',
    category: 'Category',
    level: 'Year 1',
    modules: 4, // Number of modules in the course
    gradientFrom: 'from-gray-500',
    gradientTo: 'to-blue-600',
    darkGradientFrom: 'dark:from-gray-600',
    darkGradientTo: 'dark:to-blue-700',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="#FFFFFF" viewBox="0 0 496 496">
      <g>
        <g>
          <g>
            <path d="M352,208v-8H184V32h-8C78.952,32,0,110.952,0,208c0,79.104,52.352,147.624,128,169.008V496h368V232H350.104 
            C351.232,223.944,352,215.896,352,208z M128,360.368C61.584,339.568,16,278.376,16,208c0-85.536,67.48-155.624,152-159.808V216 
            h167.792c-0.28,5.296-0.928,10.64-1.744,16H128V360.368z M264,304c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8h16 
            c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8H264z M280,336c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8 
            c0-4.416,3.584-8,8-8H280z M184,352c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8H184z 
            M200,384c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8H200z M184,480h-40V248h40v72 
            c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24 
            s10.768,24,24,24V480z M176,440c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16 
            C179.584,448,176,444.416,176,440z M264,480h-64v-16c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24 
            s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24v-72h64v24c-13.232,0-24,10.768-24,24s10.768,24,24,24 
            c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24s10.768,24,24,24V480z M256,392c0-4.416,3.584-8,8-8h16 
            c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16C259.584,400,256,396.416,256,392z M344,480h-64v-64c13.232,0,24-10.768,24-24 
            s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24v-24h64v24 
            c-13.232,0-24,10.768-24,24s10.768,24,24,24v48c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24 
            s10.768,24,24,24V480z M360,384c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8H360z 
            M336,440c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16C339.584,448,336,444.416,336,440z M440,432 
            c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8H440z M424,352c-4.416,0-8-3.584-8-8 
            c0-4.416,3.584-8,8-8h16c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8H424z M440,248h40v232h-40v-16c13.232,0,24-10.768,24-24 
            s-10.768-24-24-24v-48c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24V248z M448,296 
            c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8c0-4.416,3.584-8,8-8h16C444.416,288,448,291.584,448,296z M360,248h64v24 
            c-13.232,0-24,10.768-24,24s10.768,24,24,24c-13.232,0-24,10.768-24,24s10.768,24,24,24v48c-13.232,0-24,10.768-24,24 
            s10.768,24,24,24v16h-64v-16c13.232,0,24-10.768,24-24s-10.768-24-24-24c13.232,0,24-10.768,24-24s-10.768-24-24-24v-48 
            c13.232,0,24-10.768,24-24s-10.768-24-24-24V248z M360,288c4.416,0,8,3.584,8,8c0,4.416-3.584,8-8,8h-16c-4.416,0-8-3.584-8-8 
            c0-4.416,3.584-8,8-8H360z"></path>
            <path d="M356.688,0L317.96,38.728C287.808,14.528,249.576,0,208,0h-8v184h184v-8c0-49.712-20.752-94.648-54.008-126.68 
            L363.312,16H496V0H356.688z M367.808,168H216V16.192c34.072,1.688,65.28,14.192,90.504,33.984l-48.16,48.16l11.312,11.312 
            l48.976-48.976C347.2,88.088,365.72,125.888,367.808,168z"></path>
            <rect x="480" y="32" width="16" height="16"></rect>
            <rect x="376" y="32" width="88" height="16"></rect>
          </g>
        </g>
      </g>
      </svg>


    ),
    term: 'Term 2',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    textColor: 'text-white-600 dark:text-gay-400'
  },
  {
    id: 'persuasive-communication',
    title: 'Persuasive Communication',
    description: 'Develop effective persuasion techniques and communication skills for professional and academic settings.',
    category: 'Communication',
    level: 'Year 1',
    modules: 4,
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
    modules: 8,
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
    modules: 4,
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
    id: 'fobc2',
    title: 'Foundation of Business Communication 2',
    description: 'Build advanced business communication skills for effective professional interactions and presentations.',
    category: 'Business',
    level: 'Year 1',
    modules: 4,
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
    id: 'ebm',
    title: 'Evolution of Business and Market',
    description: 'Study the historical development of business practices, market structures, and economic systems.',
    category: 'Business',
    level: 'Year 1',
    modules: 4,
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
    level: 'Year X',
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