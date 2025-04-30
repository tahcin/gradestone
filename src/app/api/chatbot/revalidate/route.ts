import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token, chatType } = await request.json();

    // Verify the request is authorized
    if (token !== process.env.REVALIDATION_TOKEN) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    if (!chatType) {
      return NextResponse.json(
        { message: 'Chat type is required' },
        { status: 400 }
      );
    }

    // Revalidate based on chat type
    if (chatType === 'gradex') {
      revalidatePath('/gradex');
    } else if (chatType === 'module') {
      revalidatePath('/courses/[courseId]/modules/[moduleId]');
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    );
  }
}