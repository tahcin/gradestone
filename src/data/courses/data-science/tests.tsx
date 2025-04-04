// Tests data for the Data Science course
export const dataScienceTests = {
  // Module 1, Lesson 2
  '1-2': {
    title: 'Python Fundamentals Assessment',
    description: 'Test your understanding of Python basics for data science.',
    questions: [
      {
        id: 1,
        question: 'Which of the following is NOT a core data type in Python?',
        options: [
          'List',
          'Dictionary',
          'Array',
          'Tuple'
        ],
        correctAnswer: 2
      },
      {
        id: 2,
        question: 'What will be the output of the following code?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)',
        options: [
          '[1, 2, 3]',
          '[1, 2, 3, 4]',
          '[1, 2, 3, [4]]',
          'Error'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'Which library is specifically designed for data manipulation and analysis in Python?',
        options: [
          'NumPy',
          'Matplotlib',
          'Pandas',
          'SciPy'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'How do you import the numpy library with the standard alias?',
        options: [
          'import numpy',
          'import numpy as num',
          'import numpy as np',
          'from numpy import *'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'What does the following code do?\n\nrange(1, 10, 2)',
        options: [
          'Creates a list of numbers from 1 to 10 with step 2',
          'Creates a range object with values [1, 3, 5, 7, 9]',
          'Creates a range object with values [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]',
          'Creates a list of 2 numbers: 1 and 10'
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'What is the correct way to create a 3x3 matrix filled with zeros using NumPy?',
        options: [
          'np.zeros(3, 3)',
          'np.zeros([3, 3])',
          'np.zeros((3, 3))',
          'np.array([0, 0, 0], [0, 0, 0], [0, 0, 0])'
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'Which of the following is the correct way to check if a key exists in a dictionary?',
        options: [
          'if key in dict:',
          'if key exists in dict:',
          'if dict.has_key(key):',
          'if dict.contains(key):'
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'What is a lambda function in Python?',
        options: [
          'A built-in function that can only be used with lists',
          'A function defined using the def keyword',
          'An anonymous function defined using the lambda keyword',
          'A deprecated function type that should be avoided'
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'What does the following list comprehension produce?\n\n[x**2 for x in range(5) if x % 2 == 0]',
        options: [
          '[0, 4, 16]',
          '[0, 1, 4, 9, 16]',
          '[0, 2, 4]',
          '[0, 4]'
        ],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Which library would you use to create visualizations in Python?',
        options: [
          'Pandas',
          'NumPy',
          'Matplotlib',
          'SciPy'
        ],
        correctAnswer: 2
      }
    ],
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-purple-500',
    darkGradientFrom: 'dark:from-blue-500',
    darkGradientTo: 'dark:to-purple-600',
    iconColor: 'text-blue-500',
    accentColor: 'bg-purple-500',
    accentHoverColor: 'hover:bg-purple-600'
  },
  
  // Module 2, Lesson 2
  '2-2': {
    title: 'Pandas and Data Analysis Assessment',
    description: 'Test your knowledge of data manipulation and analysis with Pandas.',
    questions: [
      {
        id: 1,
        question: 'Which Pandas method is used to display the first 5 rows of a DataFrame?',
        options: [
          'df.first()',
          'df.head()',
          'df.top()',
          'df.start()'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What does the following code return?\n\ndf.shape',
        options: [
          'The number of rows in the DataFrame',
          'The number of columns in the DataFrame',
          'A tuple containing (rows, columns)',
          'The memory usage of the DataFrame'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'How do you select a specific column "Age" from a DataFrame df?',
        options: [
          'df.Age',
          'df["Age"]',
          'df.get("Age")',
          'Both A and B are correct'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'Which method is used to handle missing values in a DataFrame?',
        options: [
          'df.fillna()',
          'df.dropna()',
          'df.na()',
          'Both A and B are correct'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'What does df.describe() show?',
        options: [
          'Information about the DataFrame structure',
          'The first few rows of the DataFrame',
          'Summary statistics of numerical columns',
          'A description of the column data types'
        ],
        correctAnswer: 2
      }
    ],
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-purple-500',
    darkGradientFrom: 'dark:from-blue-500',
    darkGradientTo: 'dark:to-purple-600',
    iconColor: 'text-blue-500',
    accentColor: 'bg-purple-500',
    accentHoverColor: 'hover:bg-purple-600'
  },
  
  // Template for adding a new test
  /*
  'module-lesson': {
    title: 'Test Title',
    description: 'Test description',
    questions: [
      {
        id: 1,
        question: 'Question text?',
        options: [
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4'
        ],
        correctAnswer: 0 // Index of the correct option (0-based)
      },
      // Add more questions as needed
    ],
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-purple-500',
    darkGradientFrom: 'dark:from-blue-500',
    darkGradientTo: 'dark:to-purple-600',
    iconColor: 'text-blue-500',
    accentColor: 'bg-purple-500',
    accentHoverColor: 'hover:bg-purple-600'
  },
  */
};

// Helper function to get a test by module ID and lesson ID
export function getTest(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return dataScienceTests[key as keyof typeof dataScienceTests];
} 