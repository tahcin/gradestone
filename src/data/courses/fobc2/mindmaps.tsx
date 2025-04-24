// Mindmaps data for the Indian Knowledge System course
export const fobc2Mindmaps = {
    // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
    '1-3': {
      title: '',
      content: `
      `
    },
    
    // Module 2, Lesson 3
    '2-3': {
      title: '',
      content: `
      `
    }
  };
  
  // Function to get a specific mindmap
  export function getMindmap(moduleId: number, lessonId: number) {
    const key = `${moduleId}-${lessonId}`;
    return fobc2Mindmaps[key as keyof typeof fobc2Mindmaps] || null;
  }