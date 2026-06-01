import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import logoFull from '../assets/logo-full.png';
import logoAsterisk from '../assets/logo-asterisk.png';
import './Home.css';

const WORDS = ['people', 'culture', 'fashion', 'arts', 'technology', 'experimentation', 'life'];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

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
            <img src={logoAsterisk} alt="" className="hero__logo-asterisk" />
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
            {['React', 'TypeScript', 'Python', 'Figma', 'Claude API', 'Tableau', 'UX Research', 'AI Workflow'].map((skill, i) => (
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

      {/* Project Cards */}
      <section className="projects">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>
    </main>
  );
}