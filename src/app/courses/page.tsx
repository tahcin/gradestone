'use client';

import Link from 'next/link';
import { motion, useAnimationControls } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations';
import { useEffect, useState } from 'react';
import { courses, getCourseById } from '@/data/courses/index';

// Get unique terms for filtering
const terms = Array.from(new Set(courses.map(course => course.term)));
// Years for filtering (only Year 1 for now)
const years = ['Year 1'];

export default function CoursesPage() {
  // Animation controls
  const mainControls = useAnimationControls();
  const gridControls = useAnimationControls();
  
  // State for filtering
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedTerm, setSelectedTerm] = useState('All Terms');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  // Filter courses when year or term changes
  useEffect(() => {
    let result = courses;
    
    if (selectedYear !== 'All Years') {
      // This is a placeholder - in a real app, courses would have year property
      // For now, show all courses when Year 1 is selected
      result = result;
    }
    
    if (selectedTerm !== 'All Terms') {
      result = result.filter(course => course.term === selectedTerm);
    }
    
    setFilteredCourses(result);
    
    // Trigger animation for the grid when filter changes
    gridControls.start('hidden').then(() => {
      gridControls.start('visible');
    });
  }, [selectedYear, selectedTerm, gridControls]);
  
  // Trigger animations on mount
  useEffect(() => {
    const sequence = async () => {
      await mainControls.start('visible');
      await gridControls.start('visible');
    };
    
    sequence();
  }, [mainControls, gridControls]);

  return (
    <motion.div 
      initial="hidden"
      animate={mainControls}
      variants={fadeIn}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      {/* Header with Gradient Background */}
      <div className="bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-950 py-16 mb-12 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-lg bg-indigo-500/10 blur-xl rotate-12"></div>
        
        <motion.div 
          variants={slideUp}
          className="container-custom text-center relative z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Explore Our Courses</h1>
          <p className="text-lg text-gray-100 dark:text-gray-200 max-w-3xl mx-auto drop-shadow">
            Browse through our comprehensive collection of courses designed to help you master new skills.
          </p>
        </motion.div>
      </div>

      <div className="container-custom py-6">
        {/* Year Filter */}
        <motion.div 
          variants={slideUp}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Years</h2>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            <motion.button 
              variants={slideUp}
              className={`px-4 py-2 rounded-full transition-colors ${selectedYear === 'All Years' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'}`}
              onClick={() => setSelectedYear('All Years')}
            >
              All Years
            </motion.button>
            {years.map((year) => (
              <motion.button 
                key={year} 
                variants={slideUp}
                className={`px-4 py-2 rounded-full transition-colors ${selectedYear === year ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Term Filter */}
        <motion.div 
          variants={slideUp}
          className="mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Terms</h2>
          <motion.div 
            variants={staggerContainer}
            className="flex flex-wrap gap-3"
          >
            <motion.button 
              variants={slideUp}
              className={`px-4 py-2 rounded-full transition-colors ${selectedTerm === 'All Terms' ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'}`}
              onClick={() => setSelectedTerm('All Terms')}
            >
              All Terms
            </motion.button>
            {terms.map((term) => (
              <motion.button 
                key={term} 
                variants={slideUp}
                className={`px-4 py-2 rounded-full transition-colors ${selectedTerm === term ? 'bg-indigo-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'}`}
                onClick={() => setSelectedTerm(term)}
              >
                {term}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Course Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={gridControls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <motion.div 
                key={course.id}
                variants={slideUp} 
                className="card overflow-hidden hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200"
              >
                <div className={`relative h-48 sm:h-40 bg-gradient-to-r ${course.gradientFrom} ${course.gradientTo} ${course.darkGradientFrom} ${course.darkGradientTo} mb-4 rounded-lg overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-2 text-center sm:text-left">
                      {course.icon}
                      <div className="text-xl font-semibold text-white mt-2 sm:mt-0">{course.title.split(' ')[0]}</div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/30 text-white text-xs px-3 py-1 font-medium rounded-lg">
                    {course.level}
                  </div>
                  <div className="absolute top-2 left-2 bg-black/30 text-white text-xs px-3 py-1 font-medium rounded-lg">
                    {course.term}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm line-clamp-2">
                  {course.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-0">
                  <span className={`${course.textColor} font-semibold text-sm`}>{course.modules} Modules</span>
                  <Link 
                    href={`/courses/${course.id}`} 
                    className={`${course.buttonColor} text-white text-sm px-4 py-2 rounded-md font-medium transition-colors w-full sm:w-auto text-center`}
                  >
                    View Course
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              variants={slideUp} 
              className="col-span-full text-center py-12"
            >
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">
                No courses found matching your filters
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try changing your filter criteria
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
} 