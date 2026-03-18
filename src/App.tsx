import ParticleField from './components/ParticleField';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { globalEvents } from './data/global';
import { personalEvents } from './data/personal';

export default function App() {
  return (
    <>
      <ParticleField />
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Timeline
          globalEvents={globalEvents}
          personalEvents={personalEvents}
        />
      </main>
      <footer
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '60px 20px',
          color: 'rgba(255,255,255,0.2)',
          fontFamily: "'Orbitron', monospace",
          fontSize: '0.7rem',
          letterSpacing: '3px',
        }}
      >
        WORLD EVENTS & MY TIMELINE — {new Date().getFullYear()}
      </footer>
    </>
  );
}
