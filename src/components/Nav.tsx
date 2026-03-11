import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { clsx } from 'clsx';

const links = [
  { to: '/', label: 'home' },
  { to: '/projects', label: 'projects' },
  { to: '/about', label: 'about' },
];

export function Nav() {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Frosted glass bar */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20 border-b border-white/10" />
      <nav className="relative flex items-center justify-center px-8 py-5">
        {/* Centered links */}
        <div className="flex items-center gap-10">
          {links.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={clsx(
                  'font-mono text-xs tracking-widest uppercase transition-colors duration-200 relative',
                  active
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                )}
              >
                {label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--accent)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Theme toggle — absolute right */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="absolute right-8 text-white/60 hover:text-white transition-colors duration-200"
        >
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </motion.div>
        </button>
      </nav>
    </header>
  );
}
