import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getCourseById } from '@/data/courses/index';
import { getCourseDetailsById, courseDetails } from '@/data/courses/courseDetails';

type CourseId = keyof typeof courseDetails;

// Import the client component directly
import CourseDetailPage from '@/components/CourseDetailPage';

// This is a server component
export default function CourseServerPage({ params }: {
  params: Promise<{
    courseId: string;
  }>;
}) {
  // Unwrap params Promise
  const resolvedParams = use(params);
  const courseId = resolvedParams.courseId;
  
  // Get course details
  const course = getCourseDetailsById(courseId);
  // Get term information from course
  const courseBasic = getCourseById(courseId);

  // If course doesn't exist, show 404 page
  if (!course) {
    notFound();
  }

  // Render the client component with all the props it needs
  return <CourseDetailPage
    course={course}
    courseBasic={courseBasic}
    courseId={courseId}
  />;
} 