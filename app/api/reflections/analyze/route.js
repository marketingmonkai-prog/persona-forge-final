import { NextResponse } from 'next/server';

export async function POST(request) {
  const { mood = 5, confidenceBefore = 5, confidenceAfter = 6 } = await request.json();
  return NextResponse.json({
    ok: true,
    summary: confidenceAfter > confidenceBefore
      ? 'Confidence improved after action. Reinforce this pattern with another short social task tomorrow.'
      : 'Confidence did not improve. Lower the task difficulty and focus on one successful rep.',
    mood,
    delta: confidenceAfter - confidenceBefore,
  });
}
