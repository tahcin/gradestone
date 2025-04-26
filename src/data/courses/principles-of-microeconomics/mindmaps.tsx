// Mindmaps data for the Principles of Microeconomics course
export const principlesOfMicroeconomicsMindmaps = {
  // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
  '1-3': {
    title: 'Microeconomics Concepts Mindmap',
    content: `
     `
  },
  
  // Module 2, Lesson 3
  '2-3': {
    title: 'Market Structures Mindmap',
    content: `
`
  }
};

// Function to get a specific mindmap
export function getMindmap(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return principlesOfMicroeconomicsMindmaps[key as keyof typeof principlesOfMicroeconomicsMindmaps] || null;
}