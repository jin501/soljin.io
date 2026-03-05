import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';

interface Props {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative bg-[var(--card-bg)] border border-[var(--border)] rounded-sm p-6 flex flex-col gap-4 hover:border-[var(--accent)] transition-colors duration-300"
    >
      {/* Year */}
      <span className="text-mono text-[11px] text-[var(--text-muted)] tracking-widest">
        {project.year}
      </span>

      {/* Title */}
      <h3 className="text-display text-2xl font-light text-[var(--text)] leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map(tag => (
          <span
            key={tag}
            className="text-mono text-[10px] tracking-wider px-2 py-1 bg-[var(--bg-secondary)] text-[var(--text-muted)] rounded-sm border border-[var(--border)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-mono text-[11px] tracking-wider text-[var(--accent)] hover:opacity-70 transition-opacity"
          >
            <ExternalLink size={12} />
            live
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-mono text-[11px] tracking-wider text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Github size={12} />
            repo
          </a>
        )}
      </div>
    </motion.article>
  );
}
