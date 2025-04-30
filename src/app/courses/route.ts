import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { path } = await request.json();
    
    // Revalidate the specific path
    revalidatePath(path);
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: 'Invalid request' }, { status: 400 });
  }
}