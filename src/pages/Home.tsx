import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import logoFull from '../assets/logo-full.png';
import logoAsterisk from '../assets/logo-asterisk.png';
import './Home.css';

const WORDS = ['people', 'culture', 'fashion', 'arts', 'technology', 'experimentation', 'life'];
const BURST_COUNT = 28;

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  rotEnd: number;
  duration: number;
  delay: number;
};

function makeParticles(): Particle[] {
  return Array.from({ length: BURST_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 48,
    rotEnd: (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360),
    duration: 0.55 + Math.random() * 0.5,
    delay: Math.random() * 0.25,
  }));
}

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);
  const burstTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % WORDS.length);
        setVisible(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  function triggerBurst() {
    if (burstTimeout.current) return;
    setParticles(makeParticles());
    burstTimeout.current = setTimeout(() => {
      setParticles([]);
      burstTimeout.current = null;
    }, 3100);
  }

  return (
    <main className="home">
      <section className="hero" data-nav-theme="blue">
        <div className="hero__inner">

          {/* Logo block */}
          <motion.div
            className="hero__logo-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src={logoFull} alt="Jaime's Portie" className="hero__logo-full" />
            <img
              src={logoAsterisk}
              alt=""
              className="hero__logo-asterisk"
              onMouseEnter={triggerBurst}
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="hero__tagline-static">
              an innovator boldly following my passion for
            </span>
            <span
              className={`hero__tagline-word ${visible ? 'hero__tagline-word--visible' : ''}`}
            >
              {WORDS[wordIndex]}
            </span>
          </motion.div>

          {/* Skills strip */}
          <motion.div
            className="hero__stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {['React', 'TypeScript', 'Python', 'Figma', 'Tableau', 'UX Research'].map((skill, i) => (
              <span key={skill} className="hero__skill" style={{ animationDelay: `${i * 0.07 + 0.4}s` }}>
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          scroll to see work
          <span className="hero__scroll-arrow">↓</span>
        </motion.div>
      </section>

      {/* Burst overlay */}
      {particles.length > 0 && (
        <div className="burst-overlay" aria-hidden="true">
          {particles.map(p => (
            <img
              key={p.id}
              src={logoAsterisk}
              className="burst-particle"
              style={{
                left: `${p.x}vw`,
                top: `${p.y}vh`,
                width: p.size,
                height: p.size,
                '--rot-end': `${p.rotEnd}deg`,
                '--dur': `${p.duration}s`,
                '--del': `${p.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* Project Cards */}
      <section className="projects">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>
    </main>
  );
}