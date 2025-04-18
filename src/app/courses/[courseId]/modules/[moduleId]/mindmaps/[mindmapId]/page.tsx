import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getCourseDetailsById } from '@/data/courses/courseDetails';
import { getMindmap as getPCMindmap } from '@/data/courses/persuasive-communication/mindmaps';
import { getMindmap as getIKSMindmap } from '@/data/courses/indian-knowledge-system/mindmaps';
import { getMindmap as getMicroeconomicsMindmap } from '@/data/courses/principles-of-microeconomics/mindmaps';

// Import the client component directly
import MindmapPage from '@/components/MindmapPage';

// This is a server component
export default function MindmapServerPage({ params }: {
  params: Promise<{
    courseId: string;
    moduleId: string;
    mindmapId: string;
  }>;
}) {
  // Unwrap params Promise
  const resolvedParams = use(params);
  const courseId = resolvedParams.courseId;
  const moduleId = parseInt(resolvedParams.moduleId);
  const mindmapId = parseInt(resolvedParams.mindmapId);
  
  const course = getCourseDetailsById(courseId);
  
  if (!course) {
    notFound();
  }
  
  // Get the appropriate mindmap based on the courseId
  let mindmap;
  switch (courseId) {
    case 'persuasive-communication':
      mindmap = getPCMindmap(moduleId, mindmapId);
      break;
    case 'indian-knowledge-system':
      mindmap = getIKSMindmap(moduleId, mindmapId);
      break;
    case 'principles-of-microeconomics':
      mindmap = getMicroeconomicsMindmap(moduleId, mindmapId);
      break;
    default:
      mindmap = null;
  }
  
  if (!mindmap) {
    notFound();
  }
  
  // Find the corresponding test in the same module
  const module = course.modules.find(m => m.id === moduleId);
  const test = module?.lessons.find(l => l.type === 'test');
  
  // Render the client component with all the props it needs
  return <MindmapPage 
    course={course}
    mindmap={mindmap}
    moduleId={moduleId}
    courseId={courseId}
    test={test}
  />;
}