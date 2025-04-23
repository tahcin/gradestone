import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { getCourseDetailsById } from '@/data/courses/courseDetails';
import { getNote as getPCNote } from '@/data/courses/persuasive-communication/notes';
import { getNote as getIKSNote } from '@/data/courses/indian-knowledge-system/notes';
import { getNote as getMicroeconomicsNote } from '@/data/courses/principles-of-microeconomics/notes';
import { getNote as getbseNote } from '@/data/courses/bse/notes';
import { getNote as getasbNote } from '@/data/courses/asb/notes';

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
    case 'persuasive-communication':
      note = getPCNote(moduleId, noteId);
      break;
    case 'indian-knowledge-system':
      note = getIKSNote(moduleId, noteId);
      break;
    case 'principles-of-microeconomics':
      note = getMicroeconomicsNote(moduleId, noteId);
      break;
    case 'bse':
      note = getbseNote(moduleId, noteId);
    break;
    case 'asb':
      note = getasbNote(moduleId, noteId);
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