import Link from 'next/link';

const missions = [
  { title: 'One-line stranger opener', xp: 40, description: 'Ask one simple question to a stranger and hold calm eye contact for 2–3 seconds.' },
  { title: 'Posture walk drill', xp: 25, description: 'Walk for 8 minutes with relaxed shoulders and steady pace.' },
  { title: 'Sentence framing drill', xp: 35, description: 'Practice five openers aloud and use at least one in a real setting.' },
];

export default function DashboardPage() {
  return (
    <div className="layout">
      <aside className="sidebar card">
        <div className="stack">
          <div>
            <span className="pill">Persona Forge</span>
            <h2 style={{ marginTop: '.8rem' }}>Free dashboard</h2>
            <p className="muted">All users can use the product for free for now.</p>
          </div>
          <nav className="nav">
            <Link href="/dashboard" className="active">🏠 Dashboard</Link>
            <Link href="/auth">🧠 Re-take assessment</Link>
          </nav>
          <div className="panel" style={{ padding: '1rem' }}>
            <strong>AI mentor hint</strong>
            <p className="muted">Start smaller than your fear expects. Short wins create momentum.</p>
          </div>
        </div>
      </aside>
      <main style={{ padding: '1rem 1rem 3rem 0' }}>
        <div className="topbar">
          <div>
            <span className="pill">Current path</span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', margin: '.8rem 0 .3rem' }}>Calm charismatic communicator</h1>
            <p className="muted">Your missions are focused on confidence, communication, and social ease.</p>
          </div>
          <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary">Generate new missions</button>
            <button className="btn btn-primary">Talk to AI mentor</button>
          </div>
        </div>
        <div className="grid-4" style={{ marginTop: '1rem' }}>
          <article className="panel stat"><span className="faint">Current streak</span><strong>12</strong><span className="muted">days</span></article>
          <article className="panel stat"><span className="faint">Confidence score</span><strong>74</strong><span className="muted">improving</span></article>
          <article className="panel stat"><span className="faint">Milestones</span><strong>6</strong><span className="muted">unlocked</span></article>
          <article className="panel stat"><span className="faint">Mood</span><strong>8.1</strong><span className="muted">after tasks</span></article>
        </div>
        <div className="hero" style={{ marginTop: '1rem' }}>
          <section className="card" style={{ padding: '1.5rem' }}>
            <div className="stack">
              <div>
                <span className="tag">Today’s missions</span>
                <h2 style={{ marginTop: '.75rem' }}>Real-world action board</h2>
              </div>
              {missions.map((mission) => (
                <article key={mission.title} className="mission">
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '.75rem', alignItems: 'start' }}>
                    <strong>{mission.title}</strong>
                    <span className="tag">+{mission.xp} XP</span>
                  </div>
                  <p className="muted">{mission.description}</p>
                  <div className="check" style={{ marginTop: '.75rem' }}>
                    <input type="checkbox" />
                    <div className="muted">Mark complete and reflect.</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="stack">
            <article className="panel" style={{ padding: '1.5rem' }}>
              <h2>Skill progression</h2>
              <div className="stack" style={{ marginTop: '1rem' }}>
                <div><strong>Confidence</strong><div className="progress"><span style={{ width: '76%' }} /></div></div>
                <div><strong>Communication</strong><div className="progress"><span style={{ width: '68%' }} /></div></div>
                <div><strong>Social skills</strong><div className="progress"><span style={{ width: '63%' }} /></div></div>
              </div>
            </article>
            <article className="panel" style={{ padding: '1.5rem' }}>
              <h2>Streak calendar</h2>
              <div className="calendar" style={{ marginTop: '1rem' }}>
                {Array.from({ length: 14 }).map((_, i) => <div key={i} className={`day ${i < 12 ? 'done' : ''}`}>{i + 1}</div>)}
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
