import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import './ProjectCard.css';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {

  return (
    <motion.div
      data-nav-theme="cream"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Link to={`/work/${project.slug}`} className="project-card__link">
        <div className="project-card__inner">
          {/* Image / placeholder */}
          <div className="project-card__media">
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} className="project-card__img" />
            ) : (
              <div className="project-card__placeholder">
                <span className="project-card__placeholder-num">0{index + 1}</span>
              </div>
            )}
            {project.context && (
              <span className="project-card__context-badge">{project.context}</span>
            )}
          </div>

          {/* Content */}
          <div className="project-card__content">
            <div className="project-card__tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
              <span className="project-card__year">{project.year}</span>
            </div>

            <h2 className="project-card__title">{project.title}</h2>
            <p className="project-card__one-liner">{project.oneLiner}</p>

            <span className="project-card__cta">
              View Case Study
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
