export const ebmNotes: { [key: string]: { title: string; content: string } } = {

'1-1':{
    title: 'Introduction to Microeconomics',
    content: `
    `
},
'2-1':{
    title: 'Introduction to Microeconomics',
    content: `
    `
},
'3-1':{
    title: 'Introduction to Microeconomics',
    content: `
    `
},
'4-1':{
    title: 'Introduction to Microeconomics',
    content: `
    `
},

};

export function getNote(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return ebmNotes[key as keyof typeof ebmNotes];
}