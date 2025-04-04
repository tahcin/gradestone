import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getCourseDetailsById } from '@/data/courses/courseDetails';
import { getNote as getWebDevNote } from '@/data/courses/web-development/notes';
import { getNote as getDataScienceNote } from '@/data/courses/data-science/notes';
import { getNote as getBlockchainNote } from '@/data/courses/blockchain-development/notes';

// Import the client component directly
import NotePage from '@/components/NotePage';

// This is a server component
export default function NoteServerPage({ params }: {
  params: Promise<{
    courseId: string;
    moduleId: string;
    noteId: string;
  }>;
}) {
  // Unwrap params Promise
  const resolvedParams = use(params);
  const courseId = resolvedParams.courseId;
  const moduleId = parseInt(resolvedParams.moduleId);
  const noteId = parseInt(resolvedParams.noteId);
  
  const course = getCourseDetailsById(courseId);
  
  if (!course) {
    notFound();
  }
  
  // Get the appropriate note based on the courseId
  let note;
  switch (courseId) {
    case 'web-development':
      note = getWebDevNote(moduleId, noteId);
      break;
    case 'data-science':
      note = getDataScienceNote(moduleId, noteId);
      break;
    case 'blockchain-development':
      note = getBlockchainNote(moduleId, noteId);
      break;
    default:
      note = null;
  }
  
  if (!note) {
    notFound();
  }
  
  // Find the corresponding test in the same module
  const module = course.modules.find(m => m.id === moduleId);
  const test = module?.lessons.find(l => l.type === 'test');
  
  // Render the client component with all the props it needs
  return <NotePage 
    course={course}
    note={note}
    moduleId={moduleId}
    courseId={courseId}
    test={test}
  />;
} 