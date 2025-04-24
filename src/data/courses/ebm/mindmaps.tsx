// Mindmaps data for the Indian Knowledge System course
export const ebmMindmaps = {
    // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
    '1-3': {
      title: '',
      content: `
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
    return ebmMindmaps[key as keyof typeof ebmMindmaps] || null;
  }