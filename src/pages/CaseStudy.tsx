import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import './CaseStudy.css';

const PLACEHOLDER_MEDIA = [
  { label: 'Project Media 1', bg: 'rgba(245,239,168,0.12)' },
  { label: 'Project Media 2', bg: 'rgba(245,239,168,0.08)' },
  { label: 'Project Media 3', bg: 'rgba(245,239,168,0.16)' },
];

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const [mediaIndex, setMediaIndex] = useState(0);

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <main className="case-study">
      {/* Hero Image */}
      <section className="cs-hero">
        {project.heroImage ? (
          <img src={project.heroImage} alt={project.title} className="cs-hero__img" />
        ) : (
          <div className="cs-hero__placeholder">
            <span className="cs-hero__placeholder-title">{project.title}</span>
          </div>
        )}
      </section>

      {/* Title Block */}
      <section className="cs-title-block">
        <div className="cs-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Link to="/" className="cs-back">← Back to Work</Link>
            <div className="cs-tags">
              {project.tags.map(tag => (
                <span key={tag} className="cs-tag">{tag}</span>
              ))}
              </div>
            <h1 className="cs-title">{project.title}</h1>
            <p className="cs-subtitle">{project.subtitle}</p>
          </motion.div>

          {/* Three-column meta block */}
          <motion.div
            className="cs-meta-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease: 'easeOut' }}
          >
            <div className="cs-meta-col">
              <p className="cs-meta-label">My Role</p>
              <p className="cs-meta-text">{project.role}</p>
            </div>
            <div className="cs-meta-col">
              <p className="cs-meta-label">The Project</p>
              <p className="cs-meta-text">{project.overview}</p>
            </div>
            <div className="cs-meta-col">
              <p className="cs-meta-label">The Challenge</p>
              <p className="cs-meta-text">{project.challenge}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="cs-process-section">
        <div className="cs-inner">
          <motion.h2
            className="cs-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Process
          </motion.h2>

          {project.process.map((step, i) => (
            <motion.div
              key={i}
              className={`cs-process-step ${step.image ? 'cs-process-step--has-img' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
              <div className="cs-process-text">
                <h3 className="cs-process-heading">{step.heading}</h3>
                <p className="cs-process-body">{step.body}</p>
              </div>
              {step.image && (
                <div className="cs-process-img-wrap">
                  <img src={step.image} alt={step.heading} className="cs-process-img" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Media Carousel */}
      <section className="cs-media-section">
        <div className="cs-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cs-media-heading">Case Media</h2>
            {(() => {
              const count = project.media ? project.media.length : PLACEHOLDER_MEDIA.length;
              return (
                <>
                  <div className="cs-carousel">
                    <button
                      className="cs-carousel-btn"
                      onClick={() => setMediaIndex(i => Math.max(0, i - 1))}
                      disabled={mediaIndex === 0}
                      aria-label="Previous image"
                    >
                      ←
                    </button>

                    <div className="cs-carousel-stage">
                      {project.media ? project.media.map((item, i) => (
                        <div
                          key={i}
                          className={`cs-carousel-slide ${i === mediaIndex ? 'cs-carousel-slide--active' : ''}`}
                          aria-hidden={i !== mediaIndex}
                        >
                          <img src={item.src} alt={item.caption} className="cs-carousel-img" />
                          <p className="cs-carousel-caption">{item.caption}</p>
                        </div>
                      )) : PLACEHOLDER_MEDIA.map((item, i) => (
                        <div
                          key={i}
                          className={`cs-carousel-slide ${i === mediaIndex ? 'cs-carousel-slide--active' : ''}`}
                          aria-hidden={i !== mediaIndex}
                        >
                          <div className="cs-media-placeholder" style={{ background: item.bg }}>
                            <span className="cs-media-placeholder-label">{item.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      className="cs-carousel-btn"
                      onClick={() => setMediaIndex(i => Math.min(count - 1, i + 1))}
                      disabled={mediaIndex === count - 1}
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </div>

                  <div className="cs-carousel-dots">
                    {Array.from({ length: count }).map((_, i: number) => (
                      <button
                        key={i}
                        className={`cs-carousel-dot ${i === mediaIndex ? 'cs-carousel-dot--active' : ''}`}
                        onClick={() => setMediaIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="cs-outcomes-section">
        <div className="cs-inner">
          <motion.h2
            className="cs-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Outcomes
          </motion.h2>
          <div className="cs-outcomes-list">
            {project.outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                className="cs-outcome-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
              >
                <span className="cs-outcome-marker">→</span>
                <p className="cs-outcome-text">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      {project.nextSteps && (
        <section className="cs-next-steps-section">
          <div className="cs-inner">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
              <h2 className="cs-section-heading">What's Next</h2>
              <p className="cs-next-steps-body">{project.nextSteps}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="cs-nav-section">
        <div className="cs-nav-inner">
          {prev ? (
            <Link to={`/work/${prev.slug}`} className="cs-nav-card cs-nav-card--prev">
              <span className="cs-nav-dir">← Previous</span>
              <span className="cs-nav-title">{prev.title}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/work/${next.slug}`} className="cs-nav-card cs-nav-card--next">
              <span className="cs-nav-dir">Next →</span>
              <span className="cs-nav-title">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </section>
    </main>
  );
}
