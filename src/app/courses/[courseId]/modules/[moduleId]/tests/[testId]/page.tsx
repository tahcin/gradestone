'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { getCourseDetailsById } from '@/data/courses/courseDetails';
import { getTest as getWebDevTest } from '@/data/courses/web-development/tests';
import { getTest as getDataScienceTest } from '@/data/courses/data-science/tests';
import { getTest as getBlockchainTest } from '@/data/courses/blockchain-development/tests';

// Create a client component wrapper for the page content
import TestPage from '@/components/TestPage';

// This is a server component now
export default function TestServerPage({ params }: {
  params: {
    courseId: string;
    moduleId: string;
    testId: string;
  }
}) {
  const courseId = params.courseId;
  const moduleId = parseInt(params.moduleId);
  const testId = parseInt(params.testId);
  
  const course = getCourseDetailsById(courseId);
  
  if (!course) {
    notFound();
  }
  
  // Find the module and test metadata
  const module = course.modules.find(m => m.id === moduleId);
  if (!module) {
    notFound();
  }
  
  const testMeta = module.lessons.find(l => l.id === testId && l.type === 'test');
  if (!testMeta) {
    notFound();
  }

  // Find the next module if it exists
  const nextModule = course.modules.find(m => m.id === moduleId + 1);
  const nextModuleFirstNote = nextModule?.lessons.find(l => l.type === 'note');
  const hasNextModule = !!nextModule && !!nextModuleFirstNote;

  // Get the test data based on the courseId
  let testData;
  switch (courseId) {
    case 'web-development':
      testData = getWebDevTest(moduleId, testId);
      break;
    case 'data-science':
      testData = getDataScienceTest(moduleId, testId);
      break;
    case 'blockchain-development':
      testData = getBlockchainTest(moduleId, testId);
      break;
    default:
      testData = null;
  }

  if (!testData) {
    notFound();
  }
  
  // Return the client component with all the props it needs
  return <TestPage 
    course={course}
    testData={testData}
    moduleId={moduleId}
    courseId={courseId}
    nextModule={nextModule} 
    nextModuleFirstNote={nextModuleFirstNote}
    hasNextModule={hasNextModule}
  />;
} 