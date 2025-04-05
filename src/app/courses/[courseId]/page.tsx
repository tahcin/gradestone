'use client';

import { useParams } from 'next/navigation';
import { getCourseById } from '@/data/courses/index';
import { getCourseDetailsById } from '@/data/courses/courseDetails';
import CourseDetailPage from '@/components/CourseDetailPage';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function CourseDetails() {
  const params = useParams();
  const courseId = params.courseId as string;
  
  const [courseDetails, setCourseDetails] = useState<any>(null);
  const [courseBasic, setCourseBasic] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    // Get course data
    const courseData = getCourseDetailsById(courseId);
    const basicCourseData = getCourseById(courseId);
    
    if (!courseData || !basicCourseData) {
      setError(true);
      setLoading(false);
      return;
    }
    
    setCourseDetails(courseData);
    setCourseBasic(basicCourseData);
    setLoading(false);
  }, [courseId]);
  
  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">Loading course...</p>
        </div>
      </div>
    );
  }
  
  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Course Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <a 
            href="/courses"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Back to Courses
          </a>
        </div>
      </div>
    );
  }
  
  // Render course detail page
  return <CourseDetailPage course={courseDetails} courseBasic={courseBasic} courseId={courseId} />;
}