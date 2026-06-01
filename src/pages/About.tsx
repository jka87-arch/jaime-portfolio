import { motion } from 'framer-motion';
import './About.css';

const skills: Record<string, string[]> = {
  'Languages': ['Python', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  'Frameworks': ['React', 'Vite', 'Bootstrap'],
  'Design Tools': ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Sketch', 'Tableau'],
  'AI Tools': ['Claude API', 'Figma AI', 'ChatGPT', 'Anthropic SDK'],
  'Research Methods': ['User Interviews', 'Usability Testing', 'Card Sorting', 'Journey Mapping', 'Competitive Analysis'],
};

const experience = [
  { date: 'May 2025 – Present', role: 'Product Design Intern', org: 'Forte', desc: 'Designed end-to-end UI for an AI fashion application. Led user research, competitive analysis, and built Figma prototypes used in investor pitches.' },
  { date: 'Jan – May 2025', role: 'UXD Extern, Team Lead', org: 'PharmAllies', desc: 'Led a 6-person team to redesign a 76-page SOP system into an accessible enterprise platform. Delivered 100% on-time across all milestones.' },
  { date: 'Sep 2023 – Jan 2024', role: 'Computational Neuroscience Research Assistant', org: 'Florida Atlantic University', desc: 'Built custom neural network models in Python. Visualized complex neural simulation data for research presentations.' },
];

const education = [
  { date: 'Aug 2024 – May 2026', degree: 'Master of Business and Science', school: 'Rutgers University', detail: 'Computer & Information Sciences · UX Design Concentration · GPA 3.9' },
  { date: 'Aug 2019 – Aug 2023', degree: 'Bachelor of Science, Behavioral Neuroscience', school: 'Florida State University', detail: 'Minors in Chemistry & Biology · GPA 3.5' },
];

export default function About() {
  return (
    <main className="about">
      <section className="about__header">
        <motion.div className="about__header-inner" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <p className="about__label">About</p>
          <h1 className="about__name">Jaime Arrington</h1>
          <p className="about__title">Creative UX Specialist & AI Practitioner</p>
        </motion.div>
      </section>

      <section className="about__bio-section">
        <div className="about__bio-inner">
          <div className="about__bio-photo"><div className="about__photo-placeholder"><span>Photo</span></div></div>
          <div className="about__bio-text">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              My path has never been linear. I've moved through behavioral neuroscience research, computational modeling, medical administration, service industry, and international modeling — not in spite of ambition, but because of it. Each space taught me something the others couldn't.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              The throughline across all of it is people — understanding how they think, what they need, and where systems fail them. That's what brought me to UX, and what keeps me pushing toward the intersection of human behavior and AI.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              Right now I'm finishing my MBS in Computer and Information Sciences at Rutgers, building products at Forte, and co-founding Coquélle Co. I use AI not as a shortcut but as a collaborator — and I document every step of it.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="about__bio-links">
              <a href="mailto:hello@jaimearrington.com" className="about__bio-link">Email ↗</a>
              <a href="https://linkedin.com/in/jaimearrington" target="_blank" rel="noopener noreferrer" className="about__bio-link">LinkedIn ↗</a>
              <a href="/resume.pdf" target="_blank" className="about__bio-link about__bio-link--primary">Download Résumé ↗</a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about__skills-section">
        <div className="about__section-inner">
          <h2 className="about__section-heading">Skills & Stack</h2>
          <div className="about__skills-grid">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div key={category} className="about__skill-group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}>
                <h3 className="about__skill-category">{category}</h3>
                <div className="about__skill-tags">{items.map(item => <span key={item} className="about__skill-tag">{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about__timeline-section">
        <div className="about__section-inner">
          <h2 className="about__section-heading">Experience</h2>
          <div className="about__timeline">
            {experience.map((item, i) => (
              <motion.div key={i} className="about__timeline-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}>
                <span className="about__timeline-date">{item.date}</span>
                <div className="about__timeline-content">
                  <p className="about__timeline-role">{item.role} — <em>{item.org}</em></p>
                  <p className="about__timeline-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about__timeline-section about__timeline-section--light">
        <div className="about__section-inner">
          <h2 className="about__section-heading">Education</h2>
          <div className="about__timeline">
            {education.map((item, i) => (
              <motion.div key={i} className="about__timeline-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}>
                <span className="about__timeline-date">{item.date}</span>
                <div className="about__timeline-content">
                  <p className="about__timeline-role">{item.degree} — <em>{item.school}</em></p>
                  <p className="about__timeline-desc">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
