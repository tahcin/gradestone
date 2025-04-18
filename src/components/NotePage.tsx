'use client';

import React, { useState, useEffect } from 'react';
import ChatBot from './ChatBot';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/atom-one-dark.css';

interface NotePageProps {
  course: any;
  note: any;
  moduleId: number;
  courseId: string;
  test: any;
}

export default function NotePage({ course, note, moduleId, courseId, test }: NotePageProps) {
  // State for table of contents
  const [tableOfContents, setTableOfContents] = useState<{id: string, text: string, level: number}[]>([]);
  const [activeHeading, setActiveHeading] = useState('');
  const [tocOpen, setTocOpen] = useState(false);
  
  // Extract headings for TOC
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const headings = Array.from(document.querySelectorAll('.note-content h1, .note-content h2, .note-content h3'));
      const toc = headings.map(heading => ({
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      }));
      setTableOfContents(toc);
      
      // Set up intersection observer for headings
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveHeading(entry.target.id);
            }
          });
        },
        { 
          rootMargin: '-20% 0px -60% 0px',
          threshold: [0, 0.25, 0.5, 0.75, 1]
        }
      );
      
      headings.forEach(heading => observer.observe(heading));
      
      return () => {
        headings.forEach(heading => observer.unobserve(heading));
      };
    }
  }, [note.content]);
  
  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
        {/* Note Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={`bg-gradient-to-r ${course.modules[moduleId - 1]?.gradientFrom || course.gradientFrom} ${course.modules[moduleId - 1]?.gradientTo || course.gradientTo} ${course.modules[moduleId - 1]?.darkGradientFrom || course.darkGradientFrom} ${course.modules[moduleId - 1]?.darkGradientTo || course.darkGradientTo} text-white p-6 md:p-8 rounded-xl mb-6 md:mb-8 shadow-lg`}
        >
          <div className="text-base md:text-lg mb-2 text-white/90 font-medium">{course.title}</div>
          {/* Use flex-col on small screens, flex-row on sm and up */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            {/* Add margin-bottom on small screens */}
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{note.title}</h1>
              <p className="text-base md:text-lg mt-2 text-white/80">Module {moduleId}</p>
            </div>
            <Link 
              href={`/courses/${courseId}/modules/${moduleId}/mindmaps/3`}
              className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              View Mindmap
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 128 128" fill="currentColor" xmlSpace="preserve">
                <path d="M62 0h4v7.66h-4zM52.167 1.294l1.983 7.398-3.864 1.036-1.983-7.399zM39.139 6.126l3.828 6.633-3.464 2-3.829-6.633zM27.808 14.162l5.416 5.418-2.829 2.828-5.416-5.418zM18.937 24.86l6.633 3.83-2 3.463-6.633-3.83zM13.144 37.485l7.399 1.982-1.035 3.864-7.399-1.981zM10.813 51.185h7.659v4h-7.659zM109.527 51.189h7.66v4h-7.66zM114.86 37.488l1.036 3.865-7.395 1.981-1.035-3.865zM109.06 24.862l2 3.464-6.633 3.829-2-3.464zM100.197 14.17l2.83 2.828-5.414 5.418-2.83-2.828zM88.864 6.124l3.464 1.999-3.826 6.633-3.465-1.998zM75.835 1.299l3.863 1.034-1.98 7.398-3.863-1.034z"/>
                <g>
                  <path d="M83.13 108.244H44.123l-1.996-1.866c-.221-3.283-.915-7.772-2.968-10.509C23.88 76.207 23.452 57.417 23.452 57.233h4c0 .17.405 17.574 14.887 36.208 2.25 3 3.213 7.25 3.613 10.803h35.36c.419-3.551 1.401-7.8 3.643-10.778 14.507-18.682 14.912-36.063 14.912-36.233h4c0 .184-.428 18.951-15.734 38.663-2.046 2.718-2.767 7.21-3.007 10.495l-1.996 1.853z"/>
                  <path d="M38.817 104.695h49.685v4H38.817zM38.817 114.348h49.685v4H38.817zM46.436 124h34.447v4H46.436z"/>
                  <path d="M42.582 107.209h4v9.164h-4zM53.562 39.61h-4a4.735 4.735 0 0 0-4.729-4.729h-6.549v-4h6.549c4.813 0 8.729 3.916 8.729 8.729z"/>
                  <path d="M61.703 105.549h-4V32.632c0-4.463-3.631-8.095-8.093-8.095-4.464 0-8.096 3.631-8.096 8.095h-4c0-6.669 5.426-12.095 12.096-12.095 6.668 0 12.093 5.426 12.093 12.095v72.917z"/>
                  <path d="M38.284 48.365c-4.814 0-8.73-3.916-8.73-8.728 0-4.814 3.916-8.731 8.73-8.731h1.409v4h-1.409a4.736 4.736 0 0 0-4.73 4.731 4.734 4.734 0 0 0 4.73 4.728v4z"/>
                  <path d="M27.369 53.822h-4c0-5.315 4.323-9.639 9.638-9.639h3.276v4h-3.276a5.644 5.644 0 0 0-5.638 5.639zM49.453 48.032H46.61a5.281 5.281 0 0 1-5.274-5.276v-3.021h4v3.021c0 .704.571 1.276 1.274 1.276h2.843v4zM77.757 39.608h-4c0-4.812 3.916-8.727 8.729-8.727h6.548v4h-6.548a4.733 4.733 0 0 0-4.729 4.727z"/>
                  <path d="M69.613 105.547h-4V32.632c0-6.669 5.426-12.095 12.095-12.095 6.67 0 12.097 5.426 12.097 12.095h-4c0-4.463-3.632-8.095-8.097-8.095-4.464 0-8.095 3.631-8.095 8.095v72.915z"/>
                  <path d="M89.034 48.365v-4a4.736 4.736 0 0 0 4.731-4.729 4.736 4.736 0 0 0-4.731-4.729h-1.409v-4h1.409c4.814 0 8.731 3.916 8.731 8.729.001 4.813-3.916 8.729-8.731 8.729z"/>
                  <path d="M103.95 53.82h-4a5.645 5.645 0 0 0-5.64-5.637h-3.274v-4h3.274c5.316 0 9.64 4.323 9.64 9.637z"/>
                  <g><path d="M80.709 48.032h-2.843v-4h2.843c.702 0 1.273-.573 1.273-1.276v-3.021h4v3.021a5.28 5.28 0 0 1-5.273 5.276z"/></g>
                  <g><path d="M24.815 57.735h33.924v4H24.815z"/></g>
                  <g><path d="M70.047 57.735h33.139v4H70.047z"/></g>
                </g>
              </svg>
            </Link>
          </div>
        </motion.div>
        
        {/* Note Content with TOC */}
        <div className="lg:flex lg:gap-8">
          {/* Table of Contents (Desktop) */}
          {tableOfContents.length > 0 && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="hidden lg:block lg:w-1/4 sticky top-20 self-start h-[calc(100vh-5rem)] overflow-y-auto pb-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 mb-6 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                  Contents
                </h3>
                <nav className="overflow-y-auto max-h-[calc(100vh-12rem)]">
                  <ul className="space-y-2.5">
                    {tableOfContents.map((item) => (
                      <li key={item.id} style={{ paddingLeft: `${(item.level - 1) * 0.75}rem` }}>
                        <a 
                          href={`#${item.id}`}
                          className={`block text-sm py-1 transition-colors rounded px-2 ${
                            activeHeading === item.id
                              ? `bg-${course.iconColor}/10 text-${course.iconColor} font-medium`
                              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30'
                          }`}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
          
          {/* Main Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className={`card prose prose-lg dark:prose-invert ${tableOfContents.length > 0 ? 'lg:w-3/4' : 'w-full'} max-w-none prose-headings:scroll-mt-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700`}
          >
            {/* Mobile Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className={`lg:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700 ${tocOpen ? 'sticky top-20 z-30 shadow-md' : ''}`}>
                <details className="group" onToggle={(e) => setTocOpen((e.target as HTMLDetailsElement).open)}>
                  <summary className="list-none flex justify-between items-center cursor-pointer">
                    <h3 className="text-base font-medium flex items-center text-gray-900 dark:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                      Contents
                    </h3>
                    <span className="transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <nav className="mt-4 pl-1 max-h-[50vh] overflow-y-auto">
                    <ul className="space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                      {tableOfContents.map((item) => (
                        <li key={item.id} style={{ marginLeft: `${(item.level - 1) * 0.75}rem` }}>
                          <a 
                            href={`#${item.id}`}
                            className={`block text-sm py-1 pl-3 border-l-2 -ml-0.5 transition-colors ${
                              activeHeading === item.id
                                ? `border-${course.iconColor} text-${course.iconColor} font-medium`
                                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </details>
              </div>
            )}
            
            {/* Markdown Content with Enhanced Styling */}
            <div className="note-content">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => {
                    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-');
                    return <h1 id={id} className="text-2xl sm:text-3xl font-bold mt-10 mb-6 pb-2 border-b border-gray-200 dark:border-gray-700" {...props} />;
                  },
                  h2: ({node, ...props}) => {
                    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-');
                    return (
                      <h2 id={id} className="group flex items-center text-xl sm:text-2xl font-bold mt-8 mb-4" {...props}>
                        <a href={`#${id}`} className="invisible group-hover:visible absolute -ml-6 pr-2">
                          <span className={`text-${course.iconColor} opacity-70 hover:opacity-100 transition`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </a>
                        {props.children}
                      </h2>
                    );
                  },
                  h3: ({node, ...props}) => {
                    const id = props.children?.toString().toLowerCase().replace(/\s+/g, '-');
                    return <h3 id={id} className="text-lg sm:text-xl font-semibold mt-6 mb-3" {...props} />;
                  },
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-gray-800 dark:text-gray-200" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-5 md:pl-8 mb-6 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal pl-5 md:pl-8 mb-6 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="pl-2 marker:text-gray-500 dark:marker:text-gray-400" {...props} />,
                  code: ({node, inline, className, children, ...props}: {
                    node?: any;
                    inline?: boolean;
                    className?: string;
                    children?: React.ReactNode;
                  }) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="relative group my-6 rounded-lg overflow-hidden shadow-md">
                        <div className="absolute top-0 right-0 bg-gray-700/70 dark:bg-indigo-800/90 rounded-bl text-xs text-white/90 px-3 py-1.5 font-mono font-medium z-10">
                          {match[1]}
                        </div>
                        <pre className="rounded-lg p-4 pt-8 pb-6 overflow-x-auto bg-gray-800 dark:bg-gray-900 text-white text-sm sm:text-base dark:border-2 dark:border-indigo-700/50">
                          <code className={className} {...props}>
                            {children}
                          </code>
                        </pre>
                      </div>
                    ) : (
                      <code className="bg-gray-100 dark:bg-indigo-900/50 px-1.5 py-0.5 rounded text-sm font-mono text-red-500 dark:text-amber-300" {...props}>
                        {children}
                      </code>
                    );
                  },
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-blue-300 dark:border-blue-700 pl-4 italic text-gray-700 dark:text-gray-300 my-6 bg-blue-50 dark:bg-blue-900/20 py-2 rounded-r-lg" {...props} />
                  ),
                  a: ({node, ...props}) => (
                    <a className={`text-${course.iconColor} hover:underline transition-colors font-medium`} {...props} />
                  ),
                  img: ({node, ...props}) => (
                    <div className="my-8 overflow-hidden rounded-lg shadow-lg">
                      <img 
                        {...props} 
                        className="w-full h-auto object-cover" 
                        alt={props.alt || 'Course image'} 
                        loading="lazy"
                      />
                      {props.alt && (
                        <div className="bg-white dark:bg-gray-800 p-3 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            {props.alt}
                          </p>
                        </div>
                      )}
                    </div>
                  ),
                  table: ({node, ...props}) => (
                    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
                    </div>
                  ),
                  th: ({node, ...props}) => (
                    <th className="bg-gray-50 dark:bg-gray-800 px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white" {...props} />
                  ),
                  td: ({node, ...props}) => (
                    <td className="px-4 py-3 text-sm border-t border-gray-200 dark:border-gray-700" {...props} />
                  ),
                  hr: ({node, ...props}) => (
                    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
                  ),
                }}
              >
                {note.content}
              </Markdown>
            </div>
            
            {/* Bottom Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-center gap-4 not-prose">
              <Link 
                href={`/courses/${courseId}`}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Back to Course
              </Link>
              
              {test && (
                <Link 
                  href={`/courses/${courseId}/modules/${moduleId}/tests/${test.id}`}
                  className={`${course.accentColor} ${course.accentHoverColor} text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2`}
                >
                  Take Test
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              )}
            </div>

            {/* Chat Bot */}
            <ChatBot noteContent={note.content} iconColor={course.iconColor} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}