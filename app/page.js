import Link from 'next/link';

export default function Home() {
  return (
    <main className="container" style={{ padding: '2rem 0 4rem' }}>
      <div className="hero">
        <section className="card" style={{ padding: '2rem' }}>
          <span className="pill">Free MVP • ready for real users</span>
          <h1 style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', lineHeight: '.98', margin: '1rem 0', maxWidth: '10ch' }}>Build a stronger personality in the real world.</h1>
          <p className="muted">Persona Forge is now structured as a free customer-facing app. New users start with a personality test at auth entry, then move into missions, AI coaching, progress tracking, reflections, and milestone-based growth.</p>
          <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
            <Link className="btn btn-primary" href="/auth">Start free assessment</Link>
            <Link className="btn btn-secondary" href="/dashboard">Open demo dashboard</Link>
          </div>
        </section>
        <section className="panel" style={{ padding: '2rem' }}>
          <div className="stack">
            <div>
              <span className="tag">Included now</span>
              <h2 style={{ marginTop: '.75rem' }}>Functional product starter</h2>
            </div>
            <div className="grid-2">
              <div className="panel" style={{ padding: '1rem' }}><strong>Signup + login</strong><p className="muted">Supabase-ready auth flow.</p></div>
              <div className="panel" style={{ padding: '1rem' }}><strong>Personality test</strong><p className="muted">Placed before entry into the app.</p></div>
              <div className="panel" style={{ padding: '1rem' }}><strong>Dashboard</strong><p className="muted">Real missions, streaks, and progress UI.</p></div>
              <div className="panel" style={{ padding: '1rem' }}><strong>API routes</strong><p className="muted">Starter endpoints for onboarding, missions, reflections, and coaching.</p></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
