// Course details - extended information for course detail pages
export const courseDetails = {
  'web-development': {
    title: 'Modern Web Development',
    description: 'Learn the latest technologies in web development including React, Node.js, and more.',
    overview: 'This comprehensive course covers everything you need to know to become a professional web developer. Starting with the fundamentals of HTML, CSS, and JavaScript, you will progress to learning modern frameworks and tools used in the industry today. By the end of this course, you will be able to build full-stack web applications using React and Node.js.',
    category: 'Development',
    level: 'Year 1',
    duration: '12 weeks',
    instructor: 'Alex Johnson',
    instructorBio: 'Alex is a senior web developer with over 10 years of experience in building web applications for major tech companies.',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    iconColor: 'text-blue-500',
    accentColor: 'bg-indigo-600',
    accentHoverColor: 'hover:bg-indigo-700',
    modules: [
      {
        id: 1,
        title: 'HTML & CSS Fundamentals',
        lessons: [
          { 
            id: 1, 
            title: 'HTML & CSS Notes', 
            type: 'note',
            description: 'Comprehensive notes covering HTML structure, elements, attributes, CSS selectors, and box model.'
          },
          { 
            id: 2, 
            title: 'HTML & CSS Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your understanding of HTML and CSS fundamentals with practical exercises.'
          },
        ],
      },
      {
        id: 2,
        title: 'JavaScript Essentials',
        lessons: [
          { 
            id: 1, 
            title: 'JavaScript Notes', 
            type: 'note',
            description: 'Detailed notes on JavaScript syntax, variables, functions, DOM manipulation, and event handling.'
          },
          { 
            id: 2, 
            title: 'JavaScript Assessment', 
            type: 'test', 
            questions: 12,
            description: 'Practical exercises to test your JavaScript skills with real-world scenarios.'
          },
        ],
      },
      {
        id: 3,
        title: 'React Fundamentals',
        lessons: [
          { 
            id: 1, 
            title: 'React Notes', 
            type: 'note',
            description: 'Comprehensive guide to React, including components, props, state, hooks, and component lifecycle.'
          },
          { 
            id: 2, 
            title: 'React Assessment', 
            type: 'test', 
            questions: 15,
            description: 'Build a small React application to demonstrate your understanding of React concepts.'
          },
        ],
      },
    ],
  },
  
  'data-science': {
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science, machine learning, and data visualization.',
    overview: 'This comprehensive course introduces you to the world of data science using Python. You will learn the essential Python libraries including NumPy, Pandas, and Matplotlib, and understand how to manipulate, analyze, and visualize data. By the end of this course, you will be able to build your own data analysis projects and prepare for more advanced topics in machine learning.',
    category: 'Data Science',
    level: 'Year 1',
    duration: '10 weeks',
    instructor: 'Sarah Chen',
    instructorBio: 'Sarah is a data scientist with experience in both academia and industry, specializing in statistical analysis and machine learning applications.',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-500',
    darkGradientFrom: 'dark:from-cyan-600',
    darkGradientTo: 'dark:to-blue-600',
    iconColor: 'text-cyan-500',
    accentColor: 'bg-cyan-600',
    accentHoverColor: 'hover:bg-cyan-700',
    modules: [
      {
        id: 1,
        title: 'Python Fundamentals',
        lessons: [
          { 
            id: 1, 
            title: 'Python Fundamentals', 
            type: 'note',
            description: 'Essential Python concepts for data science including variables, data types, control flow, and libraries.'
          },
          { 
            id: 2, 
            title: 'Python Fundamentals Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your understanding of Python basics and its application in data science.'
          },
        ],
      },
      {
        id: 2,
        title: 'Data Analysis',
        lessons: [
          { 
            id: 1, 
            title: 'Data Analysis with Pandas', 
            type: 'note',
            description: 'Learn how to use Pandas for data manipulation, cleaning, and analysis with practical examples.'
          },
          { 
            id: 2, 
            title: 'Pandas and Data Analysis Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your knowledge of data manipulation and analysis with Pandas.'
          },
        ],
      },
    ],
  },
  
  'blockchain-development': {
    title: 'Blockchain Development',
    description: 'Learn blockchain concepts, smart contracts, and build decentralized applications.',
    overview: 'This comprehensive course will take you from blockchain fundamentals to building decentralized applications (dApps) on Ethereum. You\'ll learn about blockchain architecture, consensus mechanisms, cryptography, and smart contract development using Solidity. By the end of this course, you\'ll be able to design, deploy, and interact with smart contracts, and build frontend interfaces for blockchain applications.',
    category: 'Development',
    level: 'Year 1',
    duration: '10 weeks',
    instructor: 'Elena Chen',
    instructorBio: 'Elena is a blockchain developer and consultant with expertise in Ethereum, Solidity, and Web3 development. She has worked with major DeFi protocols and helped multiple startups launch their blockchain products.',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-600',
    darkGradientFrom: 'dark:from-amber-600',
    darkGradientTo: 'dark:to-orange-700',
    iconColor: 'text-amber-500',
    accentColor: 'bg-orange-600',
    accentHoverColor: 'hover:bg-orange-700',
    modules: [
      {
        id: 1,
        title: 'Blockchain Fundamentals',
        lessons: [
          { 
            id: 1, 
            title: 'Introduction to Blockchain', 
            type: 'note',
            description: 'Learn the core concepts of blockchain technology, including distributed ledgers, consensus mechanisms, and cryptography.'
          },
          { 
            id: 2, 
            title: 'Blockchain Fundamentals Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your understanding of blockchain concepts and architecture.'
          },
        ],
      },
      {
        id: 2,
        title: 'Ethereum and Smart Contracts',
        lessons: [
          { 
            id: 1, 
            title: 'Smart Contracts and Ethereum', 
            type: 'note',
            description: 'Explore Ethereum, the EVM, and learn how to write and deploy smart contracts using Solidity.'
          },
          { 
            id: 2, 
            title: 'Smart Contracts and Ethereum Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your knowledge of Ethereum and smart contract development.'
          },
        ],
      },
      {
        id: 3,
        title: 'Building dApps',
        lessons: [
          { 
            id: 1, 
            title: 'Decentralized Applications', 
            type: 'note',
            description: 'Learn to build frontend interfaces for your smart contracts and create complete decentralized applications.'
          },
          { 
            id: 2, 
            title: 'dApp Development Assessment', 
            type: 'test', 
            questions: 8,
            description: 'Demonstrate your understanding of dApp architecture and implementation.'
          },
        ],
      },
    ],
  },
  
  // Template for adding a new course
  /* 
  'course-id': {
    title: 'Course Title',
    description: 'Course description',
    overview: 'Extended course overview',
    category: 'Category',
    level: 'Year 1',
    duration: 'Duration',
    instructor: 'Instructor Name',
    instructorBio: 'Instructor biography',
    gradientFrom: 'from-color-500',
    gradientTo: 'to-color-600',
    darkGradientFrom: 'dark:from-color-600',
    darkGradientTo: 'dark:to-color-700',
    iconColor: 'text-color-500',
    accentColor: 'bg-color-600',
    accentHoverColor: 'hover:bg-color-700',
    modules: [
      {
        id: 1,
        title: 'Module Title',
        lessons: [
          { 
            id: 1, 
            title: 'Note Title', 
            type: 'note',
            description: 'Note description'
          },
          { 
            id: 2, 
            title: 'Test Title', 
            type: 'test', 
            questions: 10,
            description: 'Test description'
          },
        ],
      },
      // Add more modules as needed
    ],
  },
  */
};

// Helper function to get course details by ID
export function getCourseDetailsById(courseId: string) {
  return courseDetails[courseId as keyof typeof courseDetails];
} 