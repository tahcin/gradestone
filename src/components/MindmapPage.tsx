'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/animations';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChatBot from './ChatBot';


interface MindmapPageProps {
  course: any;
  mindmap: any;
  moduleId: number;
  courseId: string;
  test: any;
}

export default function MindmapPage({ course, mindmap, moduleId, courseId, test }: MindmapPageProps) {
  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mindmap Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={`bg-gradient-to-r ${course.modules[moduleId - 1]?.gradientFrom || course.gradientFrom} ${course.modules[moduleId - 1]?.gradientTo || course.gradientTo} ${course.modules[moduleId - 1]?.darkGradientFrom || course.darkGradientFrom} ${course.modules[moduleId - 1]?.darkGradientTo || course.darkGradientTo} text-white p-6 md:p-8 rounded-xl mb-6 md:mb-8 shadow-lg`}
        >
          <div className="text-base md:text-lg mb-2 text-white/90 font-medium">{course.title}</div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{mindmap.title}</h1>
          <p className="text-base md:text-lg mt-2 text-white/80">Module {moduleId}</p>
        </motion.div>
        
        {/* Mindmap Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="card prose prose-lg dark:prose-invert w-full max-w-none prose-headings:scroll-mt-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700"
        >
          {/* Markdown Content with Enhanced Styling */}
          <div className="mindmap-content">
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
                a: ({node, ...props}) => {
                  const href = props.href || '';
                  if (href.endsWith('.pdf')) {
                    return (
                      <div className="my-8">
                        <iframe
                          src={href}
                          title="PDF Viewer"
                          className="w-full h-[600px] rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg"
                          allow="autoplay"
                        />
                        <div className="mt-2 text-center">
                          <a href={href} target="_blank" rel="noopener noreferrer" className={`text-${course.iconColor} underline font-medium`}>Open PDF in new tab</a>
                        </div>
                      </div>
                    );
                  }
                  return <a className={`text-${course.iconColor} hover:underline transition-colors font-medium`} {...props} />;
                },
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
              {mindmap.content}
            </Markdown>
          </div>
          
          {/* Bottom Navigation */}
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-center gap-4 not-prose">
            <Link 
              href={`/courses/${courseId}/modules/${moduleId}/notes/1`}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to Notes
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
          <ChatBot noteContent={mindmap.content} iconColor={course.iconColor} />
        </motion.div>
      </div>
    </div>
  );
}