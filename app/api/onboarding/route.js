import { NextResponse } from "next/server";

const demoMissions = {
  Daily: [
    { title: 'Start one conversation', skill: 'Confidence', xp: 30 },
    { title: 'Hold eye contact for 3 seconds', skill: 'Communication', xp: 20 },
    { title: 'Walk with upright posture for 10 minutes', skill: 'Posture', xp: 15 }
  ],
  Weekly: [
    { title: 'Talk to 3 strangers', skill: 'Confidence', xp: 60 },
    { title: 'Practice 10 openers', skill: 'Sentence framing', xp: 45 },
    { title: 'Review room-reading notes', skill: 'Room analysis', xp: 40 }
  ],
  Monthly: [
    { title: 'Complete a 30-day confidence arc', skill: 'Confidence', xp: 120 },
    { title: 'Upgrade style profile', skill: 'Dressing', xp: 90 },
    { title: 'Run a social challenge sprint', skill: 'Social skills', xp: 100 }
  ]
};

export async function POST(request) {
  const body = await request.json();
  const { userId, email, name, profile } = body;
  return NextResponse.json({
    ok: true,
    userId,
    email,
    name,
    profile,
    nextStep: 'Save this payload into Supabase profiles, assessments, and seed the user_missions table.',
    missions: demoMissions[profile?.pace || 'Daily'] || demoMissions.Daily
  });
}
