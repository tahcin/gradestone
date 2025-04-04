'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/utils/animations';

interface CourseDetailPageProps {
  course: any;
  courseBasic: any;
  courseId: string;
}

export default function CourseDetailPage({ course, courseBasic, courseId }: CourseDetailPageProps) {
  const [activeModule, setActiveModule] = useState(1);

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Course Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={`bg-gradient-to-r ${course.gradientFrom} ${course.gradientTo} ${course.darkGradientFrom} ${course.darkGradientTo} text-white p-8 rounded-lg mb-8 shadow-lg`}
        >
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={slideUp} className="md:col-span-3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Year 1
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {courseBasic?.term || 'Term 1'}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Course Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Course Overview */}
          <motion.div variants={slideUp} className="lg:col-span-1">
            <div className="card hover:bg-gray-50/90 dark:hover:bg-gray-700/90 hover:backdrop-blur-sm transition-all duration-200 h-full">
              <h3 className="text-xl font-bold mb-4">Course Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">{course.overview}</p>
              <h4 className="font-bold text-lg mb-2">What You'll Learn</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                {course.modules.map((module: any) => (
                  <li key={module.id}>{module.title}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Course Modules */}
          <motion.div variants={slideUp} className="lg:col-span-2">
            <div className="card">
              <h3 className="text-xl font-bold mb-6">Course Content</h3>
              <div className="space-y-4">
                {course.modules.map((module: any) => (
                  <div key={module.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <button
                      className={`w-full px-6 py-4 flex justify-between items-center text-left ${
                        activeModule === module.id 
                          ? `${course.accentColor} text-white` 
                          : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                      } transition-colors duration-200`}
                      onClick={() => setActiveModule(activeModule === module.id ? 0 : module.id)}
                      aria-expanded={activeModule === module.id}
                      aria-controls={`module-content-${module.id}`}
                    >
                      <h4 className="font-bold">
                        Module {module.id}: {module.title}
                      </h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-200 ${
                          activeModule === module.id ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {activeModule === module.id && (
                      <div 
                        id={`module-content-${module.id}`}
                        className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                      >
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                          {module.lessons.map((lesson: any) => (
                            <li key={lesson.id} className="py-4">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-start">
                                  <div className={`rounded-md p-2 ${lesson.type === 'note' ? 'bg-cyan-100 dark:bg-cyan-900/30' : 'bg-indigo-100 dark:bg-indigo-900/30'} mr-4 flex-shrink-0`} aria-hidden="true">
                                    {lesson.type === 'note' ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 ${course.iconColor}`}
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                        <path d="M3 8a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 ${course.iconColor}`}
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                        aria-hidden="true"
                                    >
                                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h4 className="font-semibold text-base truncate">{lesson.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{lesson.description}</p>
                                  </div>
                                </div>
                                <div className="flex items-center ml-auto">
                                  {lesson.type === 'test' && (
                                    <div className="flex items-center mr-4">
                                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">{lesson.questions} Questions</span>
                                      <div className="h-2 w-2 rounded-full bg-gray-400 dark:bg-gray-600" aria-hidden="true"></div>
                                    </div>
                                  )}
                                  <Link 
                                    href={`/courses/${courseId}/modules/${module.id}/${lesson.type}s/${lesson.id}`}
                                    className={`${course.accentColor} ${course.accentHoverColor} text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center w-40 space-x-2`}
                                    aria-label={`${lesson.type === 'note' ? 'View notes' : 'Take test'} for ${lesson.title}`}
                                  >
                                    {lesson.type === 'note' ? (
                                      <>
                                        <span>View Notes</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                        </svg>
                                      </>
                                    ) : (
                                      <>
                                        <span>Take Test</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                      </>
                                    )}
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 