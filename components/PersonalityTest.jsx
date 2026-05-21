'use client';

import { useMemo, useState } from 'react';

const traits = ['Confidence', 'Communication', 'Social skills', 'Posture', 'Dressing', 'Room analysis', 'Sentence framing', 'Empathy'];

export default function PersonalityTest({ onComplete }) {
  const [form, setForm] = useState({
    persona: 'Young professional',
    traits: ['Confidence', 'Communication', 'Social skills'],
    fear: 'Fear of judgment',
    pace: 'Daily',
    goal: 'I want to walk confidently, talk to anyone without fear, and feel calm in new social settings.'
  });

  const summary = useMemo(() => ({
    confidenceScore: Math.min(85, 40 + form.traits.length * 6),
    swot: {
      strengths: ['Self-awareness', 'Empathy', 'Willingness to grow'],
      weaknesses: [form.fear, 'Hesitation in social openings'],
      opportunities: ['Daily micro challenges', 'Reflection with AI', 'Visible streak-based progress'],
      threats: ['Overthinking after awkward interactions']
    }
  }), [form]);

  const toggleTrait = (trait) => {
    setForm((prev) => {
      const exists = prev.traits.includes(trait);
      if (exists && prev.traits.length === 1) return prev;
      return {
        ...prev,
        traits: exists ? prev.traits.filter((t) => t !== trait) : [...prev.traits, trait],
      };
    });
  };

  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div className="stack">
        <div>
          <span className="pill">Free onboarding test</span>
          <h2 style={{ margin: '.8rem 0 .35rem' }}>Take your personality assessment before entering the app</h2>
          <p className="muted">This saves your starting profile, priorities, fear pattern, and the type of challenges you should receive first.</p>
        </div>
        <div className="grid-2">
          <div className="stack">
            <label className="muted">Who are you?</label>
            <select className="select" value={form.persona} onChange={(e) => setForm({ ...form, persona: e.target.value })}>
              <option>Student</option>
              <option>Young professional</option>
              <option>Socially anxious beginner</option>
              <option>Founder / leader</option>
            </select>
          </div>
          <div className="stack">
            <label className="muted">Main blocker</label>
            <select className="select" value={form.fear} onChange={(e) => setForm({ ...form, fear: e.target.value })}>
              <option>Fear of judgment</option>
              <option>Not knowing what to say</option>
              <option>Low energy in social settings</option>
              <option>Overthinking after interactions</option>
              <option>Body language insecurity</option>
            </select>
          </div>
        </div>
        <div className="stack">
          <label className="muted">Select multiple skills</label>
          <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
            {traits.map((trait) => {
              const active = form.traits.includes(trait);
              return (
                <button
                  key={trait}
                  type="button"
                  className="tag"
                  onClick={() => toggleTrait(trait)}
                  style={{
                    background: active ? 'rgba(64,216,201,.12)' : undefined,
                    color: active ? 'var(--primary)' : undefined,
                    border: active ? '1px solid rgba(64,216,201,.22)' : '1px solid var(--border)'
                  }}
                >
                  {trait}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid-2">
          <div className="stack">
            <label className="muted">Preferred pace</label>
            <select className="select" value={form.pace} onChange={(e) => setForm({ ...form, pace: e.target.value })}>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="stack">
            <label className="muted">Predicted starting confidence</label>
            <div className="panel" style={{ padding: '1rem' }}>
              <strong>{summary.confidenceScore}/100</strong>
              <div className="progress" style={{ marginTop: '.6rem' }}><span style={{ width: `${summary.confidenceScore}%` }} /></div>
            </div>
          </div>
        </div>
        <div className="stack">
          <label className="muted">Specific goal</label>
          <textarea className="textarea" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} />
        </div>
        <div className="grid-2">
          <div className="panel" style={{ padding: '1rem' }}>
            <strong>SWOT preview</strong>
            <p className="muted"><strong>Strengths:</strong> {summary.swot.strengths.join(', ')}</p>
            <p className="muted"><strong>Weaknesses:</strong> {summary.swot.weaknesses.join(', ')}</p>
            <p className="muted"><strong>Opportunities:</strong> {summary.swot.opportunities.join(', ')}</p>
            <p className="muted"><strong>Threats:</strong> {summary.swot.threats.join(', ')}</p>
          </div>
          <div className="panel" style={{ padding: '1rem' }}>
            <strong>What happens next</strong>
            <ul className="muted" style={{ paddingLeft: '1rem' }}>
              <li>Your profile is saved at signup.</li>
              <li>You get a personalized dashboard.</li>
              <li>Your first daily missions are generated.</li>
              <li>AI mentor feedback becomes available instantly.</li>
            </ul>
          </div>
        </div>
        <button className="btn btn-primary" type="button" onClick={() => onComplete({ ...form, ...summary })}>Use this profile and continue</button>
      </div>
    </div>
  );
}
