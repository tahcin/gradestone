export const fobc2Tests = {

'1-2':{
    title: '',
    description: '',
    questions: [
      {
        id: 1,
        question: '',
        options: [
          '',
          '',
          '',
          ''
        ],
        correctAnswer: 2
      },
    ]
},
'2-2':{
    title: '',
    description: '',
    questions: [
      {
        id: 1,
        question: '',
        options: [
          '',
          '',
          '',
          ''
        ],
        correctAnswer: 2
      },
    ]
},
'3-2':{
    title: '',
    description: '',
    questions: [
      {
        id: 1,
        question: '',
        options: [
          '',
          '',
          '',
          ''
        ],
        correctAnswer: 2
      },
    ]
},
'4-2':{
    title: '',
    description: '',
    questions: [
      {
        id: 1,
        question: '',
        options: [
          '',
          '',
          '',
          ''
        ],
        correctAnswer: 2
      },
    ]
},


};

export function getTest(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return fobc2Tests[key as keyof typeof fobc2Tests];
}