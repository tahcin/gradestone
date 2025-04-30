import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { courseId } = await request.json();
    
    // Revalidate course detail page and related content
    revalidatePath(`/courses/${courseId}`);
    revalidatePath(`/courses/${courseId}/modules`);
    revalidatePath(`/courses/${courseId}/notes`);
    revalidatePath(`/courses/${courseId}/tests`);
    revalidatePath(`/courses/${courseId}/mindmaps`);
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: 'Invalid request' }, { status: 400 });
  }
}