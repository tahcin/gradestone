// Tests data for the Persuasive Communication course
export const persuasiveCommunicationTests = {
  // Module 1, Lesson 2
  '1-2': {
    title: 'Persuasion Principles Assessment',
    description: 'Test your understanding of persuasion principles through scenario-based questions.',
    questions: [
      {
        id: 1,
        question: 'Which of the following best describes ethos in persuasive communication?',
        options: [
          'The use of emotional appeals to connect with an audience',
          'The credibility and trustworthiness of the speaker',
          'The logical structure and evidence in an argument',
          'The timing and delivery of a persuasive message'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'A speaker begins a presentation with personal credentials and experience in the field. This primarily strengthens which persuasive element?',
        options: [
          'Pathos',
          'Logos',
          'Ethos',
          'Kairos'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which of the following is an example of appealing to pathos?',
        options: [
          'Citing five peer-reviewed studies to support your argument',
          'Sharing a personal story that illustrates the impact of the issue',
          'Mentioning your ten years of experience in the field',
          'Organizing your points in a clear, logical sequence'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'When a speaker presents statistics, case studies, and expert opinions to support their argument, they are primarily using:',
        options: [
          'Ethos',
          'Pathos',
          'Logos',
          'Rhetoric'
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: 'Which of the following statements about ethical persuasion is TRUE?',
        options: [
          'Ethical persuasion can include withholding information if it helps achieve the desired outcome',
          'Ethical persuasion focuses exclusively on logical arguments and avoids emotional appeals',
          'Ethical persuasion respects the audience\'s autonomy and provides balanced information',
          'Ethical persuasion is less effective than manipulation but morally superior'
        ],
        correctAnswer: 2
      },
      {
        id: 6,
        question: 'The "scarcity principle" in persuasion suggests that:',
        options: [
          'Simple messages are more persuasive than complex ones',
          'People value things more when they are rare or limited in availability',
          'Persuaders should limit the number of arguments they present',
          'Economic factors are the most important in decision-making'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'Which persuasive technique is being used when a company advertises that "9 out of 10 doctors recommend" their product?',
        options: [
          'Reciprocity',
          'Commitment and consistency',
          'Social proof',
          'Authority'
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: 'In the AIDA model of persuasion, what does the "D" stand for?',
        options: [
          'Decision',
          'Desire',
          'Direction',
          'Determination'
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'Which of the following is NOT considered one of Cialdini\'s six principles of influence?',
        options: [
          'Reciprocity',
          'Transparency',
          'Social Proof',
          'Authority'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'When persuasion crosses the line into manipulation, it typically involves:',
        options: [
          'Using all three appeals: ethos, pathos, and logos',
          'Focusing too much on logical arguments',
          'Deception, exploitation, or disregard for the audience\'s welfare',
          'Being too direct about what you want the audience to do'
        ],
        correctAnswer: 2
      }
    ]
  },
};  
// Module 2, Lesson 2
  


// Function to get a specific test by module and lesson ID
export function getTest(moduleId: number, lessonId: number) {
    const key = `${moduleId}-${lessonId}`;
    return persuasiveCommunicationTests[key as keyof typeof persuasiveCommunicationTests];
}