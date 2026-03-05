import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.stack.forEach(t => tags.add(t)));
    return ['all', ...Array.from(tags).sort()];
  }, []);

  const filtered = useMemo(() =>
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.stack.includes(activeFilter)),
    [activeFilter]
  );

  return (
    <main className="min-h-screen pt-28 px-8 pb-24 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="text-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] mb-3">
          work
        </p>
        <h1 className="text-display text-[clamp(3rem,6vw,5.5rem)] font-light text-[var(--text)] leading-none">
          Projects
        </h1>
      </motion.div>

      {/* Filter chips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`text-mono text-[10px] tracking-wider px-3 py-1.5 rounded-sm border transition-all duration-200 ${
              activeFilter === tag
                ? 'bg-[var(--accent)] border-[var(--accent)] text-white'
                : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)] hover:text-[var(--text)]'
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Count */}
      <motion.p
        layout
        className="text-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] mb-6"
      >
        {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        {activeFilter !== 'all' && ` → ${activeFilter}`}
      </motion.p>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
