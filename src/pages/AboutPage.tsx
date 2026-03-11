import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';
import { experiences, education, skills } from '@/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-24">
      {/* ── Intro ────────────────────────────────────── */}
      <section className="px-8 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <motion.div
            {...fadeUp(0.1)}
            className="relative"
          >
            <div className="aspect-[3/4] max-w-sm overflow-hidden rounded-sm bg-[var(--bg-secondary)]">
              <img
                src="/me.png"
                alt="Sol"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full max-w-sm aspect-[3/4] border border-[var(--accent)] rounded-sm -z-10 opacity-40" />
          </motion.div>

          {/* Bio */}
          <div className="flex flex-col gap-8 pt-4">
            <motion.div {...fadeUp(0.2)}>
              <p className="text-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] mb-3">
                about
              </p>
              <h1 className="text-display text-[clamp(3rem,5vw,4.5rem)] font-light text-[var(--text)] leading-none mb-8">
                Sol
              </h1>
              <div className="flex items-center gap-2 text-mono text-xs text-[var(--text-muted)] mb-8">
                <MapPin size={12} />
                <span>NYC — or somewhere in the mountains</span>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.3)} className="space-y-4">
              <p className="text-[var(--text)] leading-relaxed">
                I build systems that are fast, reliable, and actually useful — which turns out to be harder than it sounds. I’ve worked on internal tooling for fast-growing startups, scalable APIs, and everything from custom software for small businesses to scrappy early-stage products.
              </p>
              <p>
                I’m especially drawn to problems at the intersection of systems and user experience — where thoughtful architecture quietly determines whether users trust your product (or rage quit). I care about systems that hold up under real world pressure, not just happy-path optimism.
              </p>
              <p>
                Outside of work, I'm usually climbing, skiing, dancing, traveling or chasing my next adventure. Last year I took <a href='https://flightlog.soljin.io/' target='_blank' className='underline'>38 flights</a>... I like staying in motion in all aspects of my life.
              </p>
              <p>
                I'm a lifelong learner, always chasing the next skill — whether it's a new technology, a movement technique, or a creative craft. I love being a beginner. Certified yoga teacher, AMGA rock guide, and currently working toward my bareboat skipper license — just to name a few. Lately I've been adding ice skating, snowboarding, and music production to the mix.              </p>
            </motion.div>

            {/* Skills */}
            <motion.div {...fadeUp(0.4)} className="space-y-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="flex gap-4 items-start">
                  <span className="text-mono text-[10px] tracking-wider text-[var(--text-muted)] uppercase w-24 shrink-0 pt-0.5">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(skill => (
                      <span key={skill} className="text-mono text-[10px] text-[var(--text)] bg-[var(--bg-secondary)] border border-[var(--border)] px-2 py-0.5 rounded-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact links */}
            <motion.div {...fadeUp(0.5)} className="flex items-center gap-6 pt-2">
              <a href="https://github.com/jin501" target="_blank" rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/sol-jin" target="_blank" rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@soljin.io"
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
                <Mail size={18} />
              </a>
              <div className="flex-1" />
              <a
                href="/SolJinResume.pdf"
                download
                className="flex items-center gap-2 text-mono text-[11px] tracking-wider text-[var(--bg)] bg-[var(--accent)] px-4 py-2.5 rounded-sm hover:opacity-80 transition-opacity"
              >
                <Download size={12} />
                resume.pdf
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────── */}
      <div className="px-8 max-w-6xl mx-auto">
        <div className="h-px bg-[var(--border)] mb-24" />
      </div>

      {/* ── Resume Timeline ──────────────────────────── */}
      <section className="px-8 max-w-3xl mx-auto">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="text-mono text-[11px] tracking-widest uppercase text-[var(--text-muted)] mb-3">
            résumé
          </p>
          <h2 className="text-display text-4xl font-light text-[var(--text)]">Experience</h2>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="pl-10 pb-12 relative"
            >
              {/* Dot */}
              <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-display text-xl font-light text-[var(--text)]">{exp.role}</h3>
                  <p className="text-[var(--accent)] text-sm font-medium">{exp.company}</p>
                </div>
                <span className="text-mono text-[11px] tracking-wider text-[var(--text-muted)] shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, j) => (
                  <li key={j} className="text-sm text-[var(--text-muted)] leading-relaxed flex gap-3">
                    <span className="text-[var(--border)] mt-1.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              {exp.stack && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map(tag => (
                    <span key={tag} className="text-mono text-[10px] tracking-wider px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-muted)] rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div {...fadeUp(0.2)} className="mt-4 mb-12">
          <h2 className="text-display text-4xl font-light text-[var(--text)] mb-8">Education</h2>
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]" />
            {education.map((edu, i) => (
              <div key={i} className="pl-10 relative">
                <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border-2 border-[var(--sand)] bg-[var(--bg)]" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-display text-xl font-light text-[var(--text)]">{edu.degree}</h3>
                    <p className="text-[var(--sand)] text-sm">{edu.institution}</p>
                    {edu.notes && <p className="text-mono text-xs text-[var(--text-muted)] mt-1">{edu.notes}</p>}
                  </div>
                  <span className="text-mono text-[11px] tracking-wider text-[var(--text-muted)] shrink-0">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div {...fadeUp(0.3)} className="pt-4 pb-8 flex justify-center">
          <a
            href="/SolJinResume.pdf"
            download
            className="flex items-center gap-2.5 text-mono text-[11px] tracking-widest uppercase border border-[var(--border)] text-[var(--text-muted)] px-8 py-4 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            <Download size={12} />
            download full résumé
          </a>
        </motion.div>
      </section>
    </main>
  );
}
