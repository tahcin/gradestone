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

interface PageParams {
  params: {
    courseId: string;
    moduleId: string;
    testId: string;
  };
}

export default function TestPage({ params }: PageParams) {
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

  // State for tracking user progress and answers
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(testData.questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Current question
  const currentQuestion = testData.questions[currentQuestionIndex];
  
  // Handle answer selection
  const handleAnswerSelect = (optionIndex: number) => {
    if (submitted) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  // Navigation functions
  const goToNextQuestion = () => {
    if (currentQuestionIndex < testData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Jump to specific question
  const jumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  // Submit test
  const submitTest = () => {
    setSubmitted(true);
    setShowResults(true);
  };

  // Calculate results
  const calculateResults = () => {
    let correctCount = 0;
    
    testData.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    return {
      score: correctCount,
      total: testData.questions.length,
      percentage: Math.round((correctCount / testData.questions.length) * 100)
    };
  };

  // Determine if all questions have been answered
  const allQuestionsAnswered = userAnswers.every(answer => answer !== -1);
  
  // Results view
  const renderResults = () => {
    const results = calculateResults();
    
    return (
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Test Results</h2>
        
        <div className="mb-8 text-center">
          <div className="text-5xl font-bold mb-2">{results.percentage}%</div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            You answered {results.score} out of {results.total} questions correctly
          </p>
        </div>
        
        <div className="mb-8 text-center">
          {results.percentage >= 70 ? (
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4">
              <p className="text-green-700 dark:text-green-400 font-medium">
                Congratulations! You've passed the test.
              </p>
            </div>
          ) : (
            <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg mb-4">
              <p className="text-amber-700 dark:text-amber-400 font-medium">
                You didn't pass this time. Review the material and try again!
              </p>
            </div>
          )}
        </div>

        {/* Answer Analysis */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Detailed Analysis</h3>
          
          <div className="space-y-6">
            {testData.questions.map((question, questionIndex) => {
              const userAnswer = userAnswers[questionIndex];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div 
                  key={questionIndex} 
                  className={`p-4 rounded-lg border ${
                    isCorrect 
                      ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20' 
                      : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                      isCorrect 
                        ? 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400' 
                        : 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-400'
                    }`}>
                      {isCorrect ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-lg">Question {questionIndex + 1}</h4>
                      <p className="mt-1 mb-3">{question.question}</p>
                      
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => {
                          const isUserSelection = userAnswer === optionIndex;
                          const isCorrectAnswer = question.correctAnswer === optionIndex;
                          
                          let optionClass = 'border dark:border-gray-700 bg-white dark:bg-gray-800';
                          if (isUserSelection && isCorrectAnswer) {
                            optionClass = 'border-green-500 bg-green-100 dark:bg-green-900/30 dark:border-green-600';
                          } else if (isUserSelection && !isCorrectAnswer) {
                            optionClass = 'border-red-500 bg-red-100 dark:bg-red-900/30 dark:border-red-600';
                          } else if (isCorrectAnswer) {
                            optionClass = 'border-green-500 bg-green-50 dark:bg-green-900/10 dark:border-green-700';
                          }
                          
                          return (
                            <div 
                              key={optionIndex}
                              className={`p-3 rounded-md ${optionClass} flex items-center`}
                            >
                              <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3">
                                {String.fromCharCode(65 + optionIndex)}
                              </div>
                              <div className="flex-grow">
                                {option}
                              </div>
                              {isUserSelection && (
                                <div className="flex-shrink-0 ml-2">
                                  <span className="text-sm font-medium">Your answer</span>
                                </div>
                              )}
                              {isCorrectAnswer && (
                                <div className="flex-shrink-0 ml-2">
                                  <span className="text-sm font-medium text-green-600 dark:text-green-400">Correct answer</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => {
              setUserAnswers(new Array(testData.questions.length).fill(-1));
              setCurrentQuestionIndex(0);
              setSubmitted(false);
              setShowResults(false);
            }}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Retry Test
          </button>
          
          <Link 
            href={`/courses/${courseId}`}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
          >
            Back to Course
          </Link>
          
          {hasNextModule && (
            <Link 
              href={`/courses/${courseId}/modules/${nextModule.id}/notes/${nextModuleFirstNote.id}`}
              className={`${course.accentColor} ${course.accentHoverColor} text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center gap-2`}
            >
              Next Module
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    );
  };

  // Question view
  const renderQuestion = () => {
    return (
      <div>
        {/* Question header */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Question {currentQuestionIndex + 1} of {testData.questions.length}</h3>
            <div className="text-sm text-gray-500">
              {userAnswers[currentQuestionIndex] !== -1 ? 'Answered' : 'Not answered'}
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className={`${course.accentColor} h-2 rounded-full`} 
              style={{ width: `${((currentQuestionIndex + 1) / testData.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Question */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
          
          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <div 
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`
                  p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${userAnswers[currentQuestionIndex] === index 
                    ? `${course.accentColor} text-white border-transparent` 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}
                `}
              >
                <div className="flex items-center">
                  <div className={`
                    flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 border-2
                    ${userAnswers[currentQuestionIndex] === index 
                      ? 'bg-white text-indigo-600 border-white' 
                      : 'border-gray-300 dark:border-gray-600'}
                  `}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-grow">
                    {option}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={goToPrevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 ${
              currentQuestionIndex === 0 
                ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' 
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </button>
          
          {currentQuestionIndex === testData.questions.length - 1 ? (
            <button
              onClick={submitTest}
              disabled={!allQuestionsAnswered}
              className={`
                px-6 py-2 rounded-md font-medium transition-colors
                ${allQuestionsAnswered 
                  ? `${course.accentColor} ${course.accentHoverColor} text-white` 
                  : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'}
              `}
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={goToNextQuestion}
              className={`flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white`}
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  };
  
  // Test overview and question selector
  const renderQuestionSelector = () => {
    return (
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold mb-4">Question Overview</h3>
        <div className="flex flex-wrap gap-2">
          {testData.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToQuestion(index)}
              className={`
                w-10 h-10 rounded-md flex items-center justify-center transition-colors
                ${currentQuestionIndex === index ? 'ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-gray-800' : ''}
                ${userAnswers[index] !== -1 
                  ? `${course.accentColor} text-white` 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Test Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={`bg-gradient-to-r ${course.gradientFrom} ${course.gradientTo} ${course.darkGradientFrom} ${course.darkGradientTo} text-white p-8 rounded-lg mb-8 shadow-lg`}
        >
          <h1 className="text-3xl md:text-4xl font-bold">{testData.title}</h1>
          <p className="text-lg mt-2 text-white/80">Module {moduleId} • {testData.questions.length} Questions</p>
        </motion.div>
        
        {/* Test Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="card"
        >
          {showResults ? renderResults() : (
            <>
              {renderQuestion()}
              {renderQuestionSelector()}
              
              {/* Bottom Navigation */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-center gap-4">
                <Link 
                  href={`/courses/${courseId}`}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                >
                  Back to Course
                </Link>
                
                {hasNextModule && (
                  <Link 
                    href={`/courses/${courseId}/modules/${nextModule.id}/notes/${nextModuleFirstNote.id}`}
                    className={`${course.accentColor} ${course.accentHoverColor} text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center gap-2`}
                  >
                    Next Module
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
} 