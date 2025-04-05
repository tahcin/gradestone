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
  
  'persuasive-communication': {
    title: 'Persuasive Communication',
    description: 'Develop effective persuasion techniques and communication skills for professional and academic settings.',
    overview: 'This comprehensive course teaches you the art and science of persuasive communication. You will learn how to craft compelling messages, understand your audience, and deliver presentations that inspire action. Through practical exercises and real-world case studies, you will develop the skills needed to influence others ethically and effectively in various professional and academic contexts.',
    category: 'Communication',
    level: 'Year 1',
    duration: '8 weeks',
    instructor: 'Dr. Maya Patel',
    instructorBio: 'Dr. Patel is a communication expert with over 15 years of experience in corporate training and academia. She has published numerous articles on persuasion techniques and has consulted for Fortune 500 companies on improving their communication strategies.',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-600',
    darkGradientFrom: 'dark:from-purple-600',
    darkGradientTo: 'dark:to-pink-700',
    iconColor: 'text-purple-500',
    accentColor: 'bg-purple-600',
    accentHoverColor: 'hover:bg-purple-700',
    modules: [
      {
        id: 1,
        title: 'Principles of Persuasion',
        lessons: [
          { 
            id: 1, 
            title: 'Fundamentals of Persuasion', 
            type: 'note',
            description: 'Learn the core principles of persuasion including ethos, pathos, and logos, and how to apply them effectively.'
          },
          { 
            id: 2, 
            title: 'Persuasion Principles Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your understanding of persuasion principles through scenario-based questions.'
          },
        ],
      },
      {
        id: 2,
        title: 'Audience Analysis',
        lessons: [
          { 
            id: 1, 
            title: 'Understanding Your Audience', 
            type: 'note',
            description: 'Learn techniques for analyzing your audience and tailoring your message to their needs, values, and expectations.'
          },
          { 
            id: 2, 
            title: 'Audience Analysis Assessment', 
            type: 'test', 
            questions: 8,
            description: 'Apply audience analysis techniques to various communication scenarios.'
          },
        ],
      },
      {
        id: 3,
        title: 'Crafting Persuasive Messages',
        lessons: [
          { 
            id: 1, 
            title: 'Message Structure and Delivery', 
            type: 'note',
            description: 'Learn how to structure persuasive messages and deliver them effectively across different mediums.'
          },
          { 
            id: 2, 
            title: 'Message Crafting Assessment', 
            type: 'test', 
            questions: 12,
            description: 'Create and evaluate persuasive messages for different contexts and audiences.'
          },
        ],
      },
    ],
  },
  
  'indian-knowledge-system': {
    title: 'Indian Knowledge System',
    description: 'Explore the rich heritage of Indian knowledge traditions, philosophies, and their modern applications.',
    overview: 'This course offers a comprehensive exploration of India\'s ancient knowledge systems and their relevance in the contemporary world. From Vedic mathematics to Ayurveda, from philosophical traditions to architectural principles, you will discover the depth and breadth of Indian intellectual heritage. The course emphasizes both theoretical understanding and practical applications of these knowledge systems in solving modern challenges.',
    category: 'Humanities',
    level: 'Year 1',
    duration: '10 weeks',
    instructor: 'Prof. Rajesh Sharma',
    instructorBio: 'Prof. Sharma is a renowned scholar of Indian philosophy and knowledge systems with over 20 years of teaching experience. He has authored several books on the subject and has been instrumental in integrating traditional knowledge with modern education systems.',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-red-600',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-red-500',
    accentColor: 'bg-red-600',
    accentHoverColor: 'hover:bg-red-700',
    modules: [
      {
        id: 1,
        title: 'Philosophical Foundations',
        lessons: [
          { 
            id: 1, 
            title: 'Indian Philosophical Systems', 
            type: 'note',
            description: 'Explore the six major schools of Indian philosophy (Shad Darshana) and their fundamental principles.'
          },
          { 
            id: 2, 
            title: 'Philosophy Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your understanding of Indian philosophical concepts and their interconnections.'
          },
        ],
      },
      {
        id: 2,
        title: 'Scientific Traditions',
        lessons: [
          { 
            id: 1, 
            title: 'Mathematics and Astronomy', 
            type: 'note',
            description: 'Learn about Vedic mathematics, ancient Indian astronomical knowledge, and their contributions to global scientific development.'
          },
          { 
            id: 2, 
            title: 'Scientific Traditions Assessment', 
            type: 'test', 
            questions: 8,
            description: 'Apply ancient mathematical techniques and evaluate astronomical concepts from Indian traditions.'
          },
        ],
      },
      {
        id: 3,
        title: 'Modern Applications',
        lessons: [
          { 
            id: 1, 
            title: 'Contemporary Relevance', 
            type: 'note',
            description: 'Discover how Indian knowledge systems are being applied in fields like sustainable development, health, and education today.'
          },
          { 
            id: 2, 
            title: 'Applications Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Analyze case studies of successful integration of traditional knowledge in modern contexts.'
          },
        ],
      },
    ],
  },
  
  'principles-of-microeconomics': {
    title: 'Principles of Microeconomics',
    description: 'Understand fundamental microeconomic concepts, market structures, and decision-making processes.',
    overview: 'This course introduces you to the fundamental principles of microeconomics, focusing on how individuals and businesses make decisions in a world of scarcity. You will learn about supply and demand, market structures, consumer behavior, and the role of government in the economy. Through real-world examples and case studies, you will develop analytical skills to understand economic issues and evaluate policy options.',
    category: 'Economics',
    level: 'Year 1',
    duration: '12 weeks',
    instructor: 'Dr. Arun Kapoor',
    instructorBio: 'Dr. Kapoor is an economist with expertise in microeconomic theory and its applications. He has worked with policy think tanks and has extensive experience teaching economics to undergraduate students, making complex concepts accessible and engaging.',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-teal-600',
    darkGradientFrom: 'dark:from-green-600',
    darkGradientTo: 'dark:to-teal-700',
    iconColor: 'text-green-500',
    accentColor: 'bg-green-600',
    accentHoverColor: 'hover:bg-green-700',
    modules: [
      {
        id: 1,
        title: 'Basic Economic Concepts',
        lessons: [
          { 
            id: 1, 
            title: 'Scarcity and Choice', 
            type: 'note',
            description: 'Understand the fundamental economic problem of scarcity and how it leads to the need for choice and opportunity cost.'
          },
          { 
            id: 2, 
            title: 'Economic Concepts Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your understanding of basic economic principles through problem-solving exercises.'
          },
        ],
      },
      {
        id: 2,
        title: 'Supply and Demand',
        lessons: [
          { 
            id: 1, 
            title: 'Market Equilibrium', 
            type: 'note',
            description: 'Learn how supply and demand interact to determine prices and quantities in competitive markets.'
          },
          { 
            id: 2, 
            title: 'Supply and Demand Assessment', 
            type: 'test', 
            questions: 12,
            description: 'Apply supply and demand analysis to predict market outcomes under different scenarios.'
          },
        ],
      },
      {
        id: 3,
        title: 'Market Structures',
        lessons: [
          { 
            id: 1, 
            title: 'Competition and Market Power', 
            type: 'note',
            description: 'Explore different market structures from perfect competition to monopoly and their implications for efficiency.'
          },
          { 
            id: 2, 
            title: 'Market Structures Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Analyze firm behavior and market outcomes under different competitive conditions.'
          },
        ],
      },
    ],
  },
  
  'foundation-of-business-communication-ii': {
    title: 'Foundation of Business Communication 2',
    description: 'Build advanced business communication skills for effective professional interactions and presentations.',
    overview: 'Building on the fundamentals of business communication, this course focuses on advanced communication strategies for complex business environments. You will develop skills in crafting persuasive business proposals, managing crisis communication, facilitating effective meetings, and delivering impactful presentations. The course emphasizes practical applications through case studies, role-playing, and real-world projects.',
    category: 'Business',
    level: 'Year 1',
    duration: '10 weeks',
    instructor: 'Prof. Neha Gupta',
    instructorBio: 'Prof. Gupta brings 15 years of corporate communication experience to the classroom. She has worked as a communication consultant for multinational corporations and specializes in helping professionals overcome communication barriers in diverse business settings.',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    darkGradientFrom: 'dark:from-blue-600',
    darkGradientTo: 'dark:to-indigo-700',
    iconColor: 'text-blue-500',
    accentColor: 'bg-blue-600',
    accentHoverColor: 'hover:bg-blue-700',
    modules: [
      {
        id: 1,
        title: 'Advanced Written Communication',
        lessons: [
          { 
            id: 1, 
            title: 'Business Proposals and Reports', 
            type: 'note',
            description: 'Learn techniques for writing persuasive business proposals, comprehensive reports, and effective business cases.'
          },
          { 
            id: 2, 
            title: 'Written Communication Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Apply advanced writing techniques to create professional business documents.'
          },
        ],
      },
      {
        id: 2,
        title: 'Presentation Skills',
        lessons: [
          { 
            id: 1, 
            title: 'Impactful Business Presentations', 
            type: 'note',
            description: 'Develop skills for designing and delivering compelling presentations that achieve business objectives.'
          },
          { 
            id: 2, 
            title: 'Presentation Skills Assessment', 
            type: 'test', 
            questions: 8,
            description: 'Create and evaluate business presentations for different audiences and purposes.'
          },
        ],
      },
      {
        id: 3,
        title: 'Cross-Cultural Communication',
        lessons: [
          { 
            id: 1, 
            title: 'Navigating Cultural Differences', 
            type: 'note',
            description: 'Learn strategies for effective communication across cultural boundaries in global business environments.'
          },
          { 
            id: 2, 
            title: 'Cross-Cultural Communication Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Apply cultural intelligence to resolve communication challenges in diverse business scenarios.'
          },
        ],
      },
    ],
  },
  
  'evolution-of-business-and-market': {
    title: 'Evolution of Business and Market',
    description: 'Study the historical development of business practices, market structures, and economic systems.',
    overview: 'This course traces the evolution of business and markets from ancient trading systems to modern global economies. You will explore how economic, technological, and social forces have shaped business practices and market structures throughout history. The course provides insights into the development of capitalism, the industrial revolution, the rise of corporations, and the emergence of digital economies, offering valuable context for understanding contemporary business challenges.',
    category: 'Business',
    level: 'Year 1',
    duration: '10 weeks',
    instructor: 'Dr. Vikram Mehta',
    instructorBio: 'Dr. Mehta is an economic historian specializing in the development of business institutions. His research focuses on the intersection of technology, society, and business evolution, and he has published extensively on the transformation of markets across different historical periods.',
    gradientFrom: 'from-yellow-500',
    gradientTo: 'to-amber-600',
    darkGradientFrom: 'dark:from-yellow-600',
    darkGradientTo: 'dark:to-amber-700',
    iconColor: 'text-yellow-500',
    accentColor: 'bg-amber-600',
    accentHoverColor: 'hover:bg-amber-700',
    modules: [
      {
        id: 1,
        title: 'Pre-Industrial Business',
        lessons: [
          { 
            id: 1, 
            title: 'Ancient and Medieval Commerce', 
            type: 'note',
            description: 'Explore trading systems, guilds, and commercial practices from ancient civilizations through the Middle Ages.'
          },
          { 
            id: 2, 
            title: 'Pre-Industrial Era Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Analyze the economic and social factors that influenced early business development.'
          },
        ],
      },
      {
        id: 2,
        title: 'Industrial Revolution and Capitalism',
        lessons: [
          { 
            id: 1, 
            title: 'Rise of Modern Business', 
            type: 'note',
            description: 'Understand how industrialization transformed business practices, labor relations, and market structures.'
          },
          { 
            id: 2, 
            title: 'Industrial Era Assessment', 
            type: 'test', 
            questions: 12,
            description: 'Evaluate the impact of technological innovations on business evolution during the industrial age.'
          },
        ],
      },
      {
        id: 3,
        title: 'Modern Global Economy',
        lessons: [
          { 
            id: 1, 
            title: 'Digital Transformation', 
            type: 'note',
            description: 'Examine how information technology, globalization, and new business models are reshaping markets and competition.'
          },
          { 
            id: 2, 
            title: 'Contemporary Markets Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Analyze current trends in business evolution and predict future developments in market structures.'
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