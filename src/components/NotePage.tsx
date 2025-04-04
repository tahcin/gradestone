'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
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
            if (entry.isIntersecting && entry.target.id) {
              setActiveHeading(entry.target.id);
            }
          });
        },
        { rootMargin: '-100px 0px -80% 0px' }
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
          className={`bg-gradient-to-r ${note.gradientFrom} ${note.gradientTo} ${note.darkGradientFrom} ${note.darkGradientTo} text-white p-6 md:p-8 rounded-xl mb-6 md:mb-8 shadow-lg`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{note.title}</h1>
          <p className="text-base md:text-lg mt-2 text-white/80">Module {moduleId}</p>
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
                rehypePlugins={[rehypeHighlight]}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
} 