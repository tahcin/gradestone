// Tests data for the Blockchain Development course
export const blockchainTests = {
  // Module 1, Lesson 2
  '1-2': {
    title: 'Blockchain Fundamentals Assessment',
    description: 'Test your understanding of blockchain concepts and architecture.',
    questions: [
      {
        id: 1,
        question: 'What is the primary purpose of blockchain technology?',
        options: [
          'Fast computation',
          'Secure, immutable record-keeping',
          'Data visualization',
          'Cloud storage'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Which of the following is NOT a characteristic of blockchain technology?',
        options: [
          'Decentralization',
          'Transparency',
          'Centralized control',
          'Immutability'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'What links blocks together in a blockchain?',
        options: [
          'Digital signatures',
          'Cryptographic hashes',
          'Smart contracts',
          'Consensus algorithms'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Which consensus mechanism is used by Bitcoin?',
        options: [
          'Proof of Stake (PoS)',
          'Proof of Work (PoW)',
          'Delegated Proof of Stake (DPoS)',
          'Practical Byzantine Fault Tolerance (PBFT)'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Which type of blockchain allows anyone to participate in the network?',
        options: [
          'Private blockchain',
          'Public blockchain',
          'Consortium blockchain',
          'Permissioned blockchain'
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'What is a cryptographic hash function used for in blockchain?',
        options: [
          'To encrypt private messages',
          'To create digital signatures',
          'To generate unique "fingerprints" of data',
          'To mine new cryptocurrency'
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'Which of the following is NOT a common use case for blockchain technology?',
        options: [
          'Supply chain management',
          'Identity verification',
          'High-frequency trading',
          'Voting systems'
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'What does the term "immutability" mean in the context of blockchain?',
        options: [
          'Data can be easily modified',
          'Data cannot be changed once recorded',
          'Data is encrypted',
          'Data is accessible only to authorized users'
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'What is a major challenge facing blockchain technology?',
        options: [
          'Scalability',
          'Simplicity',
          'Low energy consumption',
          'Centralization'
        ],
        correctAnswer: 0
      },
      {
        id: 10,
        question: 'Which of the following best describes a distributed ledger?',
        options: [
          'A database stored in a single location',
          'A record-keeping system maintained by one organization',
          'A database replicated across multiple sites or nodes',
          'A financial journal managed by banks'
        ],
        correctAnswer: 2
      }
    ],
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-amber-500',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-amber-500',
    accentColor: 'bg-orange-600',
    accentHoverColor: 'hover:bg-orange-700'
  },
  
  // Module 2, Lesson 2
  '2-2': {
    title: 'Smart Contracts and Ethereum Assessment',
    description: 'Test your knowledge of Ethereum and smart contract development.',
    questions: [
      {
        id: 1,
        question: 'What is Ethereum primarily designed for?',
        options: [
          'Digital currency transactions only',
          'Running smart contracts and decentralized applications',
          'Mining cryptocurrency',
          'Secure messaging'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is a smart contract?',
        options: [
          'A legal agreement between two parties',
          'A blockchain-based agreement requiring human approval',
          'Self-executing code that runs when predetermined conditions are met',
          'A digital signature'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which programming language is most commonly used for Ethereum smart contracts?',
        options: [
          'JavaScript',
          'Python',
          'C++',
          'Solidity'
        ],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'What is "gas" in Ethereum?',
        options: [
          'A cryptocurrency',
          'A unit that measures computational effort',
          'A type of smart contract',
          'The Ethereum mining reward'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Which of the following is NOT a characteristic of smart contracts?',
        options: [
          'Autonomy',
          'Transparency',
          'Ability to be modified after deployment',
          'Deterministic execution'
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'What is the Ethereum Virtual Machine (EVM)?',
        options: [
          'A physical computer that mines Ethereum',
          'A development environment for Solidity',
          'The runtime environment where smart contracts execute',
          'A software wallet for storing Ether'
        ],
        correctAnswer: 2
      },
      {
        id: 7,
        question: 'What is a common security vulnerability in smart contracts?',
        options: [
          'Reentrancy attacks',
          'Cross-site scripting',
          'SQL injection',
          'DDoS attacks'
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'What is a dApp?',
        options: [
          'A digital application store',
          'A development framework for Ethereum',
          'A decentralized application that uses smart contracts',
          'A database application'
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: 'How can gas costs be optimized in smart contracts?',
        options: [
          'By using more storage operations',
          'By minimizing storage operations and using efficient data structures',
          'By deploying multiple contracts instead of one',
          'By using more complex calculations'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'What happens when a smart contract runs out of gas during execution?',
        options: [
          'It pauses until more gas is provided',
          'It completes execution but charges extra fees',
          'The transaction fails and reverts all changes',
          'It automatically requests more gas from the network'
        ],
        correctAnswer: 2
      }
    ],
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-amber-500',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-amber-500',
    accentColor: 'bg-orange-600',
    accentHoverColor: 'hover:bg-orange-700'
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
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-500',
    darkGradientFrom: 'dark:from-amber-500',
    darkGradientTo: 'dark:to-orange-600',
    iconColor: 'text-amber-500',
    accentColor: 'bg-orange-600',
    accentHoverColor: 'hover:bg-orange-700'
  },
  */
};

// Helper function to get a test by module ID and lesson ID
export function getTest(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return blockchainTests[key as keyof typeof blockchainTests];
} 