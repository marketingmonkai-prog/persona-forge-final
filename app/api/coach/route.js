import { NextResponse } from 'next/server';

export async function POST(request) {
  const { reflection } = await request.json();
  return NextResponse.json({
    detected_pattern: 'anticipation_anxiety',
    coach_message: `You may be hesitating before action. Based on your reflection: "${reflection}", the next step should be smaller and easier to win.`,
    replacement_mission: {
      title: 'Low-pressure greeting reset',
      xp_reward: 20,
      difficulty: 'easy'
    }
  });
}
