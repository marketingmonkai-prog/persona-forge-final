import { NextResponse } from 'next/server';

export async function POST(request) {
  const { traits = [], pace = 'Daily' } = await request.json();
  const base = [
    { title: 'One-line stranger opener', skill: traits[0] || 'Confidence', xp: 40 },
    { title: 'Posture walk drill', skill: traits[1] || 'Posture', xp: 25 },
    { title: 'Sentence framing drill', skill: traits[2] || 'Communication', xp: 35 },
  ];
  return NextResponse.json({ ok: true, pace, missions: base });
}
