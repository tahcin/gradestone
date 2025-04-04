'use client';

import React, { Suspense } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../../utils/animations';
import { getCourseById } from '@/data/courses/index';
import { getCourseDetailsById, courseDetails } from '@/data/courses/courseDetails';

type CourseId = keyof typeof courseDetails;

// Create a client component wrapper for the page content
import CourseDetailPage from '@/components/CourseDetailPage';

// This is a server component now
export default function CourseServerPage({ params }: {
  params: {
    courseId: string;
  }
}) {
  // NOTE: In a future version of Next.js, params will be a Promise,
  // and you'll need to use React.use(params) to unwrap it.
  // For now, direct access is supported for migration purposes.
  const courseId = params.courseId;
  
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