export const ebmTests = {

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
  return ebmTests[key as keyof typeof ebmTests];
}