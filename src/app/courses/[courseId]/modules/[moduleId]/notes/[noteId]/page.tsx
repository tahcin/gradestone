'use client';

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import { getCourseDetailsById } from '@/data/courses/courseDetails';
import { getNote as getWebDevNote } from '@/data/courses/web-development/notes';
import { getNote as getDataScienceNote } from '@/data/courses/data-science/notes';
import { getNote as getBlockchainNote } from '@/data/courses/blockchain-development/notes';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/atom-one-dark.css';

// Create a client component wrapper for the page content
import NotePage from '@/components/NotePage';

// This is a server component now
export default function NoteServerPage({ params }: {
  params: {
    courseId: string;
    moduleId: string;
    noteId: string;
  }
}) {
  const courseId = params.courseId;
  const moduleId = parseInt(params.moduleId);
  const noteId = parseInt(params.noteId);
  
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