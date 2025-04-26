// Mindmaps data for the Persuasive Communication course
export const persuasiveCommunicationMindmaps = {
  // Module 1, Lesson 3 (assuming notes is 1, mindmap is 3, test is 2)
  '1-3': {
    title: 'Introduction to Persuasive Communication and its Applications',
    content: `
[View PDF](/pdfs/pc/Module1.pdf)
    `
  },
  
  // Module 2, Lesson 3
  '2-3': {
    title: 'Understanding Your Audience',
    content: `
[View PDF](/pdfs/pc/Module2.pdf)

    `
  },
  '3-3': {
    title: 'Adding Persuasive Elements to Make the Message Powerful and Impactful',
    content: `
[View PDF](/pdfs/pc/Module3.pdf)

    `
  },
  '4-3': {
    title: 'Slides to complement the presentation and putting it all together',
    content: `
[View PDF](/pdfs/pc/Module4.pdf)

    `
  }
};

// Function to get mindmap data based on moduleId and mindmapId
export function getMindmap(moduleId: number, mindmapId: number) {
  const key = `${moduleId}-${mindmapId}`;
  return persuasiveCommunicationMindmaps[key as keyof typeof persuasiveCommunicationMindmaps] || null;
}