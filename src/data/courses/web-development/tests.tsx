// Tests data for the Web Development course
export const webDevelopmentTests = {
  // Module 1, Lesson 2
  '1-2': {
    title: 'HTML & CSS Assessment',
    description: 'Test your understanding of HTML and CSS fundamentals with practical exercises.',
    questions: [
      {
        id: 1,
        question: 'Which HTML element is used to define the title of a document?',
        options: [
          '<head>',
          '<title>',
          '<header>',
          '<h1>'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Which CSS property is used to change the text color of an element?',
        options: [
          'font-color',
          'text-color',
          'color',
          'text-style'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'What does CSS stand for?',
        options: [
          'Creative Style Sheets',
          'Computer Style Sheets',
          'Cascading Style Sheets',
          'Colorful Style Sheets'
        ],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Which HTML attribute is used to define inline styles?',
        options: [
          'styles',
          'style',
          'class',
          'font'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Which CSS property is used to make text bold?',
        options: [
          'font-style',
          'text-style',
          'font-weight',
          'text-weight'
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'Which of the following is the correct way to create a responsive grid layout in CSS?',
        options: [
          'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));',
          'display: responsive-grid;',
          'display: flex; flex-wrap: responsive;',
          'display: grid; columns: responsive;'
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        question: 'Which HTML5 element defines a section in a document?',
        options: [
          '<div>',
          '<section>',
          '<article>',
          '<block>'
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'Which CSS property is used to add space between the border and content of an element?',
        options: [
          'margin',
          'spacing',
          'padding',
          'border-spacing'
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'Which of the following is NOT a valid CSS unit?',
        options: [
          'px',
          'em',
          'rem',
          'dm'
        ],
        correctAnswer: 3
      },
      {
        id: 10,
        question: 'Which HTML element is used to create an unordered list?',
        options: [
          '<ol>',
          '<list>',
          '<ul>',
          '<li>'
        ],
        correctAnswer: 2
      }
    ],
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    iconColor: 'text-blue-500',
    accentColor: 'bg-indigo-600',
    accentHoverColor: 'hover:bg-indigo-700',
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
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    iconColor: 'text-blue-500',
    accentColor: 'bg-indigo-600',
    accentHoverColor: 'hover:bg-indigo-700',
  },
  */
};

// Helper function to get a test by module ID and lesson ID
export function getTest(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return webDevelopmentTests[key as keyof typeof webDevelopmentTests];
} 