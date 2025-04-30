import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { courseId, moduleId, contentType } = await request.json();
    
    // Revalidate specific content type within the module
    if (contentType === 'notes') {
      revalidatePath(`/courses/${courseId}/modules/${moduleId}/notes`);
    } else if (contentType === 'tests') {
      revalidatePath(`/courses/${courseId}/modules/${moduleId}/tests`);
    } else if (contentType === 'mindmaps') {
      revalidatePath(`/courses/${courseId}/modules/${moduleId}/mindmaps`);
    } else {
      // Revalidate all content types if not specified
      revalidatePath(`/courses/${courseId}/modules/${moduleId}`);
    }
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: 'Invalid request' }, { status: 400 });
  }
}