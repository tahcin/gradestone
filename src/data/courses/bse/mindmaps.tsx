// Mindmaps data for the Indian Knowledge System course
export const bseMindmaps = {
  // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
  '1-3': {
    title: 'Indian Knowledge Systems Overview Mindmap',
    content: `
![Mindmap](/images/IKS/Module1/mindmap.png)
    `
  },
  
  // Module 2, Lesson 3
  '2-3': {
    title: 'Ancient Indian Scientific Contributions Mindmap',
    content: `
    `
  }
};

// Function to get a specific mindmap
export function getMindmap(moduleId: number, lessonId: number) {
  const key = `${moduleId}-${lessonId}`;
  return bseMindmaps[key as keyof typeof bseMindmaps] || null;
}