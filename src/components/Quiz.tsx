'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, slideUp, buttonHover } from '../utils/animations';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  title: string;
  questions: Question[];
  onComplete: (score: number, total: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ title, questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleSelectAnswer = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      const score = calculateScore();
      onComplete(score, questions.length);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="card"
    >
      <motion.h2 
        variants={slideUp}
        className="text-2xl font-bold mb-5 sm:mb-6"
      >
        {title}
      </motion.h2>

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="questions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-5 sm:mb-6">
              <p className="text-sm text-gray-500 mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                  className="bg-primary rounded-full h-2.5"
                ></motion.div>
              </div>
            </div>

            <motion.div 
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 sm:mb-8"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4">
                {questions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.01 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`border p-3 sm:p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleSelectAnswer(index)}
                  >
                    <div className="flex items-center min-h-[44px]">
                      <motion.div
                        animate={selectedAnswers[currentQuestion] === index ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3 }}
                        className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-300'
                        }`}
                      >
                        <AnimatePresence>
                          {selectedAnswers[currentQuestion] === index && (
                            <motion.svg
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{ duration: 0.2 }}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </motion.svg>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <span className="text-sm sm:text-base">{option}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="flex justify-between gap-3">
              <motion.button
                whileHover={currentQuestion !== 0 ? buttonHover : {}}
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className={`flex-1 px-4 py-3 rounded-lg sm:px-5 sm:py-2.5 text-sm sm:text-base ${
                  currentQuestion === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Previous
              </motion.button>
              <motion.button
                whileHover={selectedAnswers[currentQuestion] !== -1 ? buttonHover : {}}
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === -1}
                className={`flex-1 px-4 py-3 rounded-lg sm:px-5 sm:py-2.5 text-sm sm:text-base ${
                  selectedAnswers[currentQuestion] === -1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-indigo-700'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="mb-6 sm:mb-8">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.2
                }}
                className="mx-auto w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-green-100 flex items-center justify-center mb-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 sm:h-14 sm:w-14 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <motion.h3 
                variants={slideUp}
                className="text-xl sm:text-2xl font-bold mb-2"
              >
                Quiz Completed!
              </motion.h3>
              <motion.p 
                variants={slideUp}
                className="text-base sm:text-lg mb-4"
              >
                You scored {calculateScore()} out of {questions.length}
              </motion.p>
              <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mb-5 sm:mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(calculateScore() / questions.length) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-green-500 rounded-full h-3 sm:h-4"
                ></motion.div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 max-h-60 sm:max-h-96 overflow-y-auto px-1 py-2 scroll-container">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className={`border p-3 sm:p-4 rounded-lg text-left ${
                    selectedAnswers[index] === question.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                  }`}
                >
                  <p className="font-semibold mb-2 text-sm sm:text-base">{question.question}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-1 sm:gap-0">
                    <div>
                      <span className="font-medium">Your answer: </span>
                      {selectedAnswers[index] >= 0
                        ? question.options[selectedAnswers[index]]
                        : 'No answer'}
                    </div>
                    {selectedAnswers[index] !== question.correctAnswer && (
                      <div className="text-red-600 mt-1 sm:mt-0">
                        <span className="font-medium">Correct answer: </span>
                        {question.options[question.correctAnswer]}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              whileHover={buttonHover}
              onClick={() => window.location.reload()}
              className="mt-6 sm:mt-8 btn btn-primary w-full sm:w-auto"
            >
              Retry Quiz
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Quiz; 