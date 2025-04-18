import { GoogleGenerativeAI } from '@google/generative-ai';
import { courses } from '@/data/courses';
import { getCourseDetailsById } from '@/data/courses/courseDetails';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Helper function to gather website content
async function gatherWebsiteContent() {
  // Get all course details
  const allCourseContent = [];

  // Gather basic course information
  for (const course of courses) {
    const courseDetails = getCourseDetailsById(course.id);
    if (courseDetails) {
      // Add course overview
      allCourseContent.push({
        title: courseDetails.title,
        source: `Course: ${courseDetails.title}`,
        content: courseDetails.overview,
      });

      // Add module and lesson information
      for (const module of courseDetails.modules) {
        allCourseContent.push({
          title: `${courseDetails.title} - ${module.title}`,
          source: `Course: ${courseDetails.title}, Module: ${module.title}`,
          content: `Module: ${module.title}\nDescription: This module contains lessons on ${module.lessons.map(l => l.title).join(', ')}.`,
        });

        // Add lesson-level content (notes and mindmaps)
        for (const lesson of module.lessons) {
          // Notes
          let noteContent = null;
          try {
            if (course.id === 'persuasive-communication') {
              const { persuasiveCommunicationNotes } = await import('@/data/courses/persuasive-communication/notes');
              const noteKey = `${module.id}-${lesson.id}`;
              if (persuasiveCommunicationNotes[noteKey]) {
                noteContent = persuasiveCommunicationNotes[noteKey];
              }
            } else if (course.id === 'indian-knowledge-system') {
              const { indianKnowledgeSystemNotes } = await import('@/data/courses/indian-knowledge-system/notes');
              const noteKey = `${module.id}-${lesson.id}`;
              if (indianKnowledgeSystemNotes[noteKey]) {
                noteContent = indianKnowledgeSystemNotes[noteKey];
              }
            } else if (course.id === 'principles-of-microeconomics') {
              const { principlesOfMicroeconomicsNotes } = await import('@/data/courses/principles-of-microeconomics/notes');
              const noteKey = `${module.id}-${lesson.id}`;
              if (principlesOfMicroeconomicsNotes[noteKey]) {
                noteContent = principlesOfMicroeconomicsNotes[noteKey];
              }
            }
          } catch (e) {}
          if (noteContent) {
            allCourseContent.push({
              title: `${courseDetails.title} - ${module.title} - ${noteContent.title}`,
              source: `Course: ${courseDetails.title}, Module: ${module.title}, Lesson: ${noteContent.title}`,
              content: noteContent.content,
            });
          }

          
        }
      }
    }
  }

  return allCourseContent;
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Gather website content
    const websiteContent = await gatherWebsiteContent();
    
    // Format content for the AI
    const formattedContent = websiteContent.map(item => 
      `Source: ${item.source}\nTitle: ${item.title}\nContent: ${item.content}`
    ).join('\n\n');

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Create a chat context that includes the website content
    const context = `You are GraDex, a helpful and friendly assistant for Gradestone. You have access to the following content from the website:\n\n${formattedContent}\n\n
    Dont answer anything irrelevant to Gradestone. When answering questions, please follow these guidelines:
    1. Structure your response in two clear sections:
       - First section: Your main answer using markdown formatting
       - Second section: Start with "References:" and write the course and module used
    2. If the question is about content available on the Gradestone website, answer based on that content and list the sources under the References section (e.g., "- Persuasive Communication - Module 1").
    3. If you are asked about anything non academic or irrelevant to Gradesrone, Respond with "Grades aint going up this way. Padhle Bro :)"
    4. Keep your answers informative.
    5. Respond to greetings by introducing yourself.
    6. Always maintain a helpful, educational tone.
    7. Use markdown format for your responses and it should have good structure.
    8. If asked for summaries, be as in depth as possible using pointers and headers.
    9. Dont add tables in your responses. If response has a table, summarise it instead`;

    // Start a chat session
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: context }],
        },
        {
          role: 'model',
          parts: [{ text: 'I understand. I will help answer questions about the Gradestone platform content, providing clear references to sources when applicable.' }],
        },
      ],
    });

    // Get response from the model
    const result = await chat.sendMessage(message);
    const response = await result.response;
    let text = response.text();

    // Post-process to handle references section
    if (typeof text === 'string') {
      // Try to split at 'References:' (case-insensitive, with/without colon)
      const refMatch = text.match(/\n?\s*References?:/i);
      if (refMatch) {
        const idx = text.search(/\n?\s*References?:/i);
        const main = text.slice(0, idx).trim();
        const refs = text.slice(idx).replace(/^\n+/, '').trim();
        text = `${main}\n\n---\n\n${refs}`;
      } else {
        // If no references section, just trim the text
        text = text.trim();
      }
    }

    return new Response(JSON.stringify({ response: text }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('GraDex API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process the chat request',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}