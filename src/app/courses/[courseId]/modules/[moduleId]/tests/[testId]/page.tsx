import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getCourseDetailsById } from '@/data/courses/courseDetails';
import { getTest as getWebDevTest } from '@/data/courses/web-development/tests';
import { getTest as getDataScienceTest } from '@/data/courses/data-science/tests';
import { getTest as getBlockchainTest } from '@/data/courses/blockchain-development/tests';

// Import the client component directly
import TestPage from '@/components/TestPage';

// This is a server component
export default function TestServerPage({ params }: {
  params: Promise<{
    courseId: string;
    moduleId: string;
    testId: string;
  }>;
}) {
  // Unwrap params Promise
  const resolvedParams = use(params);
  const courseId = resolvedParams.courseId;
  const moduleId = parseInt(resolvedParams.moduleId);
  const testId = parseInt(resolvedParams.testId);
  
  const course = getCourseDetailsById(courseId);
  
  if (!course) {
    notFound();
  }
  
  // Get the appropriate test based on the courseId
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
  
  // Find the current module index and check if there's a next module
  const currentModuleIndex = course.modules.findIndex(m => m.id === moduleId);
  const hasNextModule = currentModuleIndex < course.modules.length - 1;
  
  // Get next module and its first note if available
  let nextModule = null;
  let nextModuleFirstNote = null;
  
  if (hasNextModule) {
    nextModule = course.modules[currentModuleIndex + 1];
    const firstLesson = nextModule.lessons.find(l => l.type === 'note');
    if (firstLesson) {
      nextModuleFirstNote = firstLesson;
    }
  }
  
  // Render the client component with all the props it needs
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