// Course details - extended information for course detail pages
export const courseDetails = {
  'bse': {
    title: 'Business Statistics for Entrepreneurs',
    description: 'Embark on an exciting journey into the world of Statistics—a powerful tool that drives decision-making across countless fields. ',
    overview: 'This Business Statistics for Entrepreneurs course aims to equip you with the knowledge, practice, and confidence to apply statistical methods for making informed business decisions based on data and facts rather than relying solely on intuition. The course will guide you through summarizing and analyzing data, making inferences relevant to your decisions, and quantifying the risk associated with those decisions given the limitations of data. The goal is to provide you with the knowledge, practice, and the confidence in the use and the application of various statistical methods for business decision making.',
    level: 'Year 1',
    gradientFrom: 'from-lime-500',
    gradientTo: 'to-teal-600',
    darkGradientFrom: 'dark:from-lime-600',
    darkGradientTo: 'dark:to-teal-700',
    iconColor: 'text-lime-500',
    accentColor: 'bg-lime-600',
    accentHoverColor: 'hover:bg-lime-700',
    modules: [
      {
        id: 1,
        title: 'Descriptive statistics',
        lessons: [
          {
            id: 1,
            title: 'Introduction to Descriptive Statistics',
            type: 'note',
            description: 'Understanding data types, measures of central tendency (mean, median, mode), and measures of dispersion (variance, standard deviation, range).'
          },
          {
            id: 2,
            title: 'Descriptive Statistics Test',
            type: 'test',
            questions: 10,
            description: 'Test your knowledge on calculating and interpreting basic descriptive statistics.'
          },
        ],
      },
      {
        id: 2,
        title: 'Random Variables and Discrete Probability Distributions',
        lessons: [
          {
            id: 1,
            title: 'Understanding Random Variables and Probability',
            type: 'note',
            description: 'Introduction to random variables, probability concepts, expected value, variance, and common discrete distributions (Binomial, Poisson).'
          },
          {
            id: 2,
            title: 'Discrete Probability Test',
            type: 'test',
            questions: 10,
            description: 'Assess your understanding of discrete random variables and their probability distributions.'
          },
        ],
      },
      {
        id: 3,
        title: 'Continuous Probability Distributions',
        lessons: [
          {
            id: 1,
            title: 'Exploring Continuous Distributions',
            type: 'note',
            description: 'Learn about continuous random variables, probability density functions, and key distributions like the Normal (Gaussian) and Exponential distributions.'
          },
          {
            id: 2,
            title: 'Continuous Probability Test',
            type: 'test',
            questions: 10,
            description: 'Test your knowledge on continuous probability distributions, particularly the Normal distribution.'
          },
        ],
      },
      {
        id: 4,
        title: 'Sampling and Sampling Distributions',
        lessons: [
          {
            id: 1,
            title: 'Principles of Sampling',
            type: 'note',
            description: 'Understand different sampling methods, the concept of sampling error, and the Central Limit Theorem.'
          },
          {
            id: 2,
            title: 'Sampling Distributions Test',
            type: 'test',
            questions: 10,
            description: 'Check your understanding of sampling techniques and the properties of sampling distributions.'
          },
        ],
      },
      {
        id: 5,
        title: 'Statistical Inference',
        lessons: [
          {
            id: 1,
            title: 'Confidence Intervals and Hypothesis Testing',
            type: 'note',
            description: 'Learn how to estimate population parameters using confidence intervals and test hypotheses about population means and proportions.'
          },
          {
            id: 2,
            title: 'Statistical Inference Test',
            type: 'test',
            questions: 10,
            description: 'Test your ability to construct confidence intervals and perform basic hypothesis tests.'
          },
        ],
      },
      {
        id: 6,
        title: 'Association Between Random Variables and Simple Linear Regression',
        lessons: [
          {
            id: 1,
            title: 'Correlation and Simple Regression',
            type: 'note',
            description: 'Explore covariance, correlation, and the fundamentals of simple linear regression analysis (fitting a line, R-squared).'
          },
          {
            id: 2,
            title: 'Simple Regression Test',
            type: 'test',
            questions: 10,
            description: 'Assess your understanding of correlation and the components of a simple linear regression model.'
          },
        ],
      },
      {
        id: 7,
        title: 'Multiple Linear Regression I',
        lessons: [
          {
            id: 1,
            title: 'Introduction to Multiple Regression',
            type: 'note',
            description: 'Extend simple linear regression to include multiple predictors, understand model assumptions, and interpret coefficients.'
          },
          {
            id: 2,
            title: 'Multiple Regression Basics Test',
            type: 'test',
            questions: 10,
            description: 'Test your knowledge on setting up and interpreting basic multiple regression models.'
          },
        ],
      },
      {
        id: 8,
        title: 'Multiple Linear Regression II',
        lessons: [
          {
            id: 1,
            title: 'Advanced Multiple Regression Topics',
            type: 'note',
            description: 'Covering model diagnostics, multicollinearity, interaction terms, and variable selection techniques in multiple regression.'
          },
          {
            id: 2,
            title: 'Advanced Multiple Regression Test',
            type: 'test',
            questions: 10,
            description: 'Assess your understanding of diagnosing issues and refining multiple regression models.'
          },
        ],
      },
    ]
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
    level: 'Year 1',
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
        title: 'Introduction to Indian Knowledge System and Vedic Corpus',
        lessons: [
          {
            id: 1,
            title: 'Overview of the Vedic Corpus and IKS Basics',
            type: 'note',
            description: 'Understand IKS definition, relevance, perceptions, examples, unique features, and Vedic Corpus basics and history.'
          },
          {
            id: 2,
            title: 'Introduction to IKS Assessment',
            type: 'test',
            questions: 10,
            description: 'Test your foundational understanding of IKS concepts, relevance, unique features, and the structure of the Vedic corpus.'
          }
        ]
      },
      {
        id: 2,
        title: 'The Philosophical Systems and Core Values',
        lessons: [
          {
            id: 1,
            title: 'Philosophical Schools, Upanishads, and Core Values',
            type: 'note',
            description: 'Explore philosophical components, Upanishads, and foundational values like Dharma, Rta, Satya, and Purusharthas.'
          },
          {
            id: 2,
            title: 'Philosophy and Values Assessment',
            type: 'test',
            questions: 10,
            description: 'Assess your understanding of the philosophical schools, core values, and key texts like the Upanishads.'
          }
        ]
      },
      {
        id: 3,
        title: 'Linguistics and Oral Tradition',
        lessons: [
          {
            id: 1,
            title: 'Linguistic Vedangas and Oral Transmission',
            type: 'note',
            description: 'Study linguistic Vedangas (Shiksha, Vyakarana, Nirukta, Chandas) and their role in preserving oral transmission accuracy.'
          },
          {
            id: 2,
            title: 'Linguistics Assessment',
            type: 'test',
            questions: 10,
            description: 'Test your knowledge of the linguistic Vedangas and the significance of oral tradition and meter in IKS.'
          }
        ]
      },
      {
        id: 4,
        title: 'Wisdom Preservation and Interpretation Techniques',
        lessons: [
          {
            id: 1,
            title: 'Historical Context, Encoding, and Interpretation Methods',
            type: 'note',
            description: 'Examine IKS historical periods, encoding techniques (math in verses, binary, mnemonics), and multi-dimensional text interpretation.'
          },
          {
            id: 2,
            title: 'Wisdom and Interpretation Assessment',
            type: 'test',
            questions: 10,
            description: 'Analyze the historical context and evaluate the techniques used to encode, preserve, and interpret knowledge in IKS.'
          }
        ]
      },
      {
        id: 5,
        title: 'Number System, Mathematics and Astronomy',
        lessons: [
          {
            id: 1,
            title: 'Mathematics, Astronomy, and Related Techniques',
            type: 'note',
            description: 'Study contributions in math and astronomy, related encoding techniques, and practical applications (Jyotisha).'
          },
          {
            id: 2,
            title: 'Math and Astronomy Assessment',
            type: 'test',
            questions: 10,
            description: 'Apply ancient mathematical and astronomical concepts and evaluate their significance and methods.'
          }
        ]
      },
      {
        id: 6,
        title: 'Engineering & Technology',
        lessons: [
          {
            id: 1,
            title: 'Metallurgy, Engineering Principles, and Logistics',
            type: 'note',
            description: 'Examine achievements in metallurgy, engineering principles in construction (material science, acoustics), and complex logistics.'
          },
          {
            id: 2,
            title: 'Engineering and Technology Assessment',
            type: 'test',
            questions: 10,
            description: 'Evaluate the technological and engineering feats of ancient Indian civilization as presented in the text.'
          }
        ]
      },
      {
        id: 7,
        title: 'Architecture and Town Planning in Ancient India',
        lessons: [
          {
            id: 1,
            title: 'Architectural Principles, Examples, and Town Planning',
            type: 'note',
            description: 'Study architectural principles, iconic examples (temples, altars), and concepts and evidence of ancient town planning.'
          },
          {
            id: 2,
            title: 'Architecture and Town Planning Assessment',
            type: 'test',
            questions: 10,
            description: 'Analyze the principles and examples of ancient Indian architecture and town planning.'
          }
        ]
      },
      {
        id: 8,
        title: 'Health, Wellness and Life Practices',
        lessons: [
          {
            id: 1,
            title: 'Medicine, Daily Practices, and Holistic Wellness',
            type: 'note',
            description: 'Learn about ancient medicine (Ayurveda), role of IKS in daily life and rituals, and the holistic concept of wellness.'
          },
          {
            id: 2,
            title: 'Health, Wellness, and Life Prac. Assessment',
            type: 'test',
            questions: 10,
            description: 'Test your knowledge of ancient Indian medical systems, daily practices, and concepts of holistic wellness.'
          }
        ]
      }
    ]
  },

  'asb': {
    title: 'Advanced Statistics for Business',
    description: 'Introduction to advanced statistical techniques that are vital for decision-making in management and entrepreneurship.',
    overview: 'This Advanced Statistics for Business course aims to equip you with the ability to recognize and utilize various statistical models and their solutions. You will learn to translate practical business challenges into statistical frameworks. A key focus is on applying these models across diverse business domains to address real-world issues, while also evaluating their effectiveness and limitations. Furthermore, you will understand and implement different regression techniques for relevant business scenarios. Finally, you will apply various non-parametric statistical methods to real-life datasets.',
    level: 'Year 1',
    gradientFrom: 'from-gray-500',
    gradientTo: 'to-blue-600',
    darkGradientFrom: 'dark:from-gray-600',
    darkGradientTo: 'dark:to-blue-700',
    iconColor: 'text-gray-500',
    accentColor: 'bg-gray-600',
    accentHoverColor: 'hover:bg-gray-700',
    modules: [
      {
        id: 1,
        title: 'Non-Parametric Methods',
        lessons: [
          { 
            id: 1, 
            title: 'Introduction to Non-Parametric Statistics', 
            type: 'note',
            description: 'Learn about distribution-free methods, their advantages, and applications in business. Covers sign test, Wilcoxon tests, and Mann-Whitney U test.'
          },
          { 
            id: 2, 
            title: 'Non-Parametric Methods Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Test your understanding of non-parametric statistical methods and their applications in real business scenarios.'
          },
        ],
      },
      {
        id: 2,
        title: 'Advanced Regression Methods',
        lessons: [
          { 
            id: 1, 
            title: 'Advanced Regression Techniques', 
            type: 'note',
            description: 'Explore logistic regression, polynomial regression, and time series analysis. Learn model selection, validation, and diagnostic techniques.'
          },
          { 
            id: 2, 
            title: 'Advanced Regression Analysis Test', 
            type: 'test', 
            questions: 10,
            description: 'Apply advanced regression techniques to complex business problems and interpret the results.'
          },
        ],
      },
      {
        id: 3,
        title: 'Predictive Analysis',
        lessons: [
          { 
            id: 1, 
            title: 'Business Forecasting and Prediction', 
            type: 'note',
            description: 'Master predictive modeling techniques, including time series forecasting, machine learning applications, and model evaluation methods.'
          },
          { 
            id: 2, 
            title: 'Predictive Analysis Assessment', 
            type: 'test', 
            questions: 10,
            description: 'Demonstrate your ability to build and evaluate predictive models using real business data.'
          },
        ],
      },
      {
        id: 4,
        title: 'Statistical Methods in Quality Management',
        lessons: [
          { 
            id: 1, 
            title: 'Statistical Quality Control', 
            type: 'note',
            description: 'Study control charts, process capability analysis, acceptance sampling, and Six Sigma methodology for quality improvement.'
          },
          { 
            id: 2, 
            title: 'Quality Management Statistics Test', 
            type: 'test', 
            questions: 10,
            description: 'Apply statistical quality control methods to analyze and improve business processes.'
          },
        ],
      },
      
      // Add more modules as needed
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
    level: 'Year 1',
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