'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PersonalityTest from '@/components/PersonalityTest';
import { createClient } from '@/lib/supabase/client';

export default function AuthPage() {
  const supabase = createClient();
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [mode, setMode] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!profile) {
      setMessage('Please complete the personality test first.');
      return;
    }
    setLoading(true);
    setMessage('');

    if (mode === 'signup') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: name },
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        await fetch('/api/onboarding', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: data.user?.id, email, name, profile })
        });
        setMessage('Account created. If email confirmation is enabled, verify your email, then log in.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <main className="container" style={{ padding: '1.2rem 0 3rem' }}>
      <div className="grid-2">
        <div className="stack">
          <div className="card" style={{ padding: '1.5rem' }}>
            <span className="pill">Step 1</span>
            <h1 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', lineHeight: '.98', margin: '1rem 0', maxWidth: '10ch' }}>Enter through your personality test.</h1>
            <p className="muted">Every new user should first define who they are, what they want to improve, and how fast they want to grow.</p>
          </div>
          <PersonalityTest onComplete={(result) => { setProfile(result); setMode('signup'); }} />
        </div>
        <div className="card" style={{ padding: '1.5rem', alignSelf: 'start' }}>
          <div className="stack">
            <div>
              <span className="pill">Step 2</span>
              <h2 style={{ marginTop: '.8rem' }}>{mode === 'signup' ? 'Create free account' : 'Log in'}</h2>
              <p className="muted">This version is free for all users right now. No payment flow is included.</p>
            </div>
            <form className="stack" onSubmit={handleAuth}>
              {mode === 'signup' && <input className="field" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />}
              <input className="field" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className="field" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button className="btn btn-primary" disabled={loading}>{loading ? 'Please wait...' : mode === 'signup' ? 'Create free account' : 'Login to dashboard'}</button>
            </form>
            {message && <div className="panel" style={{ padding: '1rem' }}><p className="muted">{message}</p></div>}
            <button className="btn btn-secondary" onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}>
              {mode === 'signup' ? 'Already have an account? Log in' : 'Need an account? Sign up'}
            </button>
            <div className="panel" style={{ padding: '1rem' }}>
              <strong>Saved onboarding fields</strong>
              <p className="muted">Persona: {profile?.persona || 'Not completed yet'}</p>
              <p className="muted">Traits: {profile?.traits?.join(', ') || 'Not selected'}</p>
              <p className="muted">Pace: {profile?.pace || 'Not selected'}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
